import React from "react"

import { ThemeProvider } from "@material-ui/core/styles"

import { CssBaseline } from "@material-ui/core"
import { TMTheme, TMTextfield } from "./atoms"
import LobbyGrid from "./screens/home-screen/LobbyGrid"
import data from "./lobbiesDumyData"

import AppBar from "./screens/TMAppBar"
import LoginDialog from "./screens/home-screen/LoginDialog"
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
      <CssBaseline />

      <AppBar />

      <div style={{ backgroundColor: `${TMTheme.palette.grey[800]}` }}>
        <div style={{ padding: 32 }}>
          <TMTextfield
            label="Games"
            defaultValue="jello"
            helperText="hello"
            rows={4}
            multiline
          />
          <TMTextfield label="Games" defaultValue="jello" type="number" />
          <LoginDialog open={openLogin} onClose={handleLoginClose} />
          <TMButton onClick={handleLoginOpen}>Login</TMButton>
        </div>
        <div style={{ padding: 32 }}>
          <LobbyGrid lobbies={data} />
        </div>
      </div>
        
    </ThemeProvider>
  )
}

export default App
