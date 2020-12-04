import React from "react"
import Dialog from "@material-ui/core/Dialog"
import DialogContent from "@material-ui/core/DialogContent"
import DialogActions from "@material-ui/core/DialogActions"
import PropTypes from "prop-types"
import { makeStyles } from "@material-ui/core/styles"
import { DialogTitle, Typography } from "@material-ui/core"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"

import TMButton from "../../../atoms/TMButton"
import TMTextField from "../../../atoms/TMTextfield"
import { Controller } from "../../../assets/icons"
// import TMTheme from "../../../atoms/TMTheme"

const useStyles = makeStyles(() => ({
  middleContent: {
    marginTop: 8,
  },
  buttonMargin: {
    marginBottom: 16,
  },
  listTextField: {
    padding: 0,
  },
  iconStyle: {
    margin: 0,
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
      <DialogTitle id="join-teamo-modal-title" disableTypography>
        <Typography variant="h4">Join Teamo</Typography>
        <Typography variant="body1" classes={{ root: classes.middleContent }}>
          What is your Gamer Tag?
        </Typography>
      </DialogTitle>

      <DialogContent>
        <List disablePadding>
          <ListItem classes={{ root: classes.listTextField }}>
            <ListItemIcon>
              <Controller classes={{ root: classes.iconStyle }} />
            </ListItemIcon>
            <TMTextField label="Gamer Tag" />
          </ListItem>
        </List>
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
