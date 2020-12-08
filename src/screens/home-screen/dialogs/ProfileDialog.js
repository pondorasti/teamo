import React from "react"
import Dialog from "@material-ui/core/Dialog"
import DialogContent from "@material-ui/core/DialogContent"
import DialogActions from "@material-ui/core/DialogActions"
import PropTypes from "prop-types"
import { makeStyles } from "@material-ui/core/styles"
import { DialogTitle, Typography } from "@material-ui/core"

import TMButton from "../../../atoms/TMButton"
import TMAvatar from "../../../atoms/TMAvatar"

const useStyles = makeStyles(() => ({
  userImgDiv: {
    position: "absolute",
  },
}))

function ProfileDialog({
  open,
  onClose,
  userName,
  status,
  bio,
  profileImg,
  gamesPlayed,
}) {
  const classes = useStyles()

  return (
    <Dialog open={open} onClose={onClose} aria-labelledby="profile-modal">
      <DialogContent>
        <TMAvatar
          src={profileImg}
          alt={userName}
          status={status}
          size="large"
          classes={{ root: classes.userImgDiv }}
        />
        <DialogTitle id="profile-modal-title" disableTypography>
          <Typography variant="h2">ShiroTheCat</Typography>
        </DialogTitle>
        <Typography>{bio}</Typography>
        <DialogActions>
          <TMButton onClick={onClose} color="primary">
            Add Friend
          </TMButton>
        </DialogActions>
        {gamesPlayed}
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
}

ProfileDialog.defaultProps = {
  open: false,
}

export default ProfileDialog
