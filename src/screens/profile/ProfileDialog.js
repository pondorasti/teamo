import React from "react"
import PropTypes from "prop-types"
import { makeStyles, useTheme } from "@material-ui/core/styles"
import { Dialog, DialogContent, Typography, Grid } from "@material-ui/core"
import { TMButton, TMAvatar } from "../../atoms"
import ProfileGameCard from "./ProfileGameCard"

const useStyles = makeStyles(theme => ({
  headerGridContainer: {
    overflow: "visible",
  },
  userInfoGridContainer: {
    width: "60%",
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
  },
  bioText: {
    margin: "4px 0px",
  },
  gamesGridContainer: {
    overflow: "visible",
    paddingTop: 16,
    backgroundColor: theme.palette.grey[700],
  },
}))

function ProfileDialog({
  open,
  onClose,
  username,
  status,
  bio,
  avatarUrl,
  gamesPlayed,
}) {
  const classes = useStyles()
  const theme = useTheme()

  const listGames = gamesPlayed.map((game, index) => (
    <Grid item xs={12} sm={6} md={4} key={index}>
      <ProfileGameCard imageUrl={game.imageUrl} title={game.title} />
    </Grid>
  ))

  return (
    <Dialog open={open} onClose={onClose} aria-labelledby="profile-modal">
      <DialogContent classes={{ root: classes.headerGridContainer }}>
        <Grid container>
          <Grid
            container
            item
            wrap="nowrap"
            classes={{ root: classes.paddingContainer }}
          >
            <TMAvatar
              backgroundColor={theme.palette.grey[800]}
              src={avatarUrl}
              alt={username}
              status={status}
              size="large"
            />
            <Grid
              container
              item
              direction="row"
              justify="space-between"
              style={{ marginLeft: 16 }}
            >
              <Grid item classes={{ root: classes.userInfoGridContainer }}>
                <Typography variant="h2">{username}</Typography>
                <Typography variant="body1" classes={{ root: classes.bioText }}>
                  {bio}
                </Typography>
              </Grid>
              <Grid item>
                <TMButton onClick={onClose}>Add Friend</TMButton>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </DialogContent>

      <DialogContent classes={{ root: classes.gamesGridContainer }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h5" align="center">
              Games
            </Typography>
          </Grid>
          {listGames}
        </Grid>
      </DialogContent>
    </Dialog>
  )
}

ProfileDialog.propTypes = {
  /** If `true`, the modal is presented. */
  open: PropTypes.bool.isRequired,

  /** A function that is called when the modal needs to be closed. */
  onClose: PropTypes.func.isRequired,

  username: PropTypes.string.isRequired,

  /** An optional badge for the avatar */
  status: PropTypes.oneOf(["none", "online"]).isRequired,

  bio: PropTypes.string.isRequired,
  avatarUrl: PropTypes.any.isRequired,
  gamesPlayed: PropTypes.any.isRequired,
}

export default ProfileDialog
