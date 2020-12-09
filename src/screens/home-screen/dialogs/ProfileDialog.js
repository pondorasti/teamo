import React from "react"
import Dialog from "@material-ui/core/Dialog"
// import DialogContent from "@material-ui/core/DialogContent"
import PropTypes from "prop-types"
import { makeStyles } from "@material-ui/core/styles"
import { DialogContent, Typography } from "@material-ui/core"
import { Grid } from "@material-ui/core"

import TMButton from "../../../atoms/TMButton"
import TMAvatar from "../../../atoms/TMAvatar"
import ProfileGameCard from "../../../atoms/ProfileGameCard"

const useStyles = makeStyles(theme => ({
  dialogContainer: {
    height: "100%",
    overflow: "hidden",
  },
  paddingContainer: {
    padding: 24,
  },
  paper: {
    padding: 0,
  },
  userImgDiv: {
    marginBottom: 24,
  },
  userInfoContainer: {
    marginLeft: 16,
  },
  userNameAddFriend: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: 34,
    width: "100%",
  },
  bio: {
    width: "60%",
  },
  gamesContainer: {
    padding: "8px 24px 24px",
    backgroundColor: theme.palette.grey[700],
  },
}))

function ProfileDialog({
  open,
  onClose,
  backgroundColor,
  userName,
  status,
  bio,
  profileImg,
  gamesPlayed,
}) {
  const classes = useStyles()

  const listGames = gamesPlayed.map(game => (
    <Grid item xs={4} key={game.gameTitle}>
      <ProfileGameCard gameImg={game.gameImg} gameTitle={game.gameTitle} />
    </Grid>
  ))

  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby="profile-modal"
      classes={{ paper: classes.paper }}
    >
      <DialogContent classes={{ root: classes.dialogContainer }}>
        <Grid container>
          <Grid
            container
            item
            wrap="nowrap"
            className={classes.userImgDiv}
            classes={{ root: classes.paddingContainer }}
          >
            <TMAvatar
              backgroundColor={backgroundColor}
              src={profileImg}
              alt={userName}
              status={status}
              size="large"
            />
            <Grid
              container
              item
              direction="column"
              classes={{ root: classes.userInfoContainer }}
            >
              <Grid item classes={{ root: classes.userNameAddFriend }}>
                <Typography variant="h2">ShiroTheCat</Typography>
                <TMButton onClick={onClose} color="primary">
                  Add Friend
                </TMButton>
              </Grid>
              <Grid item classes={{ root: classes.bio }}>
                <Typography variant="body1">{bio}</Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            container
            spacing={2}
            classes={{ root: classes.gamesContainer }}
          >
            <Grid item xs={12}>
              <Typography variant="h5" align="center">
                Games
              </Typography>
            </Grid>
            {listGames}
          </Grid>
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
  userName: PropTypes.any,
  status: PropTypes.any,
  bio: PropTypes.any,
  profileImg: PropTypes.any,
  gamesPlayed: PropTypes.any,
  backgroundColor: PropTypes.any,
}

ProfileDialog.defaultProps = {
  open: false,
}

export default ProfileDialog
