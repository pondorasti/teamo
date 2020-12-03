import React from 'react'

import { ThemeProvider } from '@material-ui/core/styles'

import { Paper, CssBaseline } from '@material-ui/core'
import TMTheme from './atoms/TMTheme'
import TMTextfield from './atoms/TMTextfield'
import TMAutocomplete from './atoms/TMAutocomplete'
import AppBar from './screens/TMAppBar'
import TMSelectedGameInfo from './screens/TMSelectedGameInfo'

function App() {
  const games = ['Minecraft', 'League of Legends', 'Among Us']

  return (
    <ThemeProvider theme={TMTheme}>
      <CssBaseline />
      <AppBar />
      <Paper style={{ padding: 32 }}>
        <TMTextfield
          label="Games"
          defaultValue="jello"
          helperText="hello"
          rows={4}
          multiline
        />
        <TMTextfield label="Games" defaultValue="jello" type="number" />
        
        <TMAutocomplete
          options={games}
          getOptionLabel={(game) => game}
        ></TMAutocomplete>

        <TMSelectedGameInfo />
      </Paper>
    </ThemeProvider>
  )
}

export default App
