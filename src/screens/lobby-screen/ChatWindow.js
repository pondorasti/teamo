import React from "react"
import SendMessage from "./SendMessage"
import Message from "./Message"
import messageData from "./messageData"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  container: {
    backgroundColor: theme.palette.grey[700],
  },
}))

function ChatWindow() {
  const classes = useStyles()

  const messages = messageData.map((message, index) => (
    <Message
      username={message.username}
      avatarUrl={message.avatarUrl}
      timestamp={message.timestamp}
      message={message.message}
      key={index}
    />
  ))

  return (
    <div className={classes.container}>
      {messages}
      <SendMessage />
    </div>
  )
}

export default ChatWindow
