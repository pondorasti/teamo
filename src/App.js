import React from "react"

import { CssBaseline, Toolbar } from "@material-ui/core"
import { TMTheme } from "./atoms"
import { ThemeProvider } from "@material-ui/core/styles"


import lobbies from "./api/dummy-data/lobbies"

import LobbyGrid from "./screens/home-screen/LobbyGrid"
import AppBar from "./screens/TMAppBar"
import Carousel from "./screens/home-screen/molecules/Carousel"

function App() {
  return (
    <ThemeProvider theme={TMTheme}>
      <CssBaseline />
      {/* <LobbyScreen /> */}
      <main style={{ padding: 32, backgroundColor: TMTheme.palette.grey[800] }}>
        <AppBar />
        <Toolbar />

        <Carousel />
        <LobbyGrid lobbies={lobbies} />
      </main>

    </ThemeProvider>
  )
}

export default App
