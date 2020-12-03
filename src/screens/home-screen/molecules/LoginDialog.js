import React from "react"
import Dialog from "@material-ui/core/Dialog"
import DialogContent from "@material-ui/core/DialogContent"
import PropTypes from "prop-types"
import { makeStyles } from "@material-ui/core/styles"
import { DialogTitle, Typography } from "@material-ui/core"

import TMButton from "../../../atoms/TMButton"
import { Apple, Google } from "../../../assets/icons"
import TMTheme from "../../../atoms/TMTheme"

const useStyles = makeStyles(() => ({
  slogan: {
    // width: "50%",
    marginTop: 16,
  },
  buttonMargin: {
    marginBottom: 16,
  },
}))

function LoginDialog({ open, close }) {
  const classes = useStyles()

  return (
    <Dialog
      open={open}
      onClose={close}
      aria-labelledby="Login-Modal"
      classes={{ root: classes.dialogBody }}
    >
      <DialogTitle id="Login-Modal-Title" disableTypography>
        <Typography variant="h4">Teamo</Typography>
        <Typography variant="h5" classes={{ root: classes.slogan }}>
          Good Team, Good Game.
        </Typography>
      </DialogTitle>
      <DialogContent>
        <TMButton
          leadingIcon={<Google />}
          onClick={close}
          fullWidth
          style={{
            marginBottom: 16,
            color: TMTheme.palette.common.black,
            backgroundColor: TMTheme.palette.text.primary,
          }}
        >
          Continue with Google
        </TMButton>
        <TMButton
          leadingIcon={<Apple />}
          onClick={close}
          fullWidth
          color="primary"
          style={{
            color: TMTheme.palette.common.black,
            backgroundColor: TMTheme.palette.text.primary,
          }}
        >
          Continue with Apple
        </TMButton>
      </DialogContent>
    </Dialog>
  )
}

LoginDialog.propTypes = {
  /** */
  open: PropTypes.bool.isRequired,

  /** */
  close: PropTypes.func.isRequired,
}
LoginDialog.defaultProps = {
  open: false,
}

export default LoginDialog
