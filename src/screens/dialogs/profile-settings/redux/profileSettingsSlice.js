import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import {
  usersRef,
  takenUsernamesRef,
  profilePicturesStorageRef,
} from "../../../../api/firebase"
import * as types from "./types"
import { selectCurrentUserId } from "../../../../redux/slices/currentUser/currentUserSlice"

const initialState = {
  updateStatus: "idle",
  updateError: null,
  usernameError: null,
  descriptionError: null,
}

const usernameRegex = new RegExp("^([a-zA-Z0-9_]{0,32}[a-zA-Z]+[0-9]*)$") // allow letters, numbers, and underscores
const usernameFormatError =
  "Your username must be 32 characters or less containing only letters, numbers, underscores, and at least one letter."
const descriptionFormatError = "Must be 62 characters or lower."
const usernameTakenError = "Username has already been taken."

export const updateProfile = createAsyncThunk(
  types.updateProfile,
  // eslint-disable-next-line consistent-return
  async ({ profilePictureFile, username, description }, { getState }) => {
    // username form validation
    if (!usernameRegex.test(username)) {
      return Promise.reject(new Error(usernameFormatError))
    }

    // description form validation
    if (description.length > 62) {
      return Promise.reject(new Error(descriptionFormatError))
    }

    // check for unique username
    const lowerCaseUsername = username.toLowerCase()
    await takenUsernamesRef
      .doc(lowerCaseUsername)
      .get()
      // eslint-disable-next-line consistent-return
      .then((snap) => {
        if (snap.exists) {
          return Promise.reject(new Error(usernameTakenError))
        }
      })

    const id = selectCurrentUserId(getState())
    const fileName = profilePictureFile.name
    let profilePictureUrl

    // upload profile picture image to backend storage

    // const response = await fetch(WavingRacoon)
    // const blob = await response.blob()
    // const storageRef = profilePicturesStorageRef.child(id).child("WavingRacoon.png")
    // await storageRef.put(new File([blob], WavingRacoon, { type: "image/png" }))

    const storageRef = profilePicturesStorageRef.child(id).child(fileName)
    await storageRef.put(profilePictureFile)
    await storageRef.getDownloadURL().then((url) => {
      profilePictureUrl = url
    })

    // update user document
    await takenUsernamesRef.doc(lowerCaseUsername).set({})
    await usersRef
      .doc(id)
      .update({ username, description, profilePictureUrl, finishedSignUp: true })
  },
)

const profileSettingsSlice = createSlice({
  name: types.profileSettings,
  initialState,
  reducers: {},
  extraReducers: {
    // eslint-disable-next-line no-unused-vars
    [updateProfile.pending]: (state, action) => {
      state.updateStatus = "loading"
    },
    // eslint-disable-next-line no-unused-vars
    [updateProfile.fulfilled]: (state, action) => {
      state.updateStatus = "succeeded"
    },
    [updateProfile.rejected]: (state, action) => {
      console.log(action.error.message)
      state.updateStatus = "error"

      state.usernameError = null
      state.descriptionError = null
      state.updateError = null

      if (action.error.message === usernameFormatError) {
        state.usernameError = usernameFormatError
      } else if (action.error.message === descriptionFormatError) {
        state.descriptionError = descriptionFormatError
      } else if (action.error.message === usernameTakenError) {
        state.usernameError = usernameTakenError
      }
    },
  },
})

export const selectUpdateStatus = (state) => state[types.profileSettings].updateStatus
export const selectUpdateError = (state) => state[types.profileSettings].updateError
export const selectUsernameError = (state) => state[types.profileSettings].usernameError
export const selectDescriptionError = (state) =>
  state[types.profileSettings].descriptionError

export default profileSettingsSlice.reducer
