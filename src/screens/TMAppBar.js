import React, { useState } from "react"
import { AppBar, Toolbar, IconButton, Menu, MenuItem, Divider } from "@material-ui/core/"
import TMButton from "../atoms/TMButton"
import TMAvatar from "../atoms/TMAvatar"
import { makeStyles } from "@material-ui/styles"
import TeamoBanner from "../assets/images/TeamoBanner.png"
import CreateLobbyDialog from "./home-screen/dialogs/CreateLobbyDialog"
import CreateProfileDialog from "./home-screen/dialogs/CreateProfileDialog"
import LoginDialog from "./home-screen/dialogs/LoginDialog"
import ProfileDialog from "./profile-dialog/ProfileDialog"
import gamesPlayed from "../api/dummy-data/gamesPlayed"

// WARNING: ChatWindow uses a hardcoded height value of TMAppBar
const useStyles = makeStyles((theme) => ({
  appBarRoot: {
    backgroundColor: theme.palette.grey[900],
    zIndex: theme.zIndex.drawer + 1,
  },
  toolbarRoot: {
    padding: "0 32px 0 32px",
  },
  divSpacer: {
    flexGrow: 1,
  },
  divider: {
    position: "absolute",
    width: "100%",
    bottom: "0%",
  },
}))

function TMAppBar() {
  const classes = useStyles()
  const [showCreateLobby, setShowCreateLobby] = useState(false)
  const [showProfile, setShowProfile] = useState(false)
  const [showCreateProfile, setShowCreateProfile] = useState(false)
  const [showLogin, setShowLogin] = useState(false)
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleProfileButton = (event) => {
    // if user logged in show menu
    setAnchorEl(event.currentTarget)
    // else
    // open sign in modal
  }

  const handleShowProfile = () => {
    setShowProfile(true)
    handleClose()
  }
  const handleSignOut = () => {
    setShowLogin(true)
    handleClose()
  }

  const handleCreateProfile = () => {
    setShowCreateProfile(true)
    handleClose()
  }

  return (
    <>
      <AppBar
        classes={{ root: classes.appBarRoot }}
        position="fixed"
        elevation={0}
      >
        <Toolbar classes={{ root: classes.toolbarRoot }}>
          <img src={TeamoBanner} alt="Teamo Banner" style={{ maxHeight: 38 }} />

          <div className={classes.divSpacer} />

          <TMButton size="small" onClick={() => setShowCreateLobby(true)}>Create Teamo</TMButton>
          <CreateLobbyDialog open={showCreateLobby} onClose={() => setShowCreateLobby(false)} />

          <IconButton
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleProfileButton}
            style={{ marginLeft: "4px" }}
          >
            <TMAvatar
              size="extraSmall"
              alt="Pondorasti"
              src="https://avatars0.githubusercontent.com/u/32957606?s=460&u=e631c3762c12d41f3ce0348b8137f0751a2eed75&v=4"
            />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            anchorOrigin={{ vertical: "top", horizontal: "left" }}
            transformOrigin={{ vertical: "top", horizontal: "right" }}
            keepMounted
            open={open}
            onClose={handleClose}
          >
            <MenuItem onClick={handleShowProfile}>My Profile</MenuItem>
            <ProfileDialog
              open={showProfile}
              onClose={() => setShowProfile(false)}
              backgroundColor="#1E1E1E"
              username="ShiroTheCat"
              status="online"
              bio="Hello, my name Shiro, i look like dog, but i am cat."
              avatarUrl="https://qph.fs.quoracdn.net/main-qimg-3d69658bf00b1e706b75162a50d19d6c"
              gamesPlayed={gamesPlayed}
            />

            <MenuItem onClick={handleCreateProfile}>Create Profile</MenuItem>
            <CreateProfileDialog open={showCreateProfile} onClose={() => setShowCreateProfile(false)} />

            <MenuItem onClick={handleSignOut}>Sign out / Login</MenuItem>
            <LoginDialog open={showLogin} onClose={() => setShowLogin(false)} />
          </Menu>
        </Toolbar>

        <Divider classes={{ root: classes.divider }} />

      </AppBar>
    </>
  )
}

export default TMAppBar
