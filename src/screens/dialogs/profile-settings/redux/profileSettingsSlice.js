import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { usersRef, profilePicturesStorageRef } from "../../../../api/firebase"
import * as types from "./types"
import { selectCurrentUserId } from "../../../../redux/slices/currentUser/currentUserSlice"

const initialState = {
  updateStatus: "idle",
  updateError: null,
}

export const updateProfile = createAsyncThunk(
  types.updateProfile,
  async (profilePictureUrl, username, description, { getState }) => {
    const id = selectCurrentUserId(getState())
    const fileName = "image"
    profilePicturesStorageRef.child(id).child(fileName).put(profilePictureUrl)
    await usersRef.doc(id).update({ username, description })
  },
)

const profileSettingsSlice = createSlice({
  name: types.profileSettings,
  initialState,
  reducers: {},
  extraReducers: {},
})

export const selectUpdateStatus = (state) => state[types.profileSettings].updateStatus
export const selectUpdateError = (state) => state[types.profileSettings].updateError

export default profileSettingsSlice.reducer
