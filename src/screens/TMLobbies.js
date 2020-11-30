import { Grid } from '@material-ui/core'
import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

import TMCard from '../atoms/TMCard'

const useStyles = makeStyles((theme) => ({
  container: {
    // flexGrow: 1,
    // justifyContent: 'center',
    maxWidth: 1920
  },
  card: {
    maxWidth: 336,
    minWidth: 288,
  }
}))

function TMLobbies({ lobbies }) {
  const classes = useStyles()

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center'
    }}>
      <Grid
        container
        spacing={2}
        justify="center"
        classes={{ root: classes.container }}
      >
        {lobbies.map((lobby) => (
          <Grid
            item
            xs={12} sm={6} md={4} lg={3} xl={2}
            style={{
              display: 'flex',
              justifyContent: 'center',
              maxWidth: 336,
            }}
          >
            <TMCard
              userName={lobby.userName}
              gameLogo={lobby.gameLogo}
              decsription={lobby.decsription}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default TMLobbies
