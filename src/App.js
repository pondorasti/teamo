import React from "react"

import { CssBaseline, Grid, Toolbar, Hidden } from "@material-ui/core"
import { TMTheme } from "./atoms"
import { ThemeProvider, makeStyles } from "@material-ui/core/styles"


import lobbies from "./api/dummy-data/lobbies"

import LobbyGrid from "./screens/home-screen/LobbyGrid"
import AppBar from "./screens/TMAppBar"
import Carousel from "./screens/home-screen/molecules/Carousel"

import { AsianHouse, WesternHouse } from "./assets/images/"

const useStyles = makeStyles(theme => ({
  gridContainer: {
    overflow: "hidden",
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


function App() {
  const classes = useStyles()

  return (
    <ThemeProvider theme={TMTheme}>
      <CssBaseline />
      {/* <LobbyScreen /> */}

      <main style={{ backgroundColor: TMTheme.palette.grey[800] }}>
        <AppBar />
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
              <img src={AsianHouse} style={{ maxHeight: 384 }} />
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
              <img src={WesternHouse} style={{ maxHeight: 384 }} />
            </Grid>
          </Hidden>
        </Grid>
      </main>

    </ThemeProvider>
  )
}

export default App
