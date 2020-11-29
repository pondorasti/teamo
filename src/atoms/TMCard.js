import React from 'react'
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'
import { makeStyles } from '@material-ui/core/styles'
import { Grid } from '@material-ui/core'
import PropTypes from 'prop-types'

import TMCardFooter from './TMCardFooter'

const useStyles = makeStyles((theme) => ({
  lobbyCard: {
    width: 284,
    // minWidth: 284,
    padding: 12,
    borderRadius: 16,
    transition: '70ms',
    cursor: 'pointer',
    backgroundColor: theme.palette.grey[700],
    // '&:hover': {
    //   transform: 'translate(-3px, -3px)',
    //   boxShadow: '0px 8px 20px 1px rgba(56, 56, 56, 0.2)',
    // },
  },
  topDiv: {
    display: 'flex',
    width: '100%',
    alignItems: 'center',
    marginBottom: 14,
  },
  gameImgGrid: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  gameImg: {
    width: 84,
    height: 24,
    objectFit: 'cover',
  },
  cardMiddleSection: {
    marginBottom: 20,
  },
  userNameTypography: {
    color: theme.palette.text.secondary,
  },
}))
// https://logos-world.net/wp-content/uploads/2020/04/Minecraft-Logo.png
function TMCard({ userName, gameLogo, decsription }) {
  const classes = useStyles()

  return (
    <Card classes={{ root: classes.lobbyCard }} variant="outlined">
      <Grid container justify="space-between">
        <div className={classes.topDiv}>
          <Grid item xs={6}>
            <Typography
              variant="body1"
              classes={{ root: classes.userNameTypography }}
            >
              {userName}
            </Typography>
          </Grid>
          <Grid item xs={6} classes={{ root: classes.gameImgGrid }}>
            <img className={classes.gameImg} src={gameLogo} alt="gameImg" />
          </Grid>
        </div>
        <Grid item xs={12} classes={{ root: classes.cardMiddleSection }}>
          <Typography variant="h5">{decsription}</Typography>
        </Grid>
        <Grid item xs={12}>
          <TMCardFooter gamePlatform="PC" micChoice="Mic" roomSize="3/5" />
        </Grid>
      </Grid>
    </Card>
  )
}

TMCard.propTypes = {
  /** The room master's name  */
  userName: PropTypes.string,

  /** The small game logo  */
  gameLogo: PropTypes.string,

  /** The description of room*/
  decsription: PropTypes.string,
}

export default TMCard
