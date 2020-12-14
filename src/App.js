import React from "react"

import { ThemeProvider } from "@material-ui/core/styles"
import { CssBaseline } from "@material-ui/core"
import { TMTheme } from "./atoms"
import LobbyScreen from "./screens/lobby-screen/LobbyScreen"

function App() {

  return (
    <ThemeProvider theme={TMTheme} >
      <CssBaseline />
      <LobbyScreen />
    </ThemeProvider>
  )
}

export default App
