import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { usersRef } from "../../../../api/firebase"
import * as types from "./types"
import { selectCurrentUserId } from "../../../../redux/slices/currentUser/currentUserSlice"

const initialState = {
  agreements: {},
  status: "idle",
  error: null,
}

const acceptAgreementsError =
  "There was a problem accepting the terms.\n Please try again."

export const acceptAgreements = createAsyncThunk(
  types.acceptAgreements,
  async (_, { getState }) => {
    const id = selectCurrentUserId(getState())
    await usersRef.doc(id).update({ signedAgreements: true })
  },
)

const agreementsSlice = createSlice({
  name: types.agreements,
  initialState,
  reducers: {},
  extraReducers: {
    // Accept Agreements
    [acceptAgreements.pending]: (state) => {
      state.status = "loading"
    },
    [acceptAgreements.fulfilled]: (state) => {
      state.status = "succeeded"
    },
    [acceptAgreements.rejected]: (state) => {
      state.status = "failed"
      state.error = acceptAgreementsError
    },
  },
})

export const selectStatus = (state) => state[types.agreements].status
export const selectError = (state) => state[types.agreements].error

export default agreementsSlice.reducer
