import React from 'react'

import { ThemeProvider } from '@material-ui/core/styles'

import TMTheme from './atoms/TMTheme'
import TMLobbies from './screens/home-screen/molecules/LobbyGrid'
import { CssBaseline } from '@material-ui/core'

import { Paper, SvgIcon, Button } from '@material-ui/core'

import { data } from './screens/lobbiesDumyData'

function App() {
  return (
    <ThemeProvider theme={TMTheme}>
      <CssBaseline />
      <Paper style={{ padding: 32 }}>
        <TMLobbies lobbies={data} />
      </Paper>
    </ThemeProvider>
  )
}

export default App
