import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import firebase from "firebase/app"
import "firebase/auth"
import auth from "../../../api/firebase/auth"
import firestore from "../../../api/firebase/firestore"
import * as types from "./types"

const usersRef = firestore.collection("users")

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
          profilePictureUrl: authJSON.photoURL,
        })
      }
    })
})

export const updateCurrentUser = createAsyncThunk(
  types.updateCurrentUser,
  async ({ id }) => {
    let data
    await usersRef
      .doc(id)
      .get()
      .then((doc) => {
        if (doc.exists) {
          data = doc.data()
        }
      })

    return data
  },
)

export const signOut = createAsyncThunk(types.signOut, async () => {
  await auth.signOut()
})

const currentUserSlice = createSlice({
  name: types.currentUser,
  initialState,
  reducers: {},
  extraReducers: {
    // eslint-disable-next-line no-unused-vars
    [login.pending]: (state, action) => {
      state.signInStatus = "loading"
    },
    // eslint-disable-next-line no-unused-vars
    [login.fulfilled]: (state, action) => {
      state.signInStatus = "succeeded"
    },
    [login.rejected]: (state, action) => {
      state.signInStatus = "failed"
      state.signInError = action.error.message
    },

    [updateCurrentUser.fulfilled]: (state, action) => {
      state.user = action.payload
    },
    // eslint-disable-next-line no-unused-vars
    [signOut.fulfilled]: (state, action) => {
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
    return user.agreement !== true
  }
  return false
}
export const selectUserNeedsSetup = (state) => {
  const { user } = state[types.currentUser]
  if (user) {
    return user.username == null
  }
  return false
}

export const selectCurrentUser = (state) => state[types.currentUser].user
export const selectCurrentUserId = (state) => state[types.currentUser].user.id

export default currentUserSlice.reducer
