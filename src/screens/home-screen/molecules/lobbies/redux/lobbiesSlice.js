import { createSlice, createAsyncThunk, nanoid } from "@reduxjs/toolkit"
import * as types from "./types"
import lobbies from "../../../../../api/dummy-data/lobbies"

export const fetchLobbies = createAsyncThunk(types.fetchLobbies, async () => {
  await setTimeout(() => {}, 3000)
  return null
})

const initialState = {
  lobbies,
  status: "idle",
  error: null,
}

const lobbiesSlice = createSlice({
  name: types.lobbies,
  initialState,
  reducers: {
    lobbyAdded: {
      reducer(state, action) {
        state.lobbies.push(action.payload)
      },
      prepare(hostId, game, platform, microphone, size, description) {
        return {
          payload: {
            id: nanoid(),
            timestamp: new Date().toISOString(),
            hostId,
            game,
            platform,
            microphone,
            size,
            description,
          },
        }
      },
    },
  },
  extraReducers: {
    // eslint-disable-next-line no-unused-vars
    [fetchLobbies.pending]: (state, action) => {
      state.status = "loading"
    },
    // eslint-disable-next-line no-unused-vars
    [fetchLobbies.fulfilled]: (state, action) => {
      state.status = "succeeded"
    },
    // eslint-disable-next-line no-unused-vars
    [fetchLobbies.rejected]: (state, action) => {
      state.status = "failed"
      state.error = action.error.message
    },
  },
})

export const { lobbyAdded } = lobbiesSlice.actions

export const selectAllLobbies = (state) => state[types.lobbies].lobbies

export default lobbiesSlice.reducer
