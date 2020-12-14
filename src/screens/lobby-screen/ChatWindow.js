import React from "react"
import SendMessage from "./SendMessage"
import Message from "./Message"
import messageData from "./messageData"
import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    padding: 24,
    flexDirection: "column",
    justifyContent: "flex-end",
    backgroundColor: theme.palette.grey[700],
    height: "100%",
  },
  mainGrid: {
    marginBottom: 62,
  },
  form: {
    position: "fixed",
    bottom: 0,
    paddingBottom: 24,
    backgroundColor: theme.palette.grey[700],
    width: "96%",
    display: "flex",
  },
}))

function ChatWindow() {
  const classes = useStyles()

  const messages = messageData.map((message, index) => (
    <Grid item key={index}>
      <Message
        username={message.username}
        avatarUrl={message.avatarUrl}
        timestamp={message.timestamp}
        message={message.message}
      />
    </Grid>
  ))

  return (
    <div className={classes.container}>
      <Grid
        container
        justify="flex-end"
        direction="column"
        spacing={2}
        classes={{ root: classes.mainGrid }}
      >
        {messages}
      </Grid>

      <div className={classes.form}>
        <SendMessage />
      </div>
    </div>
  )
}

export default ChatWindow
