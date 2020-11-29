import React from 'react'

import { ThemeProvider } from '@material-ui/core/styles'

import TMTheme from './atoms/TMTheme'
import TMCard from './atoms/TMCard'
import { CssBaseline } from '@material-ui/core'

import { Paper, SvgIcon, Button } from '@material-ui/core'

function App() {
  return (
    <ThemeProvider theme={TMTheme}>
      <CssBaseline />
      <Paper style={{ padding: 5 }}>
        <TMCard
          userName="Pondorasti"
          gameLogo="https://logos-world.net/wp-content/uploads/2020/04/Minecraft-Logo.png"
          decsription="This is my room decription, this should be no more than three lines long..."
        />
      </Paper>
    </ThemeProvider>
  )
}

export default App
