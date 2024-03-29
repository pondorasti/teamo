import React, { useState, useRef } from "react"
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
  Grid,
} from "@material-ui/core"
import { useDispatch, useSelector } from "react-redux"
import { Person, Description } from "../../../assets/icons"
import { TMAvatar, TMButton } from "../../../atoms"
import {
  selectUpdateStatus,
  selectUsernameError,
  selectDescriptionError,
  updateProfile,
} from "./redux/profileSettingsSlice"
import {
  WavingRacoon,
  WavingLion,
  DumplingProfile,
  LionProfile,
  OctopusProfile,
  RacoonProfile,
  ShroomieProfile,
  TallShroomieProfile,
} from "../../../assets/images"

const useStyles = makeStyles(() => ({
  listIconItem: {
    display: "flex",
    alignSelf: "flex-start",
    marginTop: 7, // WARNING: Hard-coded value.
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
  textField: {
    width: 269,
  },
}))

const templateProfilePictures = [
  DumplingProfile,
  LionProfile,
  OctopusProfile,
  RacoonProfile,
  ShroomieProfile,
  TallShroomieProfile,
]

function ProfileSettingsDialog({ open, onClose }) {
  const classes = useStyles()

  const [username, setUsername] = useState("")
  const [description, setDescription] = useState("")

  // Random Button
  function getRandomImgUrl() {
    return templateProfilePictures[
      Math.floor(Math.random() * templateProfilePictures.length)
    ]
  }

  const [profilePictureUrl, setProfilePictureUrl] = useState(getRandomImgUrl)

  function handleRandomButton() {
    let newProfilePictureUrl
    do {
      newProfilePictureUrl = getRandomImgUrl()
    } while (newProfilePictureUrl === profilePictureUrl)
    setProfilePictureUrl(newProfilePictureUrl)
  }

  // Upload Button
  const inputUploadRef = useRef(null)
  function handleInputUpload() {
    if (inputUploadRef.current.files && inputUploadRef.current.files[0]) {
      const newProfilePictureFile = inputUploadRef.current.files[0]
      const newProfilePictureUrl = URL.createObjectURL(newProfilePictureFile)

      setProfilePictureUrl(newProfilePictureUrl)
    }
  }

  // Form Button
  const dispatch = useDispatch()
  const updateStatus = useSelector(selectUpdateStatus)
  const userNameError = useSelector(selectUsernameError)
  const descriptionError = useSelector(selectDescriptionError)
  function handleFormButton() {
    dispatch(updateProfile({ profilePictureUrl, username, description }))
  }

  return (
    <Dialog open={open} onClose={onClose} aria-labelledby="create-teamo-modal">
      <DialogTitle id="create-teamo-modal-title" classes={{ root: classes.dialogTitle }}>
        <img src={WavingRacoon} alt="Waving raccoon" width="72" height="72" />
        <Typography variant="h4" classes={{ root: classes.titleText }}>
          {/* User Profile */}
          Create profile
        </Typography>
        <img src={WavingLion} alt="Waving lion" width="72" height="72" />
      </DialogTitle>

      <DialogContent>
        <List>
          <ListItem style={{ marginBottom: 24 }}>
            <Grid container wrap="nowrap">
              <Grid item>
                <TMAvatar
                  src={profilePictureUrl}
                  alt="Profile Picture"
                  status="none"
                  size="profileSettings"
                />
              </Grid>

              <Grid container direction="column" wrap="nowrap" style={{ marginLeft: 8 }}>
                <Grid item style={{ width: "100%", marginBottom: 8 }}>
                  <TMButton fullWidth onClick={handleRandomButton}>
                    Random
                  </TMButton>
                </Grid>
                <Grid item style={{ width: "100%" }}>
                  <input
                    type="file"
                    accept=".gif, .png, .jpg, .jpeg"
                    multiple={false}
                    ref={inputUploadRef}
                    onChange={handleInputUpload}
                    style={{ display: "none" }}
                  />
                  <TMButton fullWidth onClick={() => inputUploadRef.current.click()}>
                    Upload
                  </TMButton>
                </Grid>
              </Grid>
            </Grid>
          </ListItem>

          <ListItem>
            <ListItemIcon classes={{ root: classes.listIconItem }}>
              <Person />
            </ListItemIcon>
            <TextField
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              label="Username"
              fullWidth
              error={!!userNameError}
              helperText={userNameError}
              classes={{ root: classes.textField }}
            />
          </ListItem>

          <ListItem>
            <ListItemIcon classes={{ root: classes.listIconItem }}>
              <Description />
            </ListItemIcon>
            <TextField
              value={description}
              onChange={(event) => setDescription(event.target.value)}
              label="Bio"
              rows={2}
              multiline
              fullWidth
              error={!!descriptionError}
              helperText={descriptionError}
              classes={{ root: classes.textField }}
            />
          </ListItem>
        </List>
      </DialogContent>

      <DialogActions>
        <TMButton
          color="primary"
          onClick={handleFormButton}
          pending={updateStatus === "loading"}
        >
          Create
        </TMButton>
      </DialogActions>
    </Dialog>
  )
}

ProfileSettingsDialog.propTypes = {
  /** If `true`, the modal is presented. */
  open: PropTypes.bool.isRequired,

  /** A function that is called when the modal needs to be closed. */
  onClose: PropTypes.func.isRequired,

  // state: PropTypes.oneOf(["create", "update"]),
}

export default ProfileSettingsDialog
