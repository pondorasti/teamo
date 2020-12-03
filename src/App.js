import React from "react"

import { ThemeProvider } from "@material-ui/core/styles"

import { CssBaseline } from "@material-ui/core"
import { TMTheme } from "./atoms"
import LobbyGrid from "./screens/home-screen/molecules/LobbyGrid"
import data from "./lobbiesDumyData"
import TMSelectedGameInfo from "./screens/TMSelectedGameInfo"

import AppBar from "./screens/TMAppBar"

function App() {

  return (
    <ThemeProvider theme={TMTheme}>
      <CssBaseline />
      <AppBar />
      <CssBaseline />

      <div style={{ padding: 32, backgroundColor: TMTheme.palette.grey[800] }}>
        <TMSelectedGameInfo />
        <LobbyGrid lobbies={data} />
      </div>
    </ThemeProvider>
  )
}

export default App
