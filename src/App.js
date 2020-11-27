import React from 'react';

import { ThemeProvider } from '@material-ui/core/styles';

import TMTheme from './atoms/TMTheme';
import TMAvatar from './atoms/TMAvatar';

// import LanguageIcon from './assets/icons/Language.js';

import { Paper, SvgIcon, Button } from '@material-ui/core';

function App() {
  return (
    <ThemeProvider theme={TMTheme}>
      <Paper style={{ padding: 40 }}>
        <TMAvatar
          src="https://qph.fs.quoracdn.net/main-qimg-3d69658bf00b1e706b75162a50d19d6c"
          size="large"
          // status="offline"
          status="online"
        />
      </Paper>
    </ThemeProvider>
  );
}

export default App;
