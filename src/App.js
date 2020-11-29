import React from 'react'

import { ThemeProvider } from '@material-ui/core/styles';

import { Paper } from '@material-ui/core';
import TMTheme from './atoms/TMTheme';
import TMTextfield from './atoms/TMTextfield';

function App() {
  return (
    <ThemeProvider theme={TMTheme}>
      <Paper style={{ padding: 40 }}>
        {/* <TMTextfield label="Games" /> */}
        <TMTextfield label="Games" defaultValue="jello" helperText="hello" rows={4} multiline />
        <TMTextfield label="Games" defaultValue="jello" type="number"/>
      </Paper>
    </ThemeProvider>
  )
}

export default App
