import React from 'react'
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'
import { makeStyles } from '@material-ui/core/styles'
import { Grid } from '@material-ui/core'

import TMCardStats from './TMCardStats'

const useStyles = makeStyles((theme) => ({
  lobbyCard: {
    width: 290,
    // minWidth: 286,
    // height: 150,
    padding: '15px 15px',
    cursor: 'pointer',
    backgroundColor: theme.palette.grey[700],
    borderRadius: 16,
    transition: '70ms',
    // '&:hover': {
    //   transform: 'translate(-3px, -3px)',
    //   boxShadow: '0px 8px 20px 1px rgba(56, 56, 56, 0.2)',
    // },
  },
  gameImg: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: 84,
    height: 24,
    objectFit: 'cover',
  },
  cardTopSection: {
    marginBottom: 20,
  },
  cardMiddleSection: {
    marginBottom: 22,
  },
  cardBtoomSection: {
    marginBottom: 0,
  },

  userNameTypography: {
    paddingTop: 4,
    color: theme.palette.text.secondary,
  }
}))

function TMCard() {
  const classes = useStyles()

  return (
    <Card className={classes.lobbyCard} variant="outlined">
      <Grid container justify="space-between">
        <Grid item xs={6} className={classes.cardTopSection}>
          <Typography variant='body1' classes={{ root: classes.userNameTypography }}>
            Pic UserName123
          </Typography>
        </Grid>
        <Grid item xs={6} className={classes.gameImg}>
          <img
            className={classes.gameImg}
            src="https://logos-world.net/wp-content/uploads/2020/04/Minecraft-Logo.png"
            alt="gameImg"
          />
        </Grid>
        <Grid item xs={12} className={classes.cardMiddleSection}>
          <Typography variant='h5'>
            This is my room decription, this should be no more than three lines
            long...
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <TMCardStats className={classes.cardBtoomSection} />
        </Grid>
      </Grid>
    </Card>
  )
}

export default TMCard
