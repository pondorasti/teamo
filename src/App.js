import React, { useEffect } from "react"
import { StylesProvider, CssBaseline } from "@material-ui/core"
import { ThemeProvider } from "@material-ui/core/styles"
import { Provider } from "react-redux"
import { useAuthState } from "react-firebase-hooks/auth"
import { TMTheme } from "./atoms"
import HomeScreen from "./screens/home-screen/HomeScreen"
// import LobbyScreen from "./screens/lobby-screen/LobbyScreen"

import store from "./redux/store"
import { updateCurrentUser } from "./redux/slices/currentUser/currentUserSlice"
import { fetchGames } from "./redux/slices/games/gamesSlice"
import auth from "./api/firebase/auth"

function App() {
  // update current user redux slice
  const [user] = useAuthState(auth)
  useEffect(() => {
    if (user != null) {
      store.dispatch(updateCurrentUser({ id: user.uid }))
    }
  }, [user])

  useEffect(() => {
    store.dispatch(fetchGames())
  }, [])

  return (
    <Provider store={store}>
      <StylesProvider injectFirst>
        <ThemeProvider theme={TMTheme}>
          <CssBaseline />
          <div style={{ backgroundColor: TMTheme.palette.grey[800] }}>
            {/* <LobbyScreen /> */}
            <HomeScreen />
          </div>
        </ThemeProvider>
      </StylesProvider>
    </Provider>
  )
}

export default App
