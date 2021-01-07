import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import * as types from "./types"

export const addNewLobby = createAsyncThunk(types.addNewLobby, async (lobby) => lobby)

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
      // TODO: update status after dismiss
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
