import React from "react"
import { CssBaseline } from "@material-ui/core"
import { TMTheme } from "./atoms"
import { ThemeProvider } from "@material-ui/core/styles"
import HomeScreen from "./screens/home-screen/HomeScreen"

function App() {
  return (
    <ThemeProvider theme={TMTheme}>
      <CssBaseline />
      {/* <LobbyScreen /> */}
      <HomeScreen />
    </ThemeProvider>
  )
}

export default App
