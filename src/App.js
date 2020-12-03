import React from "react"

import { ThemeProvider } from "@material-ui/core/styles"

import { CssBaseline } from "@material-ui/core"
import { TMTheme, TMTextfield } from "./atoms"
import LobbyGrid from "./screens/home-screen/molecules/LobbyGrid"
import data from "./lobbiesDumyData"

import AppBar from "./screens/TMAppBar"
import LoginDialog from "./screens/home-screen/molecules/LoginDialog"
import TMButton from "./atoms/TMButton"

function App() {
  const [openLogin, setOpenLogin] = React.useState(false)
  const handleLoginOpen = () => {
    setOpenLogin(true)
  }
  const handleLoginClose = () => {
    setOpenLogin(false)
  }

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
          color="#5e5e5e"
        />
        <TMTextfield label="Games" defaultValue="jello" type="number" />
        <TMButton onClick={handleLoginOpen}>Login</TMButton>
        <LoginDialog open={openLogin} close={handleLoginClose} />
      </div>
      <div style={{ padding: 32 }}>
        <LobbyGrid lobbies={data} />
      </div>
    </ThemeProvider>
  )
}

export default App
