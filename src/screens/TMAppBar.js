import React, { useState } from "react"
import { AppBar, Toolbar, IconButton, Menu, MenuItem, Divider } from "@material-ui/core/"
import { makeStyles } from "@material-ui/core/styles"
import { useSelector, useDispatch } from "react-redux"
import TMButton from "../atoms/TMButton"
import TMAvatar from "../atoms/TMAvatar"
import { TeamoBanner } from "../assets/images"
import CreateLobbyDialog from "./home-screen/dialogs/create-lobby/CreateLobbyDialog"
import LoginDialog from "./home-screen/dialogs/login/LoginDialog"
import ProfileDialog from "./profile-dialog/ProfileDialog"
import gamesPlayed from "../api/dummy-data/gamesPlayed"
import {
  selectSignInStatus,
  selectCurrentUser,
  signOut,
} from "../redux/slices/currentUser/currentUserSlice"

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

  const currentUser = useSelector(selectCurrentUser)
  const [showProfile, setShowProfile] = useState(false)

  const [showLogin, setShowLogin] = useState(false)
  const signInStatus = useSelector(selectSignInStatus)
  if (signInStatus === "succeeded" && showLogin === true) {
    setShowLogin(false)
  }

  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)

  const dispatch = useDispatch()

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleProfileButton = (event) => {
    if (currentUser) {
      // if user logged in show menu
      setAnchorEl(event.currentTarget)
    } else {
      // else open sign-in modal
      setShowLogin(true)
      handleClose()
    }
  }

  const handleShowProfile = () => {
    setShowProfile(true)
    handleClose()
  }
  const handleSignOut = () => {
    dispatch(signOut())
    handleClose()
  }

  return (
    <>
      <AppBar classes={{ root: classes.appBarRoot }} position="fixed" elevation={0}>
        <Toolbar classes={{ root: classes.toolbarRoot }}>
          <img src={TeamoBanner} alt="Teamo Banner" />

          <div className={classes.divSpacer} />

          <TMButton size="small" onClick={() => setShowCreateLobby(true)}>
            Create Teamo
          </TMButton>
          <CreateLobbyDialog
            open={showCreateLobby}
            onClose={() => setShowCreateLobby(false)}
          />

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
              src={currentUser ? currentUser.profilePictureUrl : ""}
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
              avatarUrl={currentUser ? currentUser.profilePictureUrl : ""}
              gamesPlayed={gamesPlayed}
            />

            <MenuItem onClick={handleSignOut}>Sign out</MenuItem>
            <LoginDialog open={showLogin} onClose={() => setShowLogin(false)} />
          </Menu>
        </Toolbar>

        <Divider classes={{ root: classes.divider }} />
      </AppBar>
    </>
  )
}

export default TMAppBar
