import { configureStore } from "@reduxjs/toolkit"
import currentUserReducers from "./slices/currentUser/currentUserSlice"
import profileSettingsReducer from "../dialogs/profile-settings/redux/profileSettingsSlice"
import agreementsReducers from "../dialogs/agreement/redux/agreementsSlice"
import gamesReducers from "./slices/games/gamesSlice"
import createLobbyReducers from "../home-screen/dialogs/create-lobby/redux/createLobbySlice"
import lobbiesReducers from "../home-screen/molecules/lobbies/redux/lobbiesSlice"

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
