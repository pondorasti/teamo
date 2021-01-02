import React from "react"
import PropTypes from "prop-types"
import { makeStyles } from "@material-ui/core/styles"
import {
  Dialog,
  DialogContent,
  DialogActions,
  DialogTitle,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  TextField,
} from "@material-ui/core"

import TMButton from "../../../atoms/TMButton"
import { Person, Description } from "../../../assets/icons"
import { WavingRacoon, WavingLion } from "../../../assets/images"

const useStyles = makeStyles(() => ({
  descriptionIconItem: {
    display: "flex",
    alignSelf: "flex-start",
    marginTop: 7, // WARNING: Hard-coded value.
  },
  illustration: {
    maxWidth: 72,
  },
  dialogTitle: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  titleText: {
    margin: "0 16px",
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
      <DialogTitle id="create-teamo-modal-title" classes={{ root: classes.dialogTitle }}>
        <img src={WavingRacoon} alt="Waving raccoon" className={classes.illustration} />
        <Typography variant="h4" classes={{ root: classes.titleText }}>
          User Profile
        </Typography>
        <img src={WavingLion} alt="Waving lion" className={classes.illustration} />
      </DialogTitle>

      <DialogContent>
        <List>
          <ListItem>
            <ListItemIcon>
              <Person />
            </ListItemIcon>
            <TextField label="Username" fullWidth />
          </ListItem>

          <ListItem>
            <ListItemIcon classes={{ root: classes.descriptionIconItem }}>
              <Description />
            </ListItemIcon>
            <TextField label="Bio" helperText="Max 62 characters" rows={2} multiline fullWidth />
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

export default CreateProfileDialog
