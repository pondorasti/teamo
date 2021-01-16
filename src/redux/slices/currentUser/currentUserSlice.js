import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import firebase from "firebase/app"
import "firebase/auth"
import { auth, usersRef } from "../../../api/firebase"
import * as types from "./types"

const initialState = {
  signInStatus: "idle",
  signInError: null,
}

export const login = createAsyncThunk(types.login, async () => {
  const provider = new firebase.auth.GoogleAuthProvider()
  await auth.signInWithPopup(provider)
  const authJSON = auth.currentUser.toJSON()

  // check if user exists in database, if not, add user
  await usersRef
    .doc(authJSON.uid)
    .get()
    .then((doc) => {
      if (!doc.exists) {
        usersRef.doc(authJSON.uid).set({
          id: authJSON.uid,
          creationDate: new Date().toISOString(),
        })
      }
    })
})

export const signOut = createAsyncThunk(types.signOut, async () => {
  await auth.signOut()
})

const currentUserSlice = createSlice({
  name: types.currentUser,
  initialState,
  reducers: {
    update(state, action) {
      state.user = action.payload
    },
  },
  extraReducers: {
    [login.pending]: (state) => {
      state.signInStatus = "loading"
    },
    [login.fulfilled]: (state) => {
      state.signInStatus = "succeeded"
    },
    [login.rejected]: (state, action) => {
      state.signInStatus = "failed"
      state.signInError = action.error.message
    },

    [signOut.fulfilled]: (state) => {
      // TODO: remove user subscriber
      state.user = null
      state.signInStatus = "idle"
      state.signInError = null
    },
  },
})

export const selectSignInStatus = (state) => state[types.currentUser].signInStatus
export const selectUserNeedsAgreement = (state) => {
  const { user } = state[types.currentUser]
  if (user) {
    return user.signedAgreements !== true
  }
  return false
}
export const selectUserNeedsProfile = (state) => {
  const { user } = state[types.currentUser]
  if (user) {
    return user.finishedSignUp !== true
  }
  return false
}

export const selectCurrentUser = (state) => state[types.currentUser].user
export const selectCurrentUserId = (state) => state[types.currentUser].user.id

export const { update } = currentUserSlice.actions

export const subscribeToCurrentUser = (dispatch, id) => {
  usersRef.doc(id).onSnapshot((snap) => {
    const newUserData = snap.data()
    if (newUserData) {
      dispatch(update(newUserData))
    }
  })
}

export default currentUserSlice.reducer
