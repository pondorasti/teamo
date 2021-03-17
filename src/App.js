import React from "react"
import { CssBaseline } from "@material-ui/core"
import { TMButton, TMTheme } from "./atoms"
import { ThemeProvider } from "@material-ui/core/styles"
import HomeScreen from "./screens/home-screen/HomeScreen"
import LobbyScreen from "./screens/lobby-screen/LobbyScreen"


function App() {
  const [show, setShow] = React.useState(true)
  
  return (
    <ThemeProvider theme={TMTheme}>
      <CssBaseline />
      <div style={{ backgroundColor: TMTheme.palette.grey[800] }}>
        <TMButton style={{ position: "absolute", zIndex: 9999, marginTop: 16, marginLeft: 190 }} onClick={() => setShow(!show)}>Click me!</TMButton>
        {!show && <LobbyScreen /> }
        {show && <HomeScreen /> }
      </div>
    </ThemeProvider>
  )
}

export default App
