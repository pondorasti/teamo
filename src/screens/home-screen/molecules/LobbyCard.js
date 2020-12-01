import React from "react"
import Typography from "@material-ui/core/Typography"
import Card from "@material-ui/core/Card"
import { makeStyles } from "@material-ui/core/styles"
import { Grid, IconButton, Menu, MenuItem } from "@material-ui/core"
import PropTypes from "prop-types"
import { darken } from "@material-ui/core/styles/colorManipulator"

import LobbyCardFooter from "./LobbyCardFooter"
import TMAvatar from "../../../atoms/TMAvatar"
import ThreeDots from "../../../assets/icons/ThreeDots"

const useStyles = makeStyles((theme) => ({
  cardContainer: {
    position: "relative",
  },
  lobbyCard: {
    padding: 12,
    borderRadius: 16,
    borderColor: theme.palette.grey[500],
    // transition: "50ms",
    cursor: "pointer",
    backgroundColor: theme.palette.grey[700],
    "&:hover": {
      // transform: 'translate(-3px, -3px)',
      // boxShadow: '0px 8px 20px 1px rgba(56, 56, 56, 0.6)',
      backgroundColor: darken(theme.palette.grey[700], 0.1),
    },
    "&:hover + $optionsIcon": {
      opacity: 1,
      top: "-7%",
      right: "-4%",
    },
  },
  topDiv: {
    display: "flex",
    width: "100%",
    alignItems: "center",
    marginBottom: 16,
  },
  gameImgGrid: {
    display: "flex",
    justifyContent: "flex-end",
  },
  gameImg: {
    width: 84,
    height: 24,
    objectFit: "cover",
  },
  cardMiddleSection: {
    marginBottom: 16,
  },
  lobbyMasterInfo: {
    display: "flex",
    alignItems: "center",
  },
  lobbyMasterName: {
    color: theme.palette.text.secondary,
    marginLeft: 4,
  },
  optionsIcon: {
    opacity: 0,
    border: `1px solid ${theme.palette.grey[500]}`,
    backgroundColor: theme.palette.grey[700],
    borderRadius: 6,
    height: 24,
    width: 24,
    "&:hover": {
      backgroundColor: darken(theme.palette.grey[700], 0.1),
      opacity: 1,
      top: "-7%",
      right: "-4%",
    },

    position: "absolute",
    zIndex: 1,
    top: "0",
    right: "0",
  },
  optionIconStyle: {
    fontSize: 16,
  },
}))

function LobbyCard({ hostUsername, hostPicture, gameName, gameLogo, description, platform, usesMic, sizeStatus }) {
  const classes = useStyles()
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleOptionsButton = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleAddToWatchList = () => {
    handleClose()
  }
  const handleReportLobby = () => {
    handleClose()
  }

  return (
    <div className={classes.cardContainer}>
      <Card classes={{ root: classes.lobbyCard }} variant="outlined">
        <Grid container justify="space-between">
          <div className={classes.topDiv}>
            <Grid item xs={6} classes={{ root: classes.lobbyMasterInfo }}>
              <TMAvatar
                size="extraSmall"
                src={hostPicture}
                alt={hostUsername}
              />
              <Typography
                variant="body1"
                classes={{ root: classes.lobbyMasterName }}
              >
                {hostUsername}
              </Typography>
            </Grid>
            <Grid item xs={6} classes={{ root: classes.gameImgGrid }}>
              <img className={classes.gameImg} src={gameLogo} alt={gameName} />
            </Grid>
          </div>
          <Grid item xs={12} classes={{ root: classes.cardMiddleSection }}>
            <Typography variant="h5">{description}</Typography>
          </Grid>
          <Grid item xs={12}>
            <LobbyCardFooter platform={platform} usesMic={usesMic} sizeStatus={sizeStatus} />
          </Grid>
        </Grid>
      </Card>
      <IconButton
        classes={{ root: classes.optionsIcon }}
        aria-label="lobby options"
        aria-controls="lobby-menu"
        aria-haspopup="true"
        onClick={handleOptionsButton}
      >
        <ThreeDots className={classes.optionIconStyle} />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        keepMounted
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={handleAddToWatchList}>Add to Watch List</MenuItem>
        <MenuItem onClick={handleReportLobby}>Report Lobby</MenuItem>
      </Menu>
    </div>
  )
}

LobbyCard.propTypes = {
  /** The username of the lobby host. */
  hostUsername: PropTypes.string.isRequired,

  /** The `src` attribute for the profile picture of the lobby host. */
  hostPicture: PropTypes.string.isRequired,

  /** The name of game. */
  gameName: PropTypes.string.isRequired,

  /** The `src` attribute for the game logo. */
  gameLogo: PropTypes.string.isRequired,

  /** The description of lobby. */
  description: PropTypes.string.isRequired,

  /** The game platform of the lobby. */
  platform: PropTypes.string.isRequired,

  /** The mic status for the lobby. */
  usesMic: PropTypes.bool.isRequired,

  /** The size status of the lobby. */
  sizeStatus: PropTypes.string.isRequired,
}

export default LobbyCard
