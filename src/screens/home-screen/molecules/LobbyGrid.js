import { Grid } from "@material-ui/core"
import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import PropTypes from "prop-types"
import LobbyCard from "./LobbyCard"
import SelectedGameInfo from "./SelectedGameInfo"

const useStyles = makeStyles((theme) => ({
  gridItem: {
    // Do not change this value without updating `maxWidth` for
    // LobbyGrid - `container` and SelectedGameInfo - `divContainer`
    maxWidth: 336,

    [theme.breakpoints.down("sm")]: {
      maxWidth: "100%",
    },
  },
}))

function LobbyGrid({ lobbies }) {
  const classes = useStyles()

  return (
    <div>
      <SelectedGameInfo />

      <Grid container spacing={2} justify="center">
        {lobbies.map((lobby) => (
          <Grid
            key={lobby.id}
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
              gameLogoUrl={lobby.gameLogoUrl}
              gameName="Minecraft"
              description={lobby.description}
              platform={lobby.platform}
              usesMic={lobby.usesMic}
              sizeStatus={lobby.sizeStatus}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

LobbyGrid.propTypes = {
  /** An array of lobbies */
  lobbies: PropTypes.array.isRequired,
}

export default LobbyGrid
