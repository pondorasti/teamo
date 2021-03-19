import React from "react"
import Dialog from "@material-ui/core/Dialog"
import DialogContent from "@material-ui/core/DialogContent"
import PropTypes from "prop-types"
import { makeStyles, useTheme } from "@material-ui/core/styles"
import { DialogTitle, Typography } from "@material-ui/core"
import { useDispatch, useSelector } from "react-redux"

import TMButton from "../../../atoms/TMButton"
import { Google } from "../../../assets/icons"
import { CouchBuddies } from "../../../assets/images"

import {
  login,
  selectSignInStatus,
} from "../../redux/slices/currentUser/currentUserSlice"

const useStyles = makeStyles(() => ({
  slogan: {
    marginTop: 8,
  },
  illustration: {
    marginBottom: 8,
  },
}))

function LoginDialog({ open, onClose }) {
  const classes = useStyles()
  const theme = useTheme()
  const dispatch = useDispatch()
  const signInStatus = useSelector(selectSignInStatus) === "loading"

  return (
    <Dialog open={open} onClose={onClose} aria-labelledby="login-modal">
      <DialogTitle id="login-modal-title">
        <img
          src={CouchBuddies}
          alt="Five animals playing video games on a couch"
          width="300"
          height="200"
          className={classes.illustration}
        />
        <Typography variant="h4">Teamo</Typography>
        <Typography variant="h5" classes={{ root: classes.slogan }}>
          Good Team, Good Game.
        </Typography>
      </DialogTitle>
      <DialogContent>
        <TMButton
          leadingIcon={<Google />}
          onClick={() => dispatch(login())}
          pending={signInStatus}
          fullWidth
          style={{
            marginBottom: 16,
            color: theme.palette.common.black,
            backgroundColor: theme.palette.text.primary,
          }}
        >
          Continue with Google
        </TMButton>
      </DialogContent>
    </Dialog>
  )
}

LoginDialog.propTypes = {
  /** If `true`, the modal is presented. */
  open: PropTypes.bool.isRequired,

  /** A function that is called when the modal needs to be closed. */
  onClose: PropTypes.func.isRequired,
}

export default LoginDialog
