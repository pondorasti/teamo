import React from "react"

import { CssBaseline, Toolbar } from "@material-ui/core"
import { TMTheme } from "./atoms"
import { ThemeProvider } from "@material-ui/core/styles"
import { TextField } from "@material-ui/core"

import { TMButton } from "./atoms"

import data from "./lobbiesDumyData"

import LobbyGrid from "./screens/home-screen/LobbyGrid"
import AppBar from "./screens/TMAppBar"
import LoginDialog from "./screens/home-screen/dialogs/LoginDialog"
import JoinLobbyDialog from "./screens/home-screen/dialogs/JoinLobbyDialog"
import CreateLobbyDialog from "./screens/home-screen/dialogs/CreateLobbyDialog"
import CreateProfileDialog from "./screens/home-screen/dialogs/CreateProfileDialog"
import ProfileDialog from "./screens/profile-dialog/ProfileDialog"
// import LobbyScreen from "./screens/lobby-screen/LobbyScreen"

function App() {
  const [openLogin, setOpenLogin] = React.useState(false)
  const [openJoinTeamo, setOpenJoinTeamo] = React.useState(false)
  const [openCreateTeamo, setOpenCreateTeamo] = React.useState(false)
  const [openCreateProfile, setOpenCreateProfile] = React.useState(false)
  const [openProfile, setOpenProfile] = React.useState(false)
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
  const handleProfileOpen = () => {
    setOpenProfile(true)
  }
  const handleProfileClose = () => {
    setOpenProfile(false)
  }

  return (
    <ThemeProvider theme={TMTheme} >
      <CssBaseline />
      {/* <LobbyScreen /> */}
      <main>
        <AppBar />
        <Toolbar />
        <TextField
          label="Games"
          defaultValue="jello"
          helperText="hello"
          rows={4}
          multiline
        />
        <TextField label="Games" defaultValue="jello" type="number" />

        <LoginDialog open={openLogin} onClose={handleLoginClose} />
        <JoinLobbyDialog open={openJoinTeamo} onClose={handleJoinClose} />
        <CreateLobbyDialog open={openCreateTeamo} onClose={handleCreateClose} />
        <CreateProfileDialog open={openCreateProfile} onClose={handleCreateProfileClose} />
        <ProfileDialog
          open={openProfile}
          onClose={handleProfileClose}
          backgroundColor="#1E1E1E"
          username="ShiroTheCat"
          status="online"
          bio="Hello, my name Shiro, i look like dog, but i am cat."
          avatarUrl="https://qph.fs.quoracdn.net/main-qimg-3d69658bf00b1e706b75162a50d19d6c"
          gamesPlayed={gamesPlayed}
        />
        <TMButton onClick={handleLoginOpen}>Login</TMButton>
        <TMButton onClick={handleJoinOpen}>Join Teamo</TMButton>
        <TMButton onClick={handleCreateOpen}>Create Teamo</TMButton>
        <TMButton onClick={handleCreateProfileOpen}>Create Profile</TMButton>
        <TMButton onClick={handleProfileOpen}>Profile</TMButton>
        <LobbyGrid lobbies={data} />
      </main>
    </ThemeProvider>
  )
}

export default App

const gamesPlayed = [
  {
    title: "League of Legends",
    imageUrl:
      "https://lh3.googleusercontent.com/WebglHOYlW-2P7ADP9oUSSrgy12PHyAE6GP_jmJkQOZZ1XH7Pa_7216EK2qS7iJFvncqOaDjg40BrYdzPbB9qNwn",
  },
  {
    title: "Minecraft",
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/I/91ZmgFvglpL.png",
  },
  {
    title: "Fall Guys",
    imageUrl: "https://i.ytimg.com/vi/z6UrdUAZ7wM/maxresdefault.jpg",
  },
  {
    title: "Fall Guysss",
    imageUrl: "https://i.ytimg.com/vi/z6UrdUAZ7wM/maxresdefault.jpg",
  },
]
