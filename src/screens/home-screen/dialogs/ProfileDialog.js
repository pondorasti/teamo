import React from "react"
import Dialog from "@material-ui/core/Dialog"
import DialogContent from "@material-ui/core/DialogContent"
import DialogActions from "@material-ui/core/DialogActions"
import PropTypes from "prop-types"
import { makeStyles } from "@material-ui/core/styles"
import { DialogTitle, Typography } from "@material-ui/core"

import TMButton from "../../../atoms/TMButton"
import TMAvatar from "../../../atoms/TMAvatar"
import ProfileGameCard from "../../../atoms/ProfileGameCard"

const useStyles = makeStyles({
  dialog: {
    background: "linear-gradient(to bottom, #1E1E1E 50%, #2F2F30 50%)",
  },
  userImgDiv: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 40,
  },
  userTextInfo: {
    marginLeft: 16,
  },
  title: {
    alignItems: "flex-start",
  },
  bio: {
    marginTop: 8,
    width: "80%",
  },
  actions: {
    alignItems: "flex-start",
  },
  gamesPlayedDiv: {
    alignItems: "center",
  },
  gameCardDiv: {
    marginTop: 16,
    display: "flex",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
})

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
    <ProfileGameCard
      gameImg={game.gameImg}
      gameTitle={game.gameTitle}
      key={game.gameTitle}
    />
  ))

  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby="profile-modal"
      classes={{ paper: classes.dialog }}
    >
      <div className={classes.userImgDiv}>
        <TMAvatar
          backgroundColor={backgroundColor}
          src={profileImg}
          alt={userName}
          status={status}
          size="large"
        />
        <div className={classes.userTextInfo}>
          <DialogTitle
            id="profile-modal-title"
            disableTypography
            classes={{ root: classes.title }}
          >
            <Typography variant="h2">ShiroTheCat</Typography>
            <Typography variant="body1" classes={{ root: classes.bio }}>
              {bio}
            </Typography>
          </DialogTitle>
        </div>
        <DialogActions classes={{ root: classes.actions }}>
          <TMButton onClick={onClose} color="primary">
            Add Friend
          </TMButton>
        </DialogActions>
      </div>

      <DialogContent classes={{ root: classes.gamesPlayedDiv }}>
        <Typography variant="h5">Games</Typography>
        <div className={classes.gameCardDiv}>{listGames}</div>
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
