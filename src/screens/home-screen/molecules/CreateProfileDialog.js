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
import { Person, Description } from "../../../assets/icons"

const useStyles = makeStyles(() => ({
  header: {
    marginBottom: "-6px",
  },
  listInput: {
    padding: 0,
    marginTop: 6,
  },

  descriptionIcon: {
    marginTop: "-44px",
  },
}))

function CreateProfileDialog({ open, onClose }) {
  const classes = useStyles()

  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby="create-teamo-modal"
      classes={{ root: classes.dialogBody }}
    >
      <DialogTitle id="create-teamo-modal-title" disableTypography>
        <Typography variant="h4" classes={{ root: classes.header }}>
          User Profile
        </Typography>
      </DialogTitle>

      <DialogContent>
        <List disablePadding>
          <ListItem classes={{ root: classes.listInput }}>
            <ListItemIcon>
              <Person />
            </ListItemIcon>
            <TMTextField label="Username" />
          </ListItem>

          <ListItem classes={{ root: classes.listInput }}>
            <ListItemIcon>
              <Description className={classes.descriptionIcon} />
            </ListItemIcon>
            <TMTextField
              label="Bio"
              helperText="Max 62 characters"
              rows={2}
              multiline
              fullWidth
              style={{ marginBottom: 24 }}
            />
          </ListItem>
        </List>
      </DialogContent>

      <DialogActions>
        <TMButton onClick={onClose} color="primary">
          Create
        </TMButton>
      </DialogActions>
    </Dialog>
  )
}

CreateProfileDialog.propTypes = {
  /** If `true`, the modal is presented. */
  open: PropTypes.bool.isRequired,

  /** A function that is called when the modal needs to be closed. */
  onClose: PropTypes.func.isRequired,
}

CreateProfileDialog.defaultProps = {
  open: false,
}

export default CreateProfileDialog
