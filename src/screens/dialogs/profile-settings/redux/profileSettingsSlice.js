import { createSlice, createAsyncThunk, nanoid } from "@reduxjs/toolkit"
import {
  usersRef,
  takenUsernamesRef,
  profilePicturesStorageRef,
} from "../../../../api/firebase"
import * as types from "./types"
import { selectCurrentUserId } from "../../../redux/slices/currentUser/currentUserSlice"

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
const usernameTakenError =
  "Username has already been taken. Seems like great minds really do think alike."

export const updateProfile = createAsyncThunk(
  types.updateProfile,
  // eslint-disable-next-line consistent-return
  async ({ profilePictureUrl, username, description }, { getState }) => {
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

    // upload profile picture image to backend storage
    const id = selectCurrentUserId(getState())
    const fileName = nanoid()
    const storageRef = profilePicturesStorageRef.child(id).child(fileName)

    const response = await fetch(profilePictureUrl)
    const imageBlob = await response.blob()
    const templateProfilePictureFile = new File([imageBlob], fileName, {
      type: "image/png",
    })
    await storageRef.put(templateProfilePictureFile)

    // get profile picture URL
    let storageProfilePictureUrl
    await storageRef.getDownloadURL().then((url) => {
      storageProfilePictureUrl = url
    })

    // update user document
    await takenUsernamesRef.doc(lowerCaseUsername).set({})
    await usersRef.doc(id).update({
      username,
      description,
      profilePictureUrl: storageProfilePictureUrl,
      finishedSignUp: true,
    })
  },
)

const profileSettingsSlice = createSlice({
  name: types.profileSettings,
  initialState,
  reducers: {},
  extraReducers: {
    [updateProfile.pending]: (state) => {
      state.updateStatus = "loading"
    },
    [updateProfile.fulfilled]: (state) => {
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
