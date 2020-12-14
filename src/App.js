import React from "react"

import { ThemeProvider, makeStyles } from "@material-ui/core/styles"

import { CssBaseline, Toolbar } from "@material-ui/core"
import { TMTheme } from "./atoms"


import AppBar from "./screens/TMAppBar"
import LobbySidebar from "./screens/lobby-screen/LobbySidebar"
import ChatWindow from "./screens/lobby-screen/ChatWindow"

const useStyles = makeStyles({
  root: { display: "flex" },
  content: {
    flexGrow: 1,
    backgroundColor: `${TMTheme.palette.grey[800]}`
  }
})

function App() {
  const classes = useStyles()

  return (
    <ThemeProvider theme={TMTheme} >
      <div className={classes.root}>
        <CssBaseline />
        <AppBar />
        <LobbySidebar />
        <main className={classes.content}>
          <Toolbar />
          <ChatWindow />
        </main>
      </div>
    </ThemeProvider>
  )
}

export default App
