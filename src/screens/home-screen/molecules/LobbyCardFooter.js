import React from "react"
import { Grid, Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import PropTypes from "prop-types"

import { People, Dpad, Mic, MicSlash } from "../../../assets/icons"

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

function LobbyCardFooter({ platform, usesMic, sizeStatus }) {
  const classes = useStyles()

  return (
    <Grid container classes={{ root: classes.statContainerStyles }}>
      <Grid item xs={4} classes={{ root: classes.platformOption }}>
        <Dpad classes={{ root: classes.iconStyle }} />
        <Typography variant="caption">{platform}</Typography>
      </Grid>

      <Grid item xs={4} classes={{ root: classes.micOption }}>
        {usesMic ? <Mic classes={{ root: classes.iconStyle }} /> : <MicSlash classes={{ root: classes.iconStyle }} />}

        <Typography variant="caption">{usesMic ? "Mic" : "No Mic"}</Typography>
      </Grid>

      <Grid item xs={4} classes={{ root: classes.playersOption }}>
        <People classes={{ root: classes.iconStyle }} />
        <Typography variant="caption">{sizeStatus}</Typography>
      </Grid>
    </Grid>
  )
}

LobbyCardFooter.propTypes = {
  /** The game platform of the lobby. */
  platform: PropTypes.string.isRequired,

  /** The mic status for the lobby. */
  usesMic: PropTypes.bool.isRequired,

  /** The size status of the lobby. */
  sizeStatus: PropTypes.string.isRequired,
}

export default LobbyCardFooter
