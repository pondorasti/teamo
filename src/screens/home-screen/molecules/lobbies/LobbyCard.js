import React, { useState } from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Grid, Card, CardActionArea, Typography, Skeleton } from "@material-ui/core"
import PropTypes from "prop-types"

import LobbyCardFooter from "../LobbyCardFooter"
import LobbyOptionsButton from "../LobbyOptionsButton"
import TMAvatar from "../../../../atoms/TMAvatar"
import JoinLobbyDialog from "../../dialogs/JoinLobbyDialog"

const useStyles = makeStyles((theme) => ({
  cardContainer: { position: "relative" },
  card: {
    borderRadius: 16,
    border: `1px solid ${theme.palette.grey[500]}`,

    // fixes safari overflow bug
    WebkitMaskImage: "-webkit-radial-gradient(white, black)",

    // don't accidently trigger options menu by hovering over the border
    pointerEvents: "fill",
    backgroundColor: theme.palette.grey[700],
    "&:hover + $optionsButtonContainer": {
      opacity: 1,
      pointerEvents: "auto",
    },
  },
  cardActionArea: { padding: 12 },
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
  gameLogo: {
    objectFit: "cover",
  },
  cardMiddleSection: {
    marginBottom: 16,
    minHeight: theme.typography.h5.tripleLineHeight,
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

function LobbyCard({
  hostUsername,
  hostPicture,
  gameName,
  gameLogoUrl,
  description,
  platform,
  usesMic,
  sizeStatus,
  isLoading,
}) {
  const classes = useStyles()
  const [showJoinLobby, setShowJoinLobby] = useState(false)

  const cardContent = (
    <>
      <CardActionArea
        classes={{ root: classes.cardActionArea }}
        onClick={() => setShowJoinLobby(true)}
      >
        <Grid container justifyContent="space-between">
          <div className={classes.topDiv}>
            <Grid item xs={6} classes={{ root: classes.hostInfo }}>
              <TMAvatar size="extraSmall" src={hostPicture} alt={hostUsername} />
              <Typography variant="body1" classes={{ root: classes.hostUsername }}>
                {hostUsername}
              </Typography>
            </Grid>
            <Grid item xs={6} classes={{ root: classes.gameImgGrid }}>
              <img
                width="84"
                height="24"
                className={classes.gameLogo}
                src={gameLogoUrl}
                alt={gameName}
              />
            </Grid>
          </div>
          <Grid item xs={12} classes={{ root: classes.cardMiddleSection }}>
            <Typography variant="h5">{description}</Typography>
          </Grid>

          <LobbyCardFooter
            platform={platform}
            usesMic={usesMic}
            sizeStatus={sizeStatus}
          />
        </Grid>
      </CardActionArea>
    </>
  )
  const skeletonCardContent = (
    <>
      <Skeleton variant="rectangular" style={{ pointerEvents: "none" }}>
        {cardContent}
      </Skeleton>
    </>
  )

  return (
    <div className={classes.cardContainer}>
      <Card classes={{ root: classes.card }}>
        {isLoading ? skeletonCardContent : cardContent}
      </Card>

      <JoinLobbyDialog open={showJoinLobby} onClose={() => setShowJoinLobby(false)} />
      {!isLoading && <LobbyOptionsButton className={classes.optionsButtonContainer} />}
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
  gameLogoUrl: PropTypes.string.isRequired,

  /** The description of lobby. */
  description: PropTypes.string.isRequired,

  /** The game platform of the lobby. */
  platform: PropTypes.string.isRequired,

  /** The mic status for the lobby. */
  usesMic: PropTypes.bool.isRequired,

  /** The size status of the lobby (ex: 8/10). */
  sizeStatus: PropTypes.string.isRequired,

  /** If `true` the view will be shown as an animated skeleton. */
  isLoading: PropTypes.bool.isRequired,
}

export default LobbyCard
