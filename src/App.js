import React from "react"

import { ThemeProvider } from "@material-ui/core/styles"
import { TextField } from "@material-ui/core"

import { CssBaseline } from "@material-ui/core"
import { TMTheme } from "./atoms"
import LobbyGrid from "./screens/home-screen/LobbyGrid"
import data from "./lobbiesDumyData"

import AppBar from "./screens/TMAppBar"
import LoginDialog from "./screens/home-screen/dialogs/LoginDialog"
import JoinTeamoDialog from "./screens/home-screen/dialogs/JoinTeamoDialog"
import CreateTeamoDialog from "./screens/home-screen/dialogs/CreateTeamoDialog"
import CreateProfileDialog from "./screens/home-screen/dialogs/CreateProfileDialog"
import PlayerCard from "./screens/lobby-screen/PlayerCard"
import TMButton from "./atoms/TMButton"

function App() {
  const [openLogin, setOpenLogin] = React.useState(false)
  const [openJoinTeamo, setOpenJoinTeamo] = React.useState(false)
  const [openCreateTeamo, setOpenCreateTeamo] = React.useState(false)
  const [openCreateProfile, setOpenCreateProfile] = React.useState(false)
  const handleLoginOpen = () => {
    setOpenLogin(true)
  }
  const handleLoginClose = () => {
    setOpenLogin(false)
  }

  const handleJoinOpen = () => {
    setOpenJoinTeamo(true)
  }
  const handleJoinClose = () => {
    setOpenJoinTeamo(false)
  }

  const handleCreateOpen = () => {
    setOpenCreateTeamo(true)
  }
  const handleCreateClose = () => {
    setOpenCreateTeamo(false)
  }
  const handleCreateProfileOpen = () => {
    setOpenCreateProfile(true)
  }
  const handleCreateProfileClose = () => {
    setOpenCreateProfile(false)
  }

  return (
    <ThemeProvider theme={TMTheme}>
      <CssBaseline />

      <AppBar />

      <div style={{ backgroundColor: `${TMTheme.palette.grey[800]}` }}>
        <div style={{ padding: 32 }}>
          <TextField
            label="Games"
            defaultValue="jello"
            helperText="hello"
            rows={4}
            multiline
          />
          <TextField label="Games" defaultValue="jello" type="number" />
          <LoginDialog open={openLogin} onClose={handleLoginClose} />
          <JoinTeamoDialog open={openJoinTeamo} onClose={handleJoinClose} />
          <CreateTeamoDialog
            open={openCreateTeamo}
            onClose={handleCreateClose}
          />
          <CreateProfileDialog
            open={openCreateProfile}
            onClose={handleCreateProfileClose}
          />
          <TMButton onClick={handleLoginOpen}>Login</TMButton>
          <TMButton onClick={handleJoinOpen}>Join Teamo</TMButton>
          <TMButton onClick={handleCreateOpen}>Create Teamo</TMButton>
          <TMButton onClick={handleCreateProfileOpen}>Create Profile</TMButton>

          <PlayerCard
            username="Pondorasti"
            gamerTag="Lascorpy"
            avatarUrl="https://avatars0.githubusercontent.com/u/32957606?s=460&u=e631c3762c12d41f3ce0348b8137f0751a2eed75&v=4"
            bio="we only allow this many characters? 52 chars, let's make it 62"
          />
        </div>
        <div style={{ padding: 32 }}>
          <LobbyGrid lobbies={data} />
        </div>
      </div>

    </ThemeProvider>
  )
}

export default App
