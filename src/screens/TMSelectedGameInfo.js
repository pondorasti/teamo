import React from "react"
import { makeStyles } from "@material-ui/styles"
import { Grid, Typography } from "@material-ui/core"
import TMAutocomplete from "../atoms/TMAutocomplete"

const games = ["Minecraft", "League of Legends", "Among Us"]
const platforms = ["PC", "Play Station", "XBOX", "VR"]

const useStyles = makeStyles((theme) => ({
  selectGameDiv: {
    alignItems: "center",
    margin: "20px 0px",
    padding: "20px 0px",
    backgroundColor: theme.palette.grey[800],
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
    },
  },
  leftGridMain: {
    display: "flex",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
    },
    [theme.breakpoints.down("sm")]: {
      marginBottom: 16,
    },
  },

  rightGridMain: {
    display: "flex",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
    },
  },
  gameImg: {
    width: 176,
    height: 72,
    objectFit: "cover",
  },
  gameInfo: {
    flexDirection: "column",
    marginLeft: 10,
    [theme.breakpoints.down("xs")]: {
      marginLeft: 0,
      marginTop: 8,
    },
  },
  gameStats: {
    marginTop: 4,
  },
  autoCompleteSpacing: {
    [theme.breakpoints.down("xs")]: {
      marginLeft: -16,
      marginTop: 8,
    },
  },
}))

function TMSelectedGameInfo({
  selectGameImg,
  selectGameName,
  selectGameStats,
}) {
  const classes = useStyles()

  return (
    <Grid container justify="space-between" className={classes.selectGameDiv}>
      <Grid item className={classes.leftGridMain}>
        <img
          src={selectGameImg}
          alt="selected game"
          className={classes.gameImg}
        />

        <div className={classes.gameInfo}>
          <Typography variant="h4">{selectGameName}</Typography>
          <Typography variant="body1" classes={{ root: classes.gameStats }}>
            {selectGameStats}
          </Typography>
        </div>
      </Grid>

      <Grid item className={classes.rightGridMain}>
        <TMAutocomplete
          label="Game"
          options={games}
          getOptionLabel={(game) => game}
          style={{
            width: 176,
          }}
        />
        <div className={classes.autoCompleteSpacing}>
          <TMAutocomplete
            label="Platform"
            options={platforms}
            getOptionLabel={(platform) => platform}
            style={{
              marginLeft: 16,
              width: 176,
            }}
          />
        </div>
      </Grid>
    </Grid>
  )
}

export default TMSelectedGameInfo
