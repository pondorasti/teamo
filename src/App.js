import React from "react"
import { CssBaseline } from "@material-ui/core"
import { TMTheme } from "./atoms"
import { ThemeProvider } from "@material-ui/core/styles"
import HomeScreen from "./screens/home-screen/HomeScreen"
// import LobbyScreen from "./screens/lobby-screen/LobbyScreen"

function App() {
  return (
    <ThemeProvider theme={TMTheme}>
      <CssBaseline />
      <div style={{ backgroundColor: TMTheme.palette.grey[800] }}>
        {/* <LobbyScreen /> */}
        <HomeScreen />
      </div>
    </ThemeProvider>
  )
}

export default App
