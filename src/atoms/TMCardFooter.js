import React from 'react'
import { Divider, Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'

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
  },
  micOption: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  playersOption: {
    display: 'flex',
    borderLeft: '1px solid',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  iconStyle: {
    marginRight: 4,
    fontSize: 16,
  },
}))

function TMCardFooter({ gamePlatform, micChoice, roomSize }) {
  const classes = useStyles()

  return (
    <Grid container className={classes.statContainerStyles}>
      <Grid item xs={4} className={classes.platformOption}>
        <Dpad className={classes.iconStyle} />
        <Typography variant="caption">{gamePlatform}</Typography>
      </Grid>

      <Grid item xs={4} className={classes.micOption}>
        <Mic className={classes.iconStyle} />
        <Typography variant="caption">{micChoice}</Typography>
      </Grid>

      <Grid item xs={4} className={classes.playersOption}>
        <People className={classes.iconStyle} />
        <Typography variant="caption">{roomSize}</Typography>
      </Grid>
    </Grid>
  )
}

TMCardFooter.propTypes = {
  /** The room master's name  */
  userName: PropTypes.string,

  /** The small game logo  */
  gameLogo: PropTypes.string,

  /** The description of room*/
  decsription: PropTypes.string,
}

export default TMCardFooter
