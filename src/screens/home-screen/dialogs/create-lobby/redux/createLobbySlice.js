import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { lobbiesRef } from "../../../../../api/firebase"
import { selectCurrentUser } from "../../../../redux/slices/currentUser/currentUserSlice"
import * as types from "./types"

export const addNewLobby = createAsyncThunk(
  types.addNewLobby,
  async ({ game, platform, microphone, size, description }, { getState }) => {
    const currentUser = selectCurrentUser(getState())
    const cache = {
      hostUser: {
        username: currentUser.username,
        profilePictureUrl: currentUser.profilePictureUrl,
      },
      game,
    }
    const lobby = {
      hostId: currentUser.id,
      timestamp: new Date().toISOString(),
      cache,
      gameId: game.id,
      platform,
      microphone,
      size,
      description,
    }

    const newLobbyRef = await lobbiesRef.add(lobby)
    const lobbyId = newLobbyRef.id
    await lobbiesRef.doc(lobbyId).update({ id: lobbyId })
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
    resetStatus(state) {
      state.status = "idle"
    },
  },
  extraReducers: {
    [addNewLobby.pending]: (state) => {
      state.status = "loading"
    },
    [addNewLobby.fulfilled]: (state) => {
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
