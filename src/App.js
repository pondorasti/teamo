import React from "react"
import { StylesProvider, CssBaseline } from "@material-ui/core"
import { ThemeProvider } from "@material-ui/core/styles"
import { TMTheme, TMButton } from "./atoms"
import HomeScreen from "./screens/home-screen/HomeScreen"
import LobbyScreen from "./screens/lobby-screen/LobbyScreen"

function App() {
  const [show, setShow] = React.useState(true)

  return (
    <StylesProvider injectFirst>
      <ThemeProvider theme={TMTheme}>
        <CssBaseline />
        <div style={{ backgroundColor: TMTheme.palette.grey[800] }}>
          <TMButton
            style={{ position: "absolute", zIndex: 9999, marginTop: 16, marginLeft: 190 }}
            onClick={() => setShow(!show)}
          >
            Click me! (This is a demo app)
          </TMButton>
          {!show && <LobbyScreen />}
          {show && <HomeScreen />}
        </div>
      </ThemeProvider>
    </StylesProvider>
  )
}

export default App
