import { Grid } from "@material-ui/core"
import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import PropTypes from "prop-types"
import LobbyCard from "./LobbyCard"

const useStyles = makeStyles(theme => ({
  divContainer: {
    display: "flex",
    justifyContent: "center",
  },
  gridContainer: {
    maxWidth: 1008, // 336 * 3
  },
  gridItem: {
    display: "flex",
    justifyContent: "center",
    maxWidth: 336,

    [theme.breakpoints.down("xs")]: {
      maxWidth: "100%",
    },
  },
}))

function LobbyGrid({ lobbies }) {
  const classes = useStyles()

  return (
    <div className={classes.divContainer}>
      <Grid
        container
        spacing={2}
        justify="center"
        classes={{ root: classes.gridContainer }}
      >
        {lobbies.map((lobby, index) => (
          <Grid
            key={index}
            item
            xs={12}
            sm={6}
            md={4}
            lg={4}
            xl={4}
            classes={{ root: classes.gridItem }}
          >
            <LobbyCard
              hostUsername={lobby.username}
              hostPicture="https://qph.fs.quoracdn.net/main-qimg-3d69658bf00b1e706b75162a50d19d6c"
              gameLogo={lobby.gameLogo}
              gameName="Minecraft"
              description={lobby.description}
              platform="PS5"
              usesMic={false}
              sizeStatus="3/5"
            />
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

LobbyGrid.propTypes = {
  /** An array of lobbies */
  lobbies: PropTypes.array,
}

export default LobbyGrid
