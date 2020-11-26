import React from 'react';
import Button from '@material-ui/core/Button';

import { ThemeProvider } from '@material-ui/core/styles'
import TMTheme from './atoms/TMTheme'

import { makeStyles } from '@material-ui/core/styles'
import { Paper } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    padding: '4px 8px',
    borderRadius: 8
  }
})

function App() {
  const classes = useStyles()

  return (
    <ThemeProvider theme={TMTheme}>
      <Paper>

        <Button className={classes.root} variant="contained" color="primary">Primary</Button> <br></br>
        <Button className={classes.root} variant="contained" color="secondary">Secondary</Button> <br></br>

      </Paper>
    </ThemeProvider>
  );
}

export default App;
