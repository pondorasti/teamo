import React from "react"
import SendMessage from "./SendMessage"
import Message from "./Message"
import messageData from "./messageData"
import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"

const horizontalPadding = 24
const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    padding: horizontalPadding,
    backgroundColor: theme.palette.grey[700],
    height: "100%",
  },
  mainGrid: {
    "&:last-child": {
      paddingBottom: 76,
      marginBottom: 76,
    },
  },
  sendMessageContainer: {
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
    <Grid container className={classes.container}>
      <Grid
        item
        container
        justify="flex-end"
        direction="column"
        spacing={2}
        wrap="nowrap"
        classes={{ root: classes.mainGrid }}
      >
        {messages}
      </Grid>

      <div className={classes.sendMessageContainer}>
        <SendMessage />
      </div>
    </Grid>
  )
}

export default ChatWindow
