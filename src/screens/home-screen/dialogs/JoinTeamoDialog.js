import React, { memo } from "react"
import PropTypes from "prop-types"
import { makeStyles } from "@material-ui/core/styles"
import {
  Dialog,
  DialogContent,
  DialogActions,
  DialogTitle,
  Typography,
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
  illustration: {
    maxWidth: 176,
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

function Illustration() {
  const randomImg = imgArray[Math.floor(Math.random() * imgArray.length)]
  const classes = useStyles()

  return (
    <img
      src={randomImg}
      className={classes.illustration}
      // style={{ transform: `scaleX(${isImgFlipped ? -1 : 1})` }}
    />
  )
}

function JoinTeamoDialog({ open, onClose }) {
  const classes = useStyles()
  const MemoizedIllustration = memo(Illustration)

  // const [randomImg, setRandomImg] = useState("null")
  // useEffect(() => {
  //   setRandomImg(imgArray[Math.floor(Math.random() * imgArray.length)])
  // }, [])

  // const isImgFlipped = Math.random() < 0.5

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
        <MemoizedIllustration />
      </DialogTitle>
      <DialogContent>
        <ListItem>
          <ListItemIcon>
            <Controller />
          </ListItemIcon>
          <TextField label="Gamer Tag" />
        </ListItem>
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
