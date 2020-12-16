import React from "react"

import { CssBaseline, Toolbar, FormControlLabel, Switch } from "@material-ui/core"
import { TMTheme } from "./atoms"
import { ThemeProvider } from "@material-ui/core/styles"

import { TMButton } from "./atoms"

import lobbies from "./api/dummy-data/lobbies"

import LobbyGrid from "./screens/home-screen/LobbyGrid"
import AppBar from "./screens/TMAppBar"
import LoginDialog from "./screens/home-screen/dialogs/LoginDialog"
import JoinLobbyDialog from "./screens/home-screen/dialogs/JoinLobbyDialog"
import CreateLobbyDialog from "./screens/home-screen/dialogs/CreateLobbyDialog"
import CreateProfileDialog from "./screens/home-screen/dialogs/CreateProfileDialog"
import ProfileDialog from "./screens/profile-dialog/ProfileDialog"
// import LobbyScreen from "./screens/lobby-screen/LobbyScreen"
import HeroCard from "./screens/home-screen/molecules/HeroCard"

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

  const [checked, setChecked] = React.useState(true)
  const handleChange = () => {
    setChecked((prev) => !prev)
  }

  return (
    <ThemeProvider theme={TMTheme} >
      <CssBaseline />
      {/* <LobbyScreen /> */}
      <main style={{ backgroundColor: "black", padding: 16 }}>
        <AppBar />
        <Toolbar />

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

        <FormControlLabel
          control={<Switch checked={checked} onChange={handleChange} />}
          label="Show"
        />
        <div style={{ width: 400, margin: 16 }}>
          <HeroCard
            hostUsername="Pondorasti"
            hostPicture="https://avatars0.githubusercontent.com/u/32957606?s=460&u=e631c3762c12d41f3ce0348b8137f0751a2eed75&v=4"
            gameName="Fall Guys"
            gameImg="https://cdn.mos.cms.futurecdn.net/MbZ8Yv6WNxjJkPaoQDUPLG-1200-80.jpg"
            description="This is my room decription, this should be no more than three lines long..."
            platform="PS Vita"
            usesMic={true}
            sizeStatus="3/15"
            isContentHidden={checked}
          />
        </div>
        <LobbyGrid lobbies={lobbies} />
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
    imageUrl: "https://images-na.ssl-images-amazon.com/images/I/91ZmgFvglpL.png",
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
