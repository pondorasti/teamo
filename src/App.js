import React from 'react'

import { ThemeProvider } from '@material-ui/core/styles';

import { Paper, CssBaseline } from '@material-ui/core';
import TMTheme from './atoms/TMTheme';
import TMTextfield from './atoms/TMTextfield';
import AppBar from './screens/TMAppBar'

function App() {
  return (
    <ThemeProvider theme={TMTheme}>
      <AppBar />
      <CssBaseline />
      <Paper style={{ padding: 40 }}>
        <TMTextfield label="Games" defaultValue="jello" helperText="hello" rows={4} multiline />
        <TMTextfield label="Games" defaultValue="jello" type="number"/>
      </Paper>
    </ThemeProvider>
  )
}

export default App
