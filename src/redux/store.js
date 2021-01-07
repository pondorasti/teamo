import { configureStore } from "@reduxjs/toolkit"
import gamesReducers from "./slices/games/gamesSlice"

export default configureStore({
  reducer: {
    games: gamesReducers,
    // lobbies: lobbiesReducers,
  },
})
