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

import TMButton from "../../../atoms/TMButton"
import { Person, Description } from "../../../assets/icons"
import { TMAvatar } from "../../../atoms"

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

const imgArray = [
  DumplingProfile,
  LionProfile,
  OctopusProfile,
  RacoonProfile,
  ShroomieProfile,
  TallShroomieProfile,
]

function CreateProfileDialog({ open, onClose }) {
  const classes = useStyles()

  // Random Button
  function getRandomImg() {
    return imgArray[Math.floor(Math.random() * imgArray.length)]
  }
  const [profileImg, setProfileImg] = useState(getRandomImg)
  function handleRandomButton() {
    let newProfileImg
    do {
      newProfileImg = getRandomImg()
    } while (newProfileImg === profileImg)
    setProfileImg(newProfileImg)
  }

  // Upload Button
  const inputUploadRef = useRef(null)
  function handleInputUpload() {
    if (inputUploadRef.current.files && inputUploadRef.current.files[0]) {
      const newProfileImg = URL.createObjectURL(inputUploadRef.current.files[0])
      setProfileImg(newProfileImg)
    }
  }

  const [didAgreeTerms, setDidAgreeTerms] = useState(false)

  return (
    <Dialog open={open} onClose={onClose} aria-labelledby="create-teamo-modal">
      <DialogTitle id="create-teamo-modal-title" classes={{ root: classes.dialogTitle }}>
        <img src={WavingRacoon} alt="Waving raccoon" className={classes.illustration} />
        <Typography variant="h4" classes={{ root: classes.titleText }}>
          {/* User Profile */}
          Create profile
        </Typography>
        <img src={WavingLion} alt="Waving lion" className={classes.illustration} />
      </DialogTitle>

      <DialogContent>
        <List>
          <ListItem>
            <Grid container wrap="nowrap">
              <Grid item>
                <TMAvatar
                  src={profileImg}
                  alt="Profile Picture"
                  status="none"
                  size="profileSettings"
                />
              </Grid>

              <Grid container direction="column" wrap="nowrap" style={{ marginLeft: 16 }}>
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
            <ListItemIcon>
              <Person />
            </ListItemIcon>
            <TextField label="Username" fullWidth />
          </ListItem>

          <ListItem>
            <ListItemIcon classes={{ root: classes.descriptionIconItem }}>
              <Description />
            </ListItemIcon>
            <TextField
              label="Bio"
              helperText="Max 62 characters"
              rows={2}
              multiline
              fullWidth
            />
          </ListItem>
        </List>
      </DialogContent>

      <DialogActions>
        <TMButton onClick={() => setDidAgreeTerms(!didAgreeTerms)} color="primary">
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

  // state: PropTypes.oneOf(["create", "update"]),
}

export default CreateProfileDialog
