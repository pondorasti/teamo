import React from 'react'
import { Divider, Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import People from '../assets/icons/People'
import Dpad from '../assets/icons/Dpad'
import Mic from '../assets/icons/Mic'

const useStyles = makeStyles((theme) => ({
  statContainerStyles: {
    color: theme.palette.secondary.main,
  },
  platformOption: {
    display: 'flex',
    borderRight: '1px solid',
    alignItems: 'flex-end',
    justifyContent: 'start',
    // backgroundColor: 'blue',
  },
  micOption: {
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'center',
    // backgroundColor: 'red',
  },
  playersOption: {
    display: 'flex',
    borderLeft: '1px solid',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    // backgroundColor: 'green',
    paddingRight: 2,
  },
  iconMargin: {
    marginRight: 4,
  },
}))

function TMCardStats() {
  const classes = useStyles()

  return (
    <Grid container className={classes.statContainerStyles}>
      <Grid item xs={4} className={classes.platformOption}>
        <Dpad className={classes.iconMargin} />
        <Typography variant="subtitle2">Xbox 1</Typography>
      </Grid>

      <Grid item xs={4} className={classes.micOption}>
        <Mic className={classes.iconMargin} />
        <Typography variant="subtitle2">Mic</Typography>
      </Grid>

      <Grid item xs={4} className={classes.playersOption}>
        <People className={classes.iconMargin} />
        <Typography variant="subtitle2">3/4</Typography>
      </Grid>
    </Grid>
  )
}

export default TMCardStats
