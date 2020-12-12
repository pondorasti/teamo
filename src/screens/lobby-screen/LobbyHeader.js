import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import PropTypes from "prop-types"

const LobbyStatusOptions = ["Open", "Closed"]

import {
  Description,
  Dpad,
  Mic,
  MicSlash,
  People,
  Lock,
  LockOpen,
  Gear,
  Headset,
  Exit,
} from "../../assets/icons"
import { TextField, Typography } from "@material-ui/core"
import Autocomplete from "@material-ui/lab/Autocomplete"
import TMButton from "../../atoms/TMButton"

const useStyles = makeStyles({
  container: {
    width: 352,
  },
  lobbyTitleDiv: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 16,
    marginBottom: 12,
  },
  gameLogo: {
    width: 84,
    height: 24,
    objectFit: "cover",
  },
  lobbyDescription: {
    paddingTop: 4,
    paddingBottom: 4,
  },
  autocomplete: {
    marginTop: 12,
    marginBottom: 12,
  },
  descriptionIconItem: {
    display: "flex",
    alignSelf: "flex-start",
  },
})

function LobbyHeader({
  lobbyHost,
  gameName,
  gameLogo,
  lobbyDesc,
  platform,
  mic,
  players,
}) {
  const classes = useStyles()
  const [roomStatus, setRoomStatus] = React.useState(LobbyStatusOptions[0])

  return (
    <List
      component="nav"
      aria-label="main mailbox folders"
      classes={{ root: classes.container }}
    >
      <ListItem classes={{ root: classes.lobbyTitleDiv }}>
        <Typography variant="h5">{`${lobbyHost}'s Teamo`}</Typography>
        <img src={gameLogo} alt={gameName} className={classes.gameLogo} />
      </ListItem>
      <ListItem classes={{ root: classes.lobbyDescription }}>
        <ListItemIcon classes={{ root: classes.descriptionIconItem }}>
          <Description />
        </ListItemIcon>
        <Typography variant="body1">{lobbyDesc}</Typography>
      </ListItem>
      <ListItem classes={{ root: classes.lobbyDescription }}>
        <ListItemIcon>
          <Dpad />
        </ListItemIcon>
        <Typography variant="body1">{platform}</Typography>
      </ListItem>
      <ListItem classes={{ root: classes.lobbyDescription }}>
        <ListItemIcon>
          {mic === "Microphone" ? <Mic /> : <MicSlash />}
        </ListItemIcon>
        <Typography variant="body1">{mic}</Typography>
      </ListItem>
      <ListItem classes={{ root: classes.lobbyDescription }}>
        <ListItemIcon>
          <People />
        </ListItemIcon>
        <Typography variant="body1">{players}</Typography>
      </ListItem>

      <ListItem classes={{ root: classes.autocomplete }}>
        <ListItemIcon>
          {roomStatus === "Open" ? <LockOpen /> : <Lock />}
        </ListItemIcon>
        <Autocomplete
          renderInput={params => <TextField {...params} label="Lobby Status" />}
          options={LobbyStatusOptions}
          fullWidth
          onChange={(_, newValue) => {
            setRoomStatus(newValue)
          }}
        />
      </ListItem>

      <ListItem classes={{ root: classes.lobbyDescription }}>
        <TMButton leadingIcon={<Gear />} fullWidth>
          Edit Teamo
        </TMButton>
      </ListItem>
      <ListItem classes={{ root: classes.lobbyDescription }}>
        <TMButton leadingIcon={<Headset />} fullWidth>
          Join Voice
        </TMButton>
      </ListItem>
      <ListItem classes={{ root: classes.lobbyDescription }}>
        <TMButton leadingIcon={<Exit />} fullWidth variant="outlined">
          Delete Lobby
        </TMButton>
      </ListItem>
    </List>
  )
}

LobbyHeader.propTypes = {
  /** Room creater */
  lobbyHost: PropTypes.string.isRequired,

  /** Used as alt for the game Logo img */
  gameName: PropTypes.string.isRequired,

  /** Game Logo */
  gameLogo: PropTypes.string.isRequired,

  /** Description of lobby */
  lobbyDesc: PropTypes.string.isRequired,

  /** platform preference*/
  platform: PropTypes.string.isRequired,

  /** Mic preference */
  mic: PropTypes.oneOf(["Microphone", "No Microphone"]),

  /** Current room occupancy status */
  players: PropTypes.string.isRequired,
}

export default LobbyHeader
