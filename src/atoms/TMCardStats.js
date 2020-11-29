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
    alignItems: 'center',
    justifyContent: 'start',
    // backgroundColor: 'blue',
  },
  micOption: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'red',
  },
  playersOption: {
    display: 'flex',
    borderLeft: '1px solid',
    alignItems: 'center',
    justifyContent: 'flex-end',
    // backgroundColor: 'green',
  },
  iconStyle: {
    marginRight: 4,
    fontSize: 16
  }
}))

function TMCardStats() {
  const classes = useStyles()

  return (
    <Grid container className={classes.statContainerStyles}>
      <Grid item xs={4} className={classes.platformOption}>
        <Dpad className={classes.iconStyle} />
        <Typography variant='caption'>Xbox 1</Typography>
      </Grid>

      <Grid item xs={4} className={classes.micOption}>
        <Mic className={classes.iconStyle} />
        <Typography variant='caption'>Mic</Typography>
      </Grid>

      <Grid item xs={4} className={classes.playersOption}>
        <People className={classes.iconStyle} />
        <Typography variant='caption'>3/4</Typography>
      </Grid>
    </Grid>
  )
}

export default TMCardStats
