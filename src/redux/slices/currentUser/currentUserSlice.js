import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import firebase from "firebase/app"
import "firebase/auth"
import auth from "../../../api/firebase/auth"
import firestore from "../../../api/firebase/firestore"
import * as types from "./types"

const usersRef = firestore.collection("users")

const initialState = {
  signInStatus: "idle",
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
        })
      }
    })

  return authJSON
})

const currentUserSlice = createSlice({
  name: types.currentUser,
  initialState,
  reducers: {
    updateCurrentUser(state, action) {
      state.user = action.payload
    },
  },
  extraReducers: {
    // eslint-disable-next-line no-unused-vars
    [login.pending]: (state, action) => {
      state.signInStatus = "loading"
    },
    // eslint-disable-next-line no-unused-vars
    [login.fulfilled]: (state, action) => {
      state.signInStatus = "succeeded"
      state.user = {
        id: action.payload.uid,
        photoUrl: action.payload.photoURL,
      }
    },
    // eslint-disable-next-line no-unused-vars
    [login.rejected]: (state, action) => {
      state.signInStatus = "failed"
      // state.error = action.error.message
    },
  },
})

export const { updateCurrentUser } = currentUserSlice.actions
export const selectSignInStatus = (state) => state[types.currentUser].signInStatus

export default currentUserSlice.reducer
