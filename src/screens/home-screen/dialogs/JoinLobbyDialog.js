import React, { useState } from "react"
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
import { Controller } from "../../../assets/icons"
import {
  Shroomie,
  StandingDumpling,
  StandingLion,
  StandingOcto,
  StandingRacoon,
  TallShroomie,
} from "../../../assets/images"

const useStyles = makeStyles(() => ({
  subtitleSpacing: {
    marginTop: 8,
  },
}))

const imgArray = [
  Shroomie,
  StandingDumpling,
  StandingLion,
  StandingOcto,
  StandingRacoon,
  TallShroomie,
]

function JoinLobbyDialog({ open, onClose }) {
  const classes = useStyles()

  const [randomImg, setRandomImg] = useState(null)
  const [isImgFlipped, setImgFlipped] = useState(false)
  const [isLoaded, setLoaded] = useState(false)

  function getRandomImg() {
    return imgArray[Math.floor(Math.random() * imgArray.length)]
  }

  function handleImgRefresh() {
    setRandomImg(getRandomImg())
    setImgFlipped(Math.random() < 0.5)
  }

  if (open && !isLoaded) {
    handleImgRefresh()
    setLoaded(true)
  } else if (!open && isLoaded) {
    setLoaded(false)
  }

  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby="join-teamo-modal"
      classes={{ root: classes.dialogBody }}
    >
      <DialogTitle id="join-teamo-modal-title">
        <div>
          <Typography variant="h4">Join Teamo</Typography>
        </div>
        <Typography variant="body1" classes={{ root: classes.subtitleSpacing }}>
          What is your Gamer Tag?
        </Typography>
        <img
          src={randomImg}
          alt="Random animal standing"
          width="224"
          height="176"
          style={{ transform: `scaleX(${isImgFlipped ? -1 : 1})` }}
        />
      </DialogTitle>
      <DialogContent>
        <List>
          <ListItem>
            <ListItemIcon>
              <Controller />
            </ListItemIcon>
            <TextField label="Gamer Tag" />
          </ListItem>
        </List>
      </DialogContent>

      <DialogActions>
        <TMButton onClick={onClose} fullWidth variant="outlined">
          Cancel
        </TMButton>
        <TMButton onClick={onClose} fullWidth color="primary" style={{ marginLeft: 24 }}>
          Join
        </TMButton>
      </DialogActions>
    </Dialog>
  )
}

JoinLobbyDialog.propTypes = {
  /** If `true`, the modal is presented. */
  open: PropTypes.bool.isRequired,

  /** A function that is called when the modal needs to be closed. */
  onClose: PropTypes.func.isRequired,
}

export default JoinLobbyDialog
