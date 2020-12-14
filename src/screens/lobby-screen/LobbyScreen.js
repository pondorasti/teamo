import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Toolbar } from "@material-ui/core/"
import AppBar from "../TMAppBar"
import LobbySidebar from "./molecules/LobbySidebar"
import ChatWindow from "./molecules/ChatWindow"

const useStyles = makeStyles(theme => ({
  root: { display: "flex" },
  content: {
    flexGrow: 1,
    backgroundColor: `${theme.palette.grey[800]}`
  }
}))

function LobbyScreen() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <AppBar />
      <LobbySidebar />
      <main className={classes.content}>
        <Toolbar />
        <ChatWindow />
      </main>
    </div>
  )
}

export default LobbyScreen
