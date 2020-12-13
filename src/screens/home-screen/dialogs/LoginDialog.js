import React from "react"
import Dialog from "@material-ui/core/Dialog"
import DialogContent from "@material-ui/core/DialogContent"
import PropTypes from "prop-types"
import { makeStyles, useTheme } from "@material-ui/core/styles"
import { DialogTitle, Typography } from "@material-ui/core"

import TMButton from "../../../atoms/TMButton"
import { Apple, Google } from "../../../assets/icons"
import couchBuddies from "../../../assets/images/CouchBuddies.png"

const useStyles = makeStyles(() => ({
  slogan: {
    marginTop: 8,
  },
  illustration: {
    maxWidth: 300,
    marginBottom: 8,
  },
}))

function LoginDialog({ open, onClose }) {
  const classes = useStyles()
  const theme = useTheme()

  return (
    <Dialog open={open} onClose={onClose} aria-labelledby="login-modal">
      <DialogTitle id="login-modal-title">
        <img src={couchBuddies} className={classes.illustration} />
        <Typography variant="h4">Teamo</Typography>
        <Typography variant="h5" classes={{ root: classes.slogan }}>
          Good Team, Good Game.
        </Typography>
      </DialogTitle>
      <DialogContent>
        <TMButton
          leadingIcon={<Google />}
          onClick={onClose}
          fullWidth
          style={{
            marginBottom: 16,
            color: theme.palette.common.black,
            backgroundColor: theme.palette.text.primary,
          }}
        >
          Continue with Google
        </TMButton>
        <TMButton
          leadingIcon={<Apple />}
          onClick={onClose}
          fullWidth
          style={{
            color: theme.palette.common.black,
            backgroundColor: theme.palette.text.primary,
          }}
        >
          Continue with Apple
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

LoginDialog.defaultProps = {
  open: false,
}

export default LoginDialog
