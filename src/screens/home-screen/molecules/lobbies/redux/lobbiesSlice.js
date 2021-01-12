import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import * as types from "./types"
import { lobbiesRef } from "../../../../../api/firebase"
import heroLobbies from "../../../../../api/dummy-data/heroLobbies"

export const fetchLobbies = createAsyncThunk(types.fetchLobbies, async () => {
  const querySnapshot = await lobbiesRef.get()

  const lobbies = []
  querySnapshot.forEach((doc) => {
    lobbies.push(doc.data())
  })

  return lobbies
})

const initialState = {
  lobbies: heroLobbies,
  status: "idle",
  error: null,
}

const lobbiesSlice = createSlice({
  name: types.lobbies,
  initialState,
  reducers: {},
  extraReducers: {
    // eslint-disable-next-line no-unused-vars
    [fetchLobbies.pending]: (state, action) => {
      state.status = "loading"
    },
    // eslint-disable-next-line no-unused-vars
    [fetchLobbies.fulfilled]: (state, action) => {
      state.status = "succeeded"
      state.lobbies = action.payload
    },
    // eslint-disable-next-line no-unused-vars
    [fetchLobbies.rejected]: (state, action) => {
      state.status = "failed"
      state.error = action.error.message
    },
  },
})

export const selectAllLobbies = (state) => state[types.lobbies].lobbies

export default lobbiesSlice.reducer
