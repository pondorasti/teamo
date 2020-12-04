import { Grid } from "@material-ui/core"
import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import PropTypes from "prop-types"
import LobbyCard from "./molecules/LobbyCard"
import SelectedGameInfo from "./molecules/SelectedGameInfo"

const useStyles = makeStyles(theme => ({
  container: {
    margin: "auto",

    [theme.breakpoints.up("sm")]: {
      maxWidth: 672 // 336 * 2
    },

    [theme.breakpoints.up("md")]: {
      maxWidth: 1008, // 336 * 3
    },
  },
  gridItem: {
    // Do not change this value without updating `maxWidth` for
    // LobbyGrid - `container` and SelectedGameInfo - `divContainer`
    maxWidth: 336, 

    [theme.breakpoints.down("xs")]: {
      maxWidth: "100%",
    },
  },
}))

function LobbyGrid({ lobbies }) {
  const classes = useStyles()

  return (
    <div className={classes.container}>
      <SelectedGameInfo />

      <Grid
        container
        spacing={2}
        justify="center"
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
