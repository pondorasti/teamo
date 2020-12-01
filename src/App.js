import React from "react"

import { ThemeProvider } from "@material-ui/core/styles"

import { CssBaseline } from "@material-ui/core"
import { TMTheme, TMTextfield } from "./atoms"
import LobbyGrid from "./screens/home-screen/molecules/LobbyGrid"
import data from "./lobbiesDumyData"

import AppBar from "./screens/TMAppBar"

function App() {

  return (
    <ThemeProvider theme={TMTheme}>
      <AppBar />
      <CssBaseline />
      <div style={{ padding: 32 }}>
        <TMTextfield
          label="Games"
          defaultValue="jello"
          helperText="hello"
          rows={4}
          multiline
        />
        <TMTextfield label="Games" defaultValue="jello" type="number" />
      </div>
      <div style={{ padding: 32 }}>
        <LobbyGrid lobbies={data} />
      </div>
    </ThemeProvider>
  )
}

export default App
