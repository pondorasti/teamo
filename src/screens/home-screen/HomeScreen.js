import React from "react"

import { Grid, Toolbar, Hidden } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

import lobbies from "../../api/dummy-data/lobbies"
import LobbyGrid from "./molecules/LobbyGrid"
import AppBar from "../TMAppBar"
import Carousel from "./molecules/Carousel"

import { AsianScene, WesternScene } from "../../assets/images/"

const useStyles = makeStyles(theme => ({
  gridContainer: {
    backgroundColor: `${theme.palette.grey[800]}`,

    overflowY: "auto",
    overflowX: "hidden",
    [theme.breakpoints.down("xs")]: {
      display: "block",
    },
  },
  contentContainer: {
    margin: "auto",
    padding: 32,

    [theme.breakpoints.up("sm")]: {
      maxWidth: 672 // 336 * 2
    },

    [theme.breakpoints.up("md")]: {
      maxWidth: 1008, // 336 * 3
    },
  },
}))

function HomeScreen() {
  const classes = useStyles()

  return (
    <div>
      <AppBar />

      <main style={{  }}>
        <Toolbar />
        <Grid
          container
          direction="row"
          justify="center"
          wrap="nowrap"
          classes={{ root: classes.gridContainer }}
          spacing={0}
        >
          <Hidden xsDown>
            <Grid item>
              <img src={AsianScene} style={{ maxHeight: 600, paddingTop: 32, paddingRight: 32, opacity: 0.9 }} />
            </Grid>
          </Hidden>

          <Grid item>
            <div className={classes.contentContainer}>
              <Carousel />
              <LobbyGrid lobbies={lobbies} />
            </div>
          </Grid>

          <Hidden xsDown>
            <Grid item>
              <img src={WesternScene} style={{ maxHeight: 600, paddingTop: 32, paddingRight: 32, opacity: 0.9 }} />
            </Grid>
          </Hidden>
        </Grid>
      </main>
    </div>
  )
}

export default HomeScreen
