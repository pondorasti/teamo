import React from "react"
import { StylesProvider, CssBaseline } from "@material-ui/core"
import { ThemeProvider } from "@material-ui/core/styles"
import { Provider } from "react-redux"
import { TMTheme } from "./atoms"
import HomeScreen from "./screens/home-screen/HomeScreen"
// import LobbyScreen from "./screens/lobby-screen/LobbyScreen"

import store from "./redux/store"
import { fetchGames } from "./redux/slices/games/gamesSlice"

store.dispatch(fetchGames())

function App() {
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
