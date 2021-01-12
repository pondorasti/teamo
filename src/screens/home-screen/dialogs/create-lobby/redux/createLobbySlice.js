import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { lobbiesRef } from "../../../../../api/firebase"
import { selectCurrentUserId } from "../../../../../redux/slices/currentUser/currentUserSlice"
import * as types from "./types"

export const addNewLobby = createAsyncThunk(
  types.addNewLobby,
  async ({ game, platform, microphone, size, description }, { getState }) => {
    const hostId = selectCurrentUserId(getState())
    const lobby = {
      hostId,
      timestamp: new Date().toISOString(),
      game,
      platform,
      microphone,
      size,
      description,
    }

    const newLobbyRef = await lobbiesRef.add(lobby)
    const lobbyId = newLobbyRef.id
    await lobbiesRef.doc(lobbyId).update({ lobbyId })
  },
)

const initialState = {
  status: "idle",
  error: null,
}

const createLobbySlice = createSlice({
  name: types.createLobby,
  initialState,
  reducers: {
    // eslint-disable-next-line no-unused-vars
    resetStatus(state, action) {
      state.status = "idle"
    },
  },
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

export const { resetStatus } = createLobbySlice.actions

export const selectStatus = (state) => state[types.createLobby].status

export default createLobbySlice.reducer
