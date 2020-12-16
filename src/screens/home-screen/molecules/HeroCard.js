import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Grid, Card, CardActionArea, Typography, Fade } from "@material-ui/core"
import PropTypes from "prop-types"

import HeroCardFooter from "./HeroCardFooter"
import LobbyOptionsButton from "./LobbyOptionsButton"
import TMAvatar from "../../../atoms/TMAvatar"

const useStyles = makeStyles(theme => ({
  cardContainer: {
    position: "relative",
  },
  card: {
    height: 200,

    borderRadius: 16,
    overflow: "visible",
    backgroundSize: "cover",
    backgroundPosition: "center",

    // fixes safari overflow bug
    WebkitMaskImage: "-webkit-radial-gradient(white, black)",
    "&:hover + $optionsButtonContainer": {
      opacity: 1,
      //pointerEvents needed here for options to display
      pointerEvents: "auto",
    },
  },
  cardGrid: {
    position: "relative",
    height: "100%",

    width: "50%",
    left: "50%",

    borderRadius: "16px 0 0 16px",
    padding: 16,
    backgroundColor: theme.palette.grey[700],
    
    boxShadow: "0 0 16px 8px #00000099"
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
  gameImg,
  description,
  platform,
  usesMic,
  sizeStatus,
  isContentHidden,
}) {
  const classes = useStyles()

  return (
    <div className={classes.cardContainer} title={gameName}>
      <Card
        classes={{ root: classes.card }}
        style={{ backgroundImage: `url(${gameImg})` }}
      >
        <Fade in={isContentHidden}>
          <CardActionArea style={{ height: "100%" }}>
            <Grid
              container
              justify="space-between"
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
              <Grid item xs={12}>
                <HeroCardFooter platform={platform} usesMic={usesMic} sizeStatus={sizeStatus} />
              </Grid>
            </Grid>
          </CardActionArea>
        </Fade>
      </Card>

      {isContentHidden && <LobbyOptionsButton className={classes.optionsButtonContainer} />}
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

  /** The `src` attribute for the game logo. */
  gameImg: PropTypes.string.isRequired,

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
