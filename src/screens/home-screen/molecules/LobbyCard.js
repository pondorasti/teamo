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
    marginBottom: 14,
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
    marginBottom: 20,
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
    border: "1px solid #505050",
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
// https://logos-world.net/wp-content/uploads/2020/04/Minecraft-Logo.png
function LobbyCard({ userName, gameLogo, decsription }) {
  const classes = useStyles()
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleOptionsButton = (event) => {
    // if user logged in show menu
    setAnchorEl(event.currentTarget)
    // else
    // open sign in modal
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
                src="https://qph.fs.quoracdn.net/main-qimg-3d69658bf00b1e706b75162a50d19d6c"
                alt="user avatar"
              />
              <Typography
                variant="body1"
                classes={{ root: classes.lobbyMasterName }}
              >
                {userName}
              </Typography>
            </Grid>
            <Grid item xs={6} classes={{ root: classes.gameImgGrid }}>
              <img className={classes.gameImg} src={gameLogo} alt="gameImg" />
            </Grid>
          </div>
          <Grid item xs={12} classes={{ root: classes.cardMiddleSection }}>
            <Typography variant="h5">{decsription}</Typography>
          </Grid>
          <Grid item xs={12}>
            <LobbyCardFooter gamePlatform="PC" micChoice="Mic" roomSize="3/5" />
          </Grid>
        </Grid>
      </Card>
      <IconButton
        classes={{ root: classes.optionsIcon }}
        aria-label="lobby options"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleOptionsButton}
        style={{ marginLeft: "4px" }}
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
  /** The room master's name  */
  userName: PropTypes.string,

  /** The small game logo  */
  gameLogo: PropTypes.string,

  /** The description of room*/
  decsription: PropTypes.string,
}

export default LobbyCard
