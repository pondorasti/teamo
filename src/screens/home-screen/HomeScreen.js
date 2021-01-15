import React from "react"

import { Grid, Toolbar, Hidden } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

import LobbyGrid from "./molecules/lobbies/LobbyGrid"
import AppBar from "../TMAppBar"
import Carousel from "./molecules/carousel/Carousel"

const useStyles = makeStyles((theme) => ({
  root: {
    height: "calc(100vh - 64px)",
    overflowY: "scroll",
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
      width: 672, // 336 * 2
    },

    [theme.breakpoints.up("md")]: {
      width: 1008, // 336 * 3
    },
  },
  image: {
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
                  src="https://dl.airtable.com/.attachments/4bb68409f72cfdd2b0bf627609d098a7/6cc4f847/EasternScene1x.png"
                  srcSet="https://dl.airtable.com/.attachments/4bb68409f72cfdd2b0bf627609d098a7/6cc4f847/EasternScene1x.png 1x, https://dl.airtable.com/.attachments/c467c7c66ef917127efcc3fb4ec46f2f/9a5bf9f2/EasternScene2x.png 2x"
                  height="504px"
                  width="472px"
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
                  src="https://dl.airtable.com/.attachments/b50e36310b290ace23301895758e3828/010022f2/WesternScene1x.png"
                  srcSet="https://dl.airtable.com/.attachments/b50e36310b290ace23301895758e3828/010022f2/WesternScene1x.png 1x, https://dl.airtable.com/.attachments/7945ef1e7c2897cf57a6fbc12e3a2f6e/8b96adc7/WesternScene2x.png 2x"
                  height="504px"
                  width="472px"
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
