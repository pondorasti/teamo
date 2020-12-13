import React from "react"
import PropTypes from "prop-types"
import { makeStyles } from "@material-ui/core/styles"
import { List, ListItem, ListItemIcon, TextField, Typography } from "@material-ui/core"
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
import { Status, Microphone } from "../../api/lobby-template/"
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

function LobbyHeader({ lobbyHost, gameName, gameLogo, lobbyDesc, platform, mic, players }) {
  const classes = useStyles()
  const [lobbyStatus, setLobbyStatus] = React.useState(Status.options[0])

  function handleLobbyStatus(_, newValue) {
    setLobbyStatus(newValue)
  }

  return (
    <List
      component="nav"
      aria-label="main mailbox folders"
      classes={{ root: classes.container }}
    >
      <ListItem classes={{ root: classes.lobbyTitleDiv }}>
        <Typography variant="h5">{`${lobbyHost}"s Teamo`}</Typography>
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
          {lobbyStatus === Status.options[0] ? <LockOpen /> : <Lock />}
        </ListItemIcon>
        <Autocomplete
          renderInput={params => <TextField {...params} label={Status.label} />}
          options={Status.options}
          fullWidth
          disableClearable
          value={lobbyStatus}
          onChange={handleLobbyStatus}
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
  mic: PropTypes.oneOf(Microphone.options),

  /** Current room occupancy status */
  players: PropTypes.string.isRequired,
}

export default LobbyHeader
