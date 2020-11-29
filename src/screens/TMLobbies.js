import { Grid } from '@material-ui/core'
import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

import TMCard from '../atoms/TMCard'

const useStyles = makeStyles((theme) => ({
  container: {
    // flexGrow: 1,
    justifyContent: 'center',
  },
}))

function TMLobbies({ lobbies }) {
  const classes = useStyles()

  return (
    <Grid
      container
      justify="center"
      spacing={1}
      // alignContent="center"
      // alignItems="center"
      classes={{ root: classes.container }}
    >
      {lobbies.map((lobby) => (
        <Grid item>
          <TMCard
            userName={lobby.userName}
            gameLogo={lobby.gameLogo}
            decsription={lobby.decsription}
          />
        </Grid>
      ))}
    </Grid>
  )
}

export default TMLobbies
