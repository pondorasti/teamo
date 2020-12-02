import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Grid, IconButton, Menu, MenuItem, Card, CardActionArea, Typography } from "@material-ui/core"
import PropTypes from "prop-types"

import LobbyCardFooter from "./LobbyCardFooter"
import TMAvatar from "../../../atoms/TMAvatar"
import ThreeDots from "../../../assets/icons/ThreeDots"

const useStyles = makeStyles((theme) => ({
  cardContainer: { position: "relative" },
  card: {
    borderRadius: 16,
    border: `1px solid ${theme.palette.grey[500]}`,
    WebkitMaskImage: "-webkit-radial-gradient(white, black)", // fixes safari overflow bug

    pointerEvents: "fill", // don't accidently trigger options menu by hovering over the border
    backgroundColor: theme.palette.grey[700],
    "&:hover + $optionsButtonContainer": {
      opacity: 1,
      pointerEvents: "auto",
    },
  },
  cardActionArea: {
    padding: 12,
  },
  cardActionAreaFocusHighlight: {},
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
  hostInfo: {
    display: "flex",
    alignItems: "center",
  },
  hostUsername: {
    color: theme.palette.text.secondary,
    marginLeft: 4,
  },
  optionsButtonContainer: {
    border: `1px solid ${theme.palette.grey[500]}`,
    backgroundColor: theme.palette.grey[700],
    borderRadius: 6,

    overflow: "hidden",
    position: "absolute",
    zIndex: 1,

    top: -12,
    right: -12,

    opacity: 0,

    // do not reveal options menu before hovering the card
    pointerEvents: "none", 

    transition: theme.transitions.create("opacity",  {
      duration: theme.transitions.duration.short,
    }),

    "&:hover": {
      pointerEvents: "auto",
      opacity: 1,
    },
  },
  optionsIcon: {
    borderRadius: 0,
    height: 24,
    width: 24,
  },
  optionIconStyle: { fontSize: 16 },
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
      <Card classes={{ root: classes.card }}>
        <CardActionArea className={classes.cardActionArea}>
          <Grid container justify="space-between">
            <div className={classes.topDiv}>
              <Grid item xs={6} classes={{ root: classes.hostInfo }}>
                <TMAvatar
                  size="extraSmall"
                  src={hostPicture}
                  alt={hostUsername}
                />
                <Typography
                  variant="body1"
                  classes={{ root: classes.hostUsername }}
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
        </CardActionArea>
      </Card>

      <div className={classes.optionsButtonContainer}>
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
