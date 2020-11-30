import { Grid } from "@material-ui/core"
import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import PropTypes from "prop-types"
import LobbyCard from "./LobbyCard"

const useStyles = makeStyles({
  divContainer: {
    display: "flex",
    justifyContent: "center",
  },
  gridContainer: {
    maxWidth: 1920,
  },
  gridItem: {
    display: "flex",
    justifyContent: "center",
    maxWidth: 336,
  },
})

function LobbyGrid({ lobbies }) {
  const classes = useStyles()

  return (
    <div classes={{ root: classes.divContainer }}>
      <Grid
        container
        spacing={2}
        justify="center"
        classes={{ root: classes.gridContainer }}
      >
        {lobbies.map((lobby) => (
          <Grid
            key={0}
            item
            xs={12}
            sm={6}
            md={4}
            lg={3}
            xl={2}
            classes={{ root: classes.gridItem }}
          >
            <LobbyCard
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

LobbyGrid.propTypes = {
  /**  */
  lobbies: PropTypes.array,
}

export default LobbyGrid
