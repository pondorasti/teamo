import { configureStore } from "@reduxjs/toolkit"
import currentUserReducers from "./slices/currentUser/currentUserSlice"
import profileSettingsReducer from "../screens/dialogs/profile-settings/redux/profileSettingsSlice"
import agreementsReducers from "../screens/dialogs/agreement/redux/agreementsSlice"
import gamesReducers from "./slices/games/gamesSlice"
import createLobbyReducers from "../screens/home-screen/dialogs/create-lobby/redux/createLobbySlice"
import lobbiesReducers from "../screens/home-screen/molecules/lobbies/redux/lobbiesSlice"

export default configureStore({
  reducer: {
    currentUser: currentUserReducers,
    profileSettings: profileSettingsReducer,
    agreements: agreementsReducers,
    games: gamesReducers,
    createLobby: createLobbyReducers,
    lobbies: lobbiesReducers,
  },
})
