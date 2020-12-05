import React from "react"
import PropTypes from "prop-types"
import { makeStyles } from "@material-ui/core/styles"
import { Dialog, DialogContent, DialogActions, DialogTitle, Typography, List, ListItem, ListItemIcon } from "@material-ui/core"

import TMButton from "../../../atoms/TMButton"
import TMTextField from "../../../atoms/TMTextfield"
import TMAutocomplete from "../../../atoms/TMAutocomplete"

import { Platform, Game, Size, Microphone } from "../../../api/lobby-template/"

import {
  Controller,
  Dpad,
  Mic,
  People,
  Description,
} from "../../../assets/icons"

const useStyles = makeStyles(() => ({
  descriptionIconItem: {
    display: "flex",
    alignSelf: "flex-start",
    marginTop: 7, // WARNING: Hard-coded value.
  },
}))

function CreateTeamoDialog({ open, onClose }) {
  const classes = useStyles()

  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby="create-teamo-modal"
      classes={{ root: classes.dialogBody }}
    >
      <DialogTitle id="create-teamo-modal-title">
        <Typography variant="h4">
          Create Teamo
        </Typography>
      </DialogTitle>

      <DialogContent>
        <List>
          <ListItem>
            <ListItemIcon> <Controller /> </ListItemIcon>
            <TMAutocomplete
              label={Game.label}
              options={Game.options}
              style={{ width: "100%" }}
            />
          </ListItem>

          <ListItem>
            <ListItemIcon> <Dpad /> </ListItemIcon>
            <TMAutocomplete
              label={Platform.label}
              options={Platform.options}
              style={{ width: "100%" }}
            />
          </ListItem>

          <ListItem>
            <ListItemIcon> <Mic /> </ListItemIcon>
            <TMAutocomplete
              label={Microphone.label}
              options={Microphone.options}
              style={{ width: "100%" }}
            />
          </ListItem>

          <ListItem>
            <ListItemIcon> <People /> </ListItemIcon>
            <TMAutocomplete
              label={Size.label}
              options={Size.options}
              style={{ width: "100%" }}
            />
          </ListItem>

          <ListItem> 
            <ListItemIcon classes={{ root: classes.descriptionIconItem }}> <Description /> </ListItemIcon>
            <TMTextField
              label="Description"
              helperText="Max 150 characters"
              rows={3}
              multiline
              fullWidth
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

CreateTeamoDialog.propTypes = {
  /** If `true`, the modal is presented. */
  open: PropTypes.bool.isRequired,

  /** A function that is called when the modal needs to be closed. */
  onClose: PropTypes.func.isRequired,
}

CreateTeamoDialog.defaultProps = {
  open: false,
}

export default CreateTeamoDialog
