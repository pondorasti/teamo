import React, { useState } from "react"
import PropTypes from "prop-types"
import { makeStyles } from "@material-ui/core/styles"
import Autocomplete from "@material-ui/core/Autocomplete"
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

import { useSelector, useDispatch } from "react-redux"

import TMButton from "../../../../atoms/TMButton"

import { Platform, Game, Size, Microphone } from "../../../../api/lobby-template"
import { Controller, Dpad, Mic, People, Description } from "../../../../assets/icons"
import { CouchBuddies } from "../../../../assets/images"

import {
  selectAllGames,
  selectGameByName,
} from "../../../../redux/slices/games/gamesSlice"
import { selectStatus, addNewLobby } from "./redux/createLobbySlice"

const useStyles = makeStyles(() => ({
  descriptionIconItem: {
    display: "flex",
    alignSelf: "flex-start",
    marginTop: 7, // WARNING: Hard-coded value.
  },
  illustration: {
    maxWidth: 300,
    marginBottom: 8,
  },
}))

function CreateLobbyDialog({ open, onClose }) {
  const classes = useStyles()

  const games = useSelector(selectAllGames)
  const [gameName, setGameName] = useState(null)
  const [platform, setPlatform] = useState(null)
  const [microphone, setMicrophone] = useState(null)
  const [size, setSize] = useState(null)
  const [description, setDescription] = useState("")

  const dispatch = useDispatch()
  const game = useSelector((state) => selectGameByName(state, gameName))
  const pending = useSelector(selectStatus) === "loading"

  return (
    <Dialog open={open} onClose={onClose} aria-labelledby="create-teamo-modal">
      <DialogTitle id="create-teamo-modal-title">
        <img
          src={CouchBuddies}
          alt="Five animals playing video games on a couch"
          className={classes.illustration}
        />
        <Typography variant="h4">Create Teamo</Typography>
      </DialogTitle>

      <DialogContent>
        <List>
          <ListItem>
            <ListItemIcon>
              <Controller />
            </ListItemIcon>
            <Autocomplete
              value={gameName}
              onChange={(_, newValue) => setGameName(newValue)}
              // eslint-disable-next-line react/jsx-props-no-spreading
              renderInput={(params) => <TextField {...params} label={Game.label} />}
              options={games.map((item) => item.name)}
              fullWidth
            />
          </ListItem>

          <ListItem>
            <ListItemIcon>
              <Dpad />
            </ListItemIcon>
            <Autocomplete
              value={platform}
              onChange={(_, newValue) => setPlatform(newValue)}
              // eslint-disable-next-line react/jsx-props-no-spreading
              renderInput={(params) => <TextField {...params} label={Platform.label} />}
              options={Platform.options}
              fullWidth
            />
          </ListItem>

          <ListItem>
            <ListItemIcon>
              <Mic />
            </ListItemIcon>
            <Autocomplete
              value={microphone}
              onChange={(_, newValue) => setMicrophone(newValue)}
              // eslint-disable-next-line react/jsx-props-no-spreading
              renderInput={(params) => <TextField {...params} label={Microphone.label} />}
              options={Microphone.options}
              fullWidth
            />
          </ListItem>

          <ListItem>
            <ListItemIcon>
              <People />
            </ListItemIcon>
            <Autocomplete
              value={size}
              onChange={(_, newValue) => setSize(newValue)}
              // eslint-disable-next-line react/jsx-props-no-spreading
              renderInput={(params) => <TextField {...params} label={Size.label} />}
              options={Size.options}
              fullWidth
            />
          </ListItem>

          <ListItem>
            <ListItemIcon classes={{ root: classes.descriptionIconItem }}>
              <Description />
            </ListItemIcon>
            <TextField
              value={description}
              onChange={(event) => setDescription(event.target.value)}
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
        <TMButton
          onClick={() => {
            dispatch(addNewLobby({ game, platform, microphone, size, description }))
            onClose()
          }}
          color="primary"
          pending={pending}
        >
          Create
        </TMButton>
      </DialogActions>
    </Dialog>
  )
}

CreateLobbyDialog.propTypes = {
  /** If `true`, the modal is presented. */
  open: PropTypes.bool.isRequired,

  /** A function that is called when the modal needs to be closed. */
  onClose: PropTypes.func.isRequired,
}

export default CreateLobbyDialog
