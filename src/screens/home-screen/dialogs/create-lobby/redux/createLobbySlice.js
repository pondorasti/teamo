import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import * as types from "./types"

function timeout(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export const addNewLobby = createAsyncThunk(types.addNewLobby, async (lobby) => {
  await timeout(10000)
  return lobby
})

const initialState = {
  status: "idle",
  error: null,
}

const createLobbySlice = createSlice({
  name: types.createLobby,
  initialState,
  reducers: {},
  extraReducers: {
    // eslint-disable-next-line no-unused-vars
    [addNewLobby.pending]: (state, action) => {
      state.status = "loading"
    },
    // eslint-disable-next-line no-unused-vars
    [addNewLobby.fulfilled]: (state, action) => {
      state.status = "succeeded"
    },
    [addNewLobby.rejected]: (state, action) => {
      state.status = "failed"
      state.error = action.error.message
    },
  },
})

export const selectStatus = (state) => state[types.createLobby].status

export default createLobbySlice.reducer
