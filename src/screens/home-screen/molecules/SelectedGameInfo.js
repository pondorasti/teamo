import React from "react"
import { makeStyles } from "@material-ui/styles"
import { Grid, Typography, TextField } from "@material-ui/core"
import Autocomplete from "@material-ui/lab/Autocomplete"
import { Platform, Game } from "../../../api/lobby-template/"

const useStyles = makeStyles((theme) => ({
  divContainer: {
    padding: "24px 0",
    margin: "auto",
    [theme.breakpoints.up("sm")]: {
      maxWidth: 656 // 336 * 2 - 16 (side padding)
    },

    [theme.breakpoints.up("md")]: {
      maxWidth: 992, // 336 * 3 - 16 (side padding)
    },
  },
  gridContainer: {
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
      alignItems: "flex-start",
    },

    // Handmade flex-gap
    // Source: https://coryrylan.com/blog/css-gap-space-with-flexbox
    "& > *": {
      margin: "16px 0 0 16px",
    },

    margin: "-16px 0 0 -16px",
    width: "calc(100% + 16px)",
  },
  leftGrid: {
    display: "flex",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
    },
  },
  rightGrid: {
    display: "flex",
    alignItems: "center",
    
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },

    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
      paddingRight: 16, // It has something to do with the Handmade flex-gap
    },
  },
  gameImg: {
    width: 176,
    height: 72,
    borderRadius: 8,
    objectFit: "cover",

    [theme.breakpoints.down("xs")]: {
      width: "100%",
      height: "auto"
    },
  },
  gameInfo: {
    flexDirection: "column",
    marginLeft: 8,
    [theme.breakpoints.down("xs")]: {
      marginLeft: 0,
      marginTop: 8,
    },
  },
  gameStats: { marginTop: 4 },
  leftAutocomplete: {
    width: 176,

    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  rightAutocomplete: {
    width: 176,
    marginLeft: 16,

    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },

    [theme.breakpoints.down("xs")]: {
      marginLeft: 0,
      marginTop: 16,
    },
  },
}))

function TMSelectedGameInfo() {
  const classes = useStyles()

  const gameImg = "https://cdn.vox-cdn.com/thumbor/2D0fSxmi24Zw7aaB3M_TViUavrc=/1400x788/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/15957232/0fe20042_0bb8_4781_82f4_7130f928b021.jpg"
  const gameName = "Minecraft"
  const gameStats = "150 Players,  43 Lobbies"

  return (
    <div className={classes.divContainer}>
      <Grid container justify="space-between" classes={{ root: classes.gridContainer }}>
        <Grid item classes={{ root: classes.leftGrid }}>
          <img
            src={gameImg}
            alt={gameName}
            className={classes.gameImg}
          />

          <div className={classes.gameInfo}>
            <Typography variant="h4">{gameName}</Typography>
            <Typography variant="body1" classes={{ root: classes.gameStats }}>
              {gameStats}
            </Typography>
          </div>
        </Grid>

        <Grid item classes={{ root: classes.rightGrid }}>
          <Autocomplete
            classes={{ root: classes.leftAutocomplete }}
            renderInput={(params) => <TextField {...params} label={Game.label} />}
            options={Game.options}
            fullWidth
          />
          <Autocomplete
            classes={{ root: classes.rightAutocomplete }}
            renderInput={(params) => <TextField {...params} label={Platform.label} />}
            options={Platform.options}
          />
        </Grid>
      </Grid>
    </div>
  )
}

export default TMSelectedGameInfo
