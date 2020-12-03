import React from "react"
import Dialog from "@material-ui/core/Dialog"
import DialogContent from "@material-ui/core/DialogContent"
import PropTypes from "prop-types"
import { makeStyles } from "@material-ui/core/styles"
import { DialogTitle, Typography } from "@material-ui/core"

import TMButton from "../../../atoms/TMButton"
import Apple from "../../../assets/icons/Apple"
import Google from "../../../assets/icons/Google"

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
      aria-labelledby="form-dialog-title"
      classes={{ root: classes.dialogBody }}
    >
      <DialogTitle id="form-dialog-title" disableTypography>
        Teamo
      </DialogTitle>
      <DialogContent>
        <Typography variant="h5" classes={{ root: classes.slogan }}>
          Good Team, Good Game.
        </Typography>
      </DialogContent>

      <TMButton
        leadingIcon={<Google />}
        onClick={close}
        style={{
          marginBottom: 16,
          color: "#000000",
          backgroundColor: "#FFFFFF",
        }}
      >
        Continue with Google
      </TMButton>
      <TMButton
        leadingIcon={<Apple />}
        onClick={close}
        color="primary"
        style={{ color: "#000000", backgroundColor: "#FFFFFF" }}
      >
        Continue with Apple
      </TMButton>
    </Dialog>
  )
}

LoginDialog.propTypes = {
  open: PropTypes.bool,
  close: PropTypes.func,
}
LoginDialog.defaultProps = {
  open: false,
}

export default LoginDialog
