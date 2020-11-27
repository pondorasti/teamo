import React from 'react';

import { ThemeProvider } from '@material-ui/core/styles';

import { Paper } from '@material-ui/core';
import TMTheme from './atoms/TMTheme';
import TMTextfield from './atoms/TMTextfield';

function App() {
  return (
    <ThemeProvider theme={TMTheme}>
      <Paper style={{ padding: 40 }}>
        <TMTextfield label="hello" />
      </Paper>
    </ThemeProvider>
  );
}

export default App;
