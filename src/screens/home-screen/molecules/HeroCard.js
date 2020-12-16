import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Grid, Card, CardActionArea, Typography } from "@material-ui/core"
import PropTypes from "prop-types"

import HeroCardFooter from "./HeroCardFooter"
import LobbyOptionsButton from "./LobbyOptionsButton"
import TMAvatar from "../../../atoms/TMAvatar"

const useStyles = makeStyles(theme => ({
  cardContainer: {
    position: "relative",
    width: 400,
  },
  card: {
    borderRadius: 16,

    // fixes safari overflow bug
    WebkitMaskImage: "-webkit-radial-gradient(white, black)",
    "&:hover + $optionsButtonContainer": {
      opacity: 1,
      //pointerEvents needed here for options to display
      pointerEvents: "auto",
    },
  },
  gameImg: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    position: "absolute",
    borderRadius: "16px 40px 40px 16px",
  },
  cardContent: {
  },
  cardGrid: {
    position: "relative",
    height: 200,
    width: "50%",
    left: "50%",

    borderRadius: 16,
    padding: 16,
    backgroundColor: theme.palette.grey[700],
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
}) {
  const classes = useStyles()

  return (
    <div className={classes.cardContainer}>
      <Card classes={{ root: classes.card }}>
        <CardActionArea>
          <img className={classes.gameImg} src={gameImg} alt={gameName} />

          {true &&
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
          }
        </CardActionArea>
      </Card>

      <LobbyOptionsButton className={classes.optionsButtonContainer} />
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
}

export default HeroCard
