import React from "react"

import { ThemeProvider } from "@material-ui/core/styles"

import { CssBaseline } from "@material-ui/core"
import { TMTheme } from "./atoms"

import TMAppBar from "./screens/TMAppBar"

import ChatWindow from "./screens/lobby-screen/ChatWindow"

function App() {
  return (
    <ThemeProvider theme={TMTheme}>
      <CssBaseline />
      <TMAppBar></TMAppBar>
      <div style={{ height: "calc(100vh - 64px)" }}>
        <ChatWindow />
      </div>
    </ThemeProvider>
  )
}

export default App
