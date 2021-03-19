import React, { useState } from "react"
import { makeStyles } from "@material-ui/core/styles/"
import { Grid, Typography, TextField } from "@material-ui/core"
import Autocomplete from "@material-ui/core/Autocomplete"
import { useSelector } from "react-redux"
import { Platform, Game } from "../../../../api/lobby-template"
import {
  selectAllFilterGames,
  selectGameByName,
} from "../../../redux/slices/games/gamesSlice"

const useStyles = makeStyles((theme) => ({
  divContainer: {
    padding: "24px 0",
    margin: "auto",
    [theme.breakpoints.up("sm")]: {
      maxWidth: 656, // 336 * 2 - 16 (side padding)
    },

    [theme.breakpoints.up("md")]: {
      maxWidth: 992, // 336 * 3 - 16 (side padding)
    },
  },
  gridContainer: {
    [theme.breakpoints.down("sm")]: {
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
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  rightGrid: {
    display: "flex",
    alignItems: "center",

    [theme.breakpoints.down("md")]: {
      width: "100%",
    },

    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      paddingRight: 16, // It has something to do with the Handmade flex-gap
    },
  },
  gameImg: {
    borderRadius: 16,
    objectFit: "cover",

    [theme.breakpoints.down("sm")]: {
      width: "100%",
      height: "auto",
    },
  },
  gameInfo: {
    marginLeft: 8,
    [theme.breakpoints.down("sm")]: {
      marginLeft: 0,
      marginTop: 8,
    },
  },
  gameStats: { marginTop: 4 },
  leftAutocomplete: {
    width: 176,

    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
  },
  rightAutocomplete: {
    width: 176,
    marginLeft: 8,

    [theme.breakpoints.down("md")]: {
      width: "100%",
    },

    [theme.breakpoints.down("sm")]: {
      marginLeft: 0,
      marginTop: 16,
    },
  },
}))

function SelectedGameInfo() {
  const classes = useStyles()

  const gameStats = "150 Players,  43 Lobbies"

  const games = useSelector(selectAllFilterGames)
  const [gameName, setGameName] = useState(games[0].name)
  const game = useSelector((state) => selectGameByName(state, gameName))

  return (
    <div className={classes.divContainer}>
      <Grid
        container
        justifyContent="space-between"
        classes={{ root: classes.gridContainer }}
      >
        <Grid item classes={{ root: classes.leftGrid }}>
          <img
            width="176px"
            height="72px"
            src={game.bannerUrl}
            alt={game.name}
            className={classes.gameImg}
          />

          <div className={classes.gameInfo}>
            <Typography variant="h4">{game.name}</Typography>
            <Typography variant="body1" classes={{ root: classes.gameStats }}>
              {gameStats}
            </Typography>
          </div>
        </Grid>

        <Grid item classes={{ root: classes.rightGrid }}>
          <Autocomplete
            classes={{ root: classes.leftAutocomplete }}
            value={gameName}
            onChange={(_, newValue) => setGameName(newValue)}
            // eslint-disable-next-line react/jsx-props-no-spreading
            renderInput={(params) => <TextField {...params} label={Game.label} />}
            options={games.map((item) => item.name)}
            fullWidth
            disableClearable
          />
          <Autocomplete
            classes={{ root: classes.rightAutocomplete }}
            // eslint-disable-next-line react/jsx-props-no-spreading
            renderInput={(params) => <TextField {...params} label={Platform.label} />}
            options={Platform.options}
          />
        </Grid>
      </Grid>
    </div>
  )
}

export default SelectedGameInfo
