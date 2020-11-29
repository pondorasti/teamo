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
      <Paper style={{ padding: 40 }}>
        <TMCard />
      </Paper>
    </ThemeProvider>
  )
}

export default App
