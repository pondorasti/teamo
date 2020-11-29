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
      <AppBar />
      <CssBaseline />
      <Paper style={{ padding: 40 }}>
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
        <TMSelectedGameInfo
          selectGameImg="https://cdn.vox-cdn.com/thumbor/2D0fSxmi24Zw7aaB3M_TViUavrc=/1400x788/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/15957232/0fe20042_0bb8_4781_82f4_7130f928b021.jpg"
          selectGameName="Minecraft"
          selectGameStats="150 Players,  43 Lobbies"
        />
      </Paper>
    </ThemeProvider>
  )
}

export default App
