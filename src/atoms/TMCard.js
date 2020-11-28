import React from 'react'
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'
import { makeStyles } from '@material-ui/core/styles'
import { Grid } from '@material-ui/core'

import TMCardStats from './TMCardStats'

const useStyles = makeStyles((theme) => ({
  lobbyCard: {
    width: 300,
    height: 150,
    padding: '15px 15px',
    backgroundColor: theme.palette.grey[700],
    borderRadius: 16,
    transition: '70ms',
    '&:hover': {
      transform: 'translate(-3px, -3px)',
      boxShadow: '0px 8px 20px 1px rgba(56, 56, 56, 0.2)',
    },
  },
  gameImg: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  cardTopSection: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: 14,
  },
  cardMiddleSection: {
    marginBottom: 18,
  },
  cardBtoomSection: {
    marginBottom: 8,
  },
  customTypography: {
    fontWeight: theme.typography.h4.fontWeight,
    fontSize: theme.typography.h4.fontSize,
    lineHeight: theme.typography.h4.lineHeight,
    letterSpacing: theme.typography.h4.letterSpacing,
  },
}))

function TMCard() {
  const classes = useStyles()

  return (
    <Card className={classes.lobbyCard} variant="outlined">
      <Grid container justify="space-between">
        <Grid item xs={6} className={classes.cardTopSection}>
          <Typography variant="subtitle1">Pic + UserName123</Typography>
        </Grid>
        <Grid item xs={6} className={classes.gameImg}>
          <Typography variant="subtitle1">Game Img</Typography>
        </Grid>
        <Grid item xs={12} className={classes.cardMiddleSection}>
          <Typography variant="h6" className={classes.customTypography}>
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
