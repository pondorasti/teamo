import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { usersRef } from "../../../../api/firebase"
import * as types from "./types"
import { selectCurrentUserId } from "../../../../redux/slices/currentUser/currentUserSlice"

const initialState = {
  status: "idle",
  error: null,
}

export const acceptAgreement = createAsyncThunk(types.accept, async (_, { getState }) => {
  const id = selectCurrentUserId(getState())
  await usersRef.doc(id).update({ signedAgreement: true })
})

const agreementSlice = createSlice({
  name: types.agreement,
  initialState,
  reducers: {},
  extraReducers: {
    [acceptAgreement.pending]: (state) => {
      state.status = "loading"
    },
    [acceptAgreement.fulfilled]: (state) => {
      state.status = "succeeded"
    },
    [acceptAgreement.rejected]: (state, action) => {
      state.status = "failed"
      state.error = action.error.message
    },
  },
})

export const selectAgreementStatus = (state) => state[types.agreement].status

export default agreementSlice.reducer
