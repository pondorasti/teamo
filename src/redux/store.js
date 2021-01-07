import { configureStore } from "@reduxjs/toolkit"
import gamesReducers from "./slices/games/gamesSlice"
import createLobbyReducers from "../screens/home-screen/dialogs/create-lobby/redux/createLobbySlice"
import lobbiesReducers from "../screens/home-screen/molecules/lobbies/redux/lobbiesSlice"

export default configureStore({
  reducer: {
    games: gamesReducers,
    createLobby: createLobbyReducers,
    lobbies: lobbiesReducers,
  },
})
