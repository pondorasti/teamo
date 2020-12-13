import React from "react"
import SendMessage from "./SendMessage"
import Message from "./Message"
import messageData from "./messageData"
function ChatWindow() {
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
    <div>
      {messages}
      <SendMessage />
    </div>
  )
}

export default ChatWindow
