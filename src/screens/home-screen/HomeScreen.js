import React from "react"

import { Grid, Toolbar, Hidden } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

import lobbies from "../../api/dummy-data/lobbies"
import LobbyGrid from "./molecules/LobbyGrid"
import AppBar from "../TMAppBar"
import Carousel from "./molecules/Carousel"
import { EasternScene, WesternScene } from "../../assets/images"

const useStyles = makeStyles((theme) => ({
  root: {
    height: "calc(100vh - 64px)",
    overflowY: "auto",
  },
  gridContainer: {
    backgroundColor: `${theme.palette.grey[800]}`,

    overflowX: "hidden",
    [theme.breakpoints.down("xs")]: {
      display: "block",
    },
  },
  contentContainer: {
    margin: "auto",
    padding: 32,

    [theme.breakpoints.up("sm")]: {
      maxWidth: 672, // 336 * 2
    },

    [theme.breakpoints.up("md")]: {
      maxWidth: 1008, // 336 * 3
    },
  },
  image: {
    maxHeight: 504,
    paddingTop: 32,
    opacity: 0.9,
  },
}))

function HomeScreen() {
  const classes = useStyles()

  return (
    <div>
      <AppBar />
      <main>
        <Toolbar />
        <div className={classes.root}>
          <Grid
            container
            direction="row"
            justify="center"
            wrap="nowrap"
            classes={{ root: classes.gridContainer }}
          >
            <Hidden xsDown>
              <Grid item>
                <img
                  src={EasternScene}
                  className={classes.image}
                  alt="Eastern style islands with a raccoon playing VR on the roof."
                />
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
                <img src={WesternScene} className={classes.image} alt="Western style islands focusing on mushrooms playing video games on a couch." />
              </Grid>
            </Hidden>
          </Grid>
        </div>
      </main>
    </div>
  )
}

export default HomeScreen
