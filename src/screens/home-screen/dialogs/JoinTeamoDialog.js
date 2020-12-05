import React from "react"
import PropTypes from "prop-types"
import { makeStyles } from "@material-ui/core/styles"
import { Dialog, DialogContent, DialogActions, DialogTitle, Typography, ListItem, ListItemIcon } from "@material-ui/core"

import TMButton from "../../../atoms/TMButton"
import TMTextField from "../../../atoms/TMTextfield"
import { Controller } from "../../../assets/icons"

const useStyles = makeStyles(() => ({
  subtitleSpacing: {
    marginTop: 8,
  },
}))

function JoinTeamoDialog({ open, onClose }) {
  const classes = useStyles()

  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby="join-teamo-modal"
      classes={{ root: classes.dialogBody }}
    >
      <DialogTitle id="join-teamo-modal-title">
        <Typography variant="h4">Join Teamo</Typography>
        <Typography variant="body1" classes={{ root: classes.subtitleSpacing }}>
          What is your Gamer Tag?
        </Typography>
      </DialogTitle>

      <DialogContent>
        <ListItem>
          <ListItemIcon> <Controller /> </ListItemIcon>
          <TMTextField label="Gamer Tag" />
        </ListItem>
      </DialogContent>

      <DialogActions>
        <TMButton onClick={onClose} fullWidth variant="outlined">
          Cancel
        </TMButton>
        <TMButton
          onClick={onClose}
          fullWidth
          color="primary"
          style={{ marginLeft: 24 }}
        >
          Join
        </TMButton>
      </DialogActions>
    </Dialog>
  )
}

JoinTeamoDialog.propTypes = {
  /** If `true`, the modal is presented. */
  open: PropTypes.bool.isRequired,

  /** A function that is called when the modal needs to be closed. */
  onClose: PropTypes.func.isRequired,
}

JoinTeamoDialog.defaultProps = {
  open: false,
}

export default JoinTeamoDialog
