import React from "react"
import { Grid, Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import PropTypes from "prop-types"

import People from "../../../assets/icons/People"
import Dpad from "../../../assets/icons/Dpad"
import Mic from "../../../assets/icons/Mic"

const useStyles = makeStyles((theme) => ({
  statContainerStyles: {
    color: theme.palette.secondary.main,
  },
  platformOption: {
    display: "flex",
    justifyContent: "start",
    borderRight: "1px solid",
  },
  micOption: {
    display: "flex",
    justifyContent: "center",
  },
  playersOption: {
    display: "flex",
    justifyContent: "flex-end",
    borderLeft: "1px solid",
  },
  iconStyle: {
    marginRight: 4,
    fontSize: 16,
  },
}))

function LobbyCardFooter({ gamePlatform, micChoice, roomSize }) {
  const classes = useStyles()

  return (
    <Grid container classes={{ root: classes.statContainerStyles }}>
      <Grid item xs={4} classes={{ root: classes.platformOption }}>
        <Dpad classes={{ root: classes.iconStyle }} />
        <Typography variant="caption">{gamePlatform}</Typography>
      </Grid>

      <Grid item xs={4} classes={{ root: classes.micOption }}>
        <Mic classes={{ root: classes.iconStyle }} />
        <Typography variant="caption">{micChoice}</Typography>
      </Grid>

      <Grid item xs={4} classes={{ root: classes.playersOption }}>
        <People classes={{ root: classes.iconStyle }} />
        <Typography variant="caption">{roomSize}</Typography>
      </Grid>
    </Grid>
  )
}

LobbyCardFooter.propTypes = {
  /** PC or console selection */
  gamePlatform: PropTypes.string,

  /** mic Selection  */
  micChoice: PropTypes.string,

  /** Room Size and status */
  roomSize: PropTypes.string,
}

export default LobbyCardFooter
