import React from "react"
import { makeStyles, useTheme } from "@material-ui/core/styles"
import { Grid, Card, CardActionArea, Typography, Fade } from "@material-ui/core"
import PropTypes from "prop-types"

import LobbyCardFooter from "./LobbyCardFooter"
import LobbyOptionsButton from "./LobbyOptionsButton"
import TMAvatar from "../../../atoms/TMAvatar"

const height = 200
const width = 400
const smallWidth = 300

const useStyles = makeStyles((theme) => ({
  cardContainer: {
    position: "relative",
    width,
    height,
    [theme.breakpoints.down("md")]: {
      maxWidth: smallWidth,
    },

    // Pure Wizardry
    // Source: https://stackoverflow.com/a/41059954/7897036
    marginLeft: "50%",
    transform: "translateX(-50%)",
  },
  card: {
    height,

    borderRadius: 16,
    overflow: "visible",
    backgroundSize: "cover",
    backgroundPosition: "center",

    // fixes safari overflow bug
    WebkitMaskImage: "-webkit-radial-gradient(white, black)",
    "&:hover + $optionsButtonContainer": {
      opacity: 1,
      // pointerEvents needed here for options to display
      pointerEvents: "auto",
    },
  },
  cardGrid: {
    position: "relative",
    height: "100%",

    width: "50%",
    left: "50%",
    [theme.breakpoints.down("md")]: {
      width: "60%",
      left: "40%",
    },

    borderRadius: "16px 0 0 16px",
    padding: 16,
    backgroundColor: theme.palette.grey[700],

    boxShadow: "0 0 16px 8px #00000099",
  },
  hostInfo: {
    display: "flex",
    alignItems: "center",
  },
  hostUsername: {
    color: theme.palette.text.secondary,
    marginLeft: 4,
  },
  optionsButtonContainer: {}, // decoy class used for referencing
}))

function HeroCard({
  hostUsername,
  hostPicture,
  gameName,
  gameBannerUrl,
  description,
  platform,
  usesMic,
  sizeStatus,
  isContentHidden,
}) {
  const classes = useStyles()
  const theme = useTheme()

  return (
    <div className={classes.cardContainer} title={gameName}>
      <Card
        classes={{ root: classes.card }}
        style={{
          backgroundImage: `url(${gameBannerUrl})`,
          filter: `brightness(${!isContentHidden ? "100%" : "35%"})`,
          transition: `all ${theme.transitions.duration.carousel}ms ease`,
        }}
      >
        <Fade in={!isContentHidden} timeout={theme.transitions.duration.carousel}>
          <CardActionArea style={{ height: "100%" }}>
            <Grid
              container
              justifyContent="space-between"
              alignContent="space-between"
              classes={{ root: classes.cardGrid }}
            >
              <Grid item xs={12} classes={{ root: classes.hostInfo }}>
                <TMAvatar size="extraSmall" src={hostPicture} alt={hostUsername} />
                <Typography variant="body1" classes={{ root: classes.hostUsername }}>
                  {hostUsername}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h5">{description}</Typography>
              </Grid>

              <LobbyCardFooter
                platform={platform}
                usesMic={usesMic}
                sizeStatus={sizeStatus}
                isCompact
              />
            </Grid>
          </CardActionArea>
        </Fade>
      </Card>

      {!isContentHidden && (
        <LobbyOptionsButton className={classes.optionsButtonContainer} />
      )}
    </div>
  )
}

HeroCard.propTypes = {
  /** The username of the lobby host. */
  hostUsername: PropTypes.string.isRequired,

  /** The `src` attribute for the profile picture of the lobby host. */
  hostPicture: PropTypes.string.isRequired,

  /** The name of game. */
  gameName: PropTypes.string.isRequired,

  /** The `src` attribute for the game banner. */
  gameBannerUrl: PropTypes.string.isRequired,

  /** The description of lobby. */
  description: PropTypes.string.isRequired,

  /** The game platform of the lobby. */
  platform: PropTypes.string.isRequired,

  /** The mic status for the lobby. */
  usesMic: PropTypes.bool.isRequired,

  /** The size status of the lobby. */
  sizeStatus: PropTypes.string.isRequired,

  /** Hides or shows the lobby content. */
  isContentHidden: PropTypes.bool.isRequired,
}

export default HeroCard
