import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { usersRef } from "../../../../api/firebase"
import { agreementsRecordsUrl } from "../../../../api/airtable"
import * as types from "./types"
import { selectCurrentUserId } from "../../../../redux/slices/currentUser/currentUserSlice"

const initialState = {
  agreements: {},
  fetchStatus: "idle",
  acceptStatus: "idle",
  error: null,
}

export const fetchAgreements = createAsyncThunk(types.fetchAgreements, async () => {
  const url = agreementsRecordsUrl

  const response = await fetch(url)
    .then((data) => data.json())
    .then((data) => data.records)
    .then((data) =>
      Object.assign(
        {},
        ...data.map((item) => ({ [item.fields.Name]: item.fields.Attachments[0].url })),
      ),
    )

  return response
})

export const acceptAgreements = createAsyncThunk(
  types.acceptAgreements,
  async (_, { getState }) => {
    const id = selectCurrentUserId(getState())
    await usersRef.doc(id).update({ signedAgreement: true })
  },
)

const agreementsSlice = createSlice({
  name: types.agreements,
  initialState,
  reducers: {},
  extraReducers: {
    // Fetch Agreements
    [fetchAgreements.fulfilled]: (state, action) => {
      state.fetchStatus = "loading"
      state.agreements = action.payload
    },
    [fetchAgreements.fulfilled]: (state, action) => {
      state.fetchStatus = "succeeded"
      state.agreements = action.payload
    },
    [fetchAgreements.rejected]: (state) => {
      state.fetchStatus = "failed"
      state.error =
        "There was a problem retrieving the agreements. Please refresh the page."
    },

    // Accept Agreements
    [acceptAgreements.pending]: (state) => {
      state.acceptStatus = "loading"
    },
    [acceptAgreements.fulfilled]: (state) => {
      state.acceptStatus = "succeeded"
    },
    [acceptAgreements.rejected]: (state, action) => {
      state.acceptStatus = "failed"
      state.error = action.error.message
    },
  },
})

export const selectFetchAgreementsStatus = (state) => state[types.agreements].fetchStatus
export const selectAcceptAgreementsStatus = (state) =>
  state[types.agreements].acceptStatus
export const selectAgreements = (state) => state[types.agreements].agreements

export default agreementsSlice.reducer
