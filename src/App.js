import React from 'react'

import { ThemeProvider } from '@material-ui/core/styles'

import TMTheme from './atoms/TMTheme'
import TMButton from './atoms/TMButton'
import TMCard from './atoms/TMCard'
import LanguageIcon from './assets/icons/Language.js'

import { Paper, SvgIcon, Button } from '@material-ui/core'

function App() {
  return (
    <ThemeProvider theme={TMTheme}>
      <Paper>
        <TMCard />
      </Paper>
    </ThemeProvider>
  )
}

export default App
