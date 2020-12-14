import React from "react"
import SendMessage from "./SendMessage"
import Message from "./Message"
import messageData from "./messageData"
import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"

const padding = 24
const useStyles = makeStyles(theme => ({
  containerGrid: {
    padding: `${padding}px`,
    paddingBottom: 0,
    height: "calc(100vh - 64px)",
    backgroundColor: theme.palette.grey[700],
  },
  mainGrid: {
    "& > *:last-child": {
      marginBottom: 76,
    },
    marginBottom: 0,
  },
  sendMessageContainer: {
    position: "fixed",
    bottom: 0,
    paddingBottom: padding,
    backgroundColor: theme.palette.grey[700],
    width: `calc(100% - ${2 * padding}px)`,
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
    <Grid container classes={{ root: classes.containerGrid }}>
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
