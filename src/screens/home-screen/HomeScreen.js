import React from "react"

import { Grid, Toolbar, Hidden } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

import LobbyGrid from "./molecules/lobbies/LobbyGrid"
import AppBar from "../TMAppBar"
import Carousel from "./molecules/carousel/Carousel"

const useStyles = makeStyles((theme) => ({
  root: {
    height: "calc(100vh - 64px)",
    overflowY: "auto",
  },
  gridContainer: {
    backgroundColor: `${theme.palette.grey[800]}`,

    overflowX: "hidden",
    [theme.breakpoints.down("sm")]: {
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
    height: 504,
    width: 472,
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
            justifyContent="center"
            wrap="nowrap"
            classes={{ root: classes.gridContainer }}
          >
            <Hidden smDown>
              <Grid item>
                <img
                  src="https://dl.airtable.com/.attachments/2e6ab63c02d7e2c77ca986b9de7b5c2f/1ba03024/EasternScene1x.png"
                  srcSet="https://dl.airtable.com/.attachments/2e6ab63c02d7e2c77ca986b9de7b5c2f/1ba03024/EasternScene1x.png 1x, https://dl.airtable.com/.attachments/497bbd1ee2e86dba72f7369ade31eee5/8f01d66e/EasternScene2x.png 2x"
                  className={classes.image}
                  alt="Eastern style islands with a raccoon playing VR on the roof."
                />
              </Grid>
            </Hidden>

            <Grid item>
              <div className={classes.contentContainer}>
                <Carousel />
                <LobbyGrid />
              </div>
            </Grid>

            <Hidden smDown>
              <Grid item>
                <img
                  src="https://dl.airtable.com/.attachments/0fb20077c48345a76761d4354269eda7/8ee521d7/WesternScene1x.png"
                  srcSet="https://dl.airtable.com/.attachments/0fb20077c48345a76761d4354269eda7/8ee521d7/WesternScene1x.png 1x, https://dl.airtable.com/.attachments/e03bae454355b14068f7e5bd990b6c6e/3732cf9f/WesternScene2x.png 2x"
                  className={classes.image}
                  alt="Western style islands focusing on mushrooms playing video games on a couch."
                />
              </Grid>
            </Hidden>
          </Grid>
        </div>
      </main>
    </div>
  )
}

export default HomeScreen
