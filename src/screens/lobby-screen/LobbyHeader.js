import React from "react"
import PropTypes from "prop-types"
import { makeStyles } from "@material-ui/core/styles"
import { Grid, ListItemIcon, TextField, Typography } from "@material-ui/core"
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
  gameLogo: {
    width: 84,
    height: 24,
    objectFit: "cover",
  },
  lobbyDescription: {
    // paddingTop: 4,
    // paddingBottom: 4,
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
    <Grid container item spacing={3}>
      <Grid container item alignItems="center" justify="space-between">
        <Typography variant="h5">{`${lobbyHost}"s Teamo`}</Typography>
        <img src={gameLogo} alt={gameName} className={classes.gameLogo} />
      </Grid>

      <Grid container item spacing={1} >
        <Grid container item alignItems="center" wrap="nowrap">
          <ListItemIcon classes={{ root: classes.descriptionIconItem }}>
            <Description />
          </ListItemIcon>
          <Typography variant="body1">{lobbyDesc}</Typography>
        </Grid>
        <Grid container item alignItems="center" wrap="nowrap">
          <ListItemIcon>
            <Dpad />
          </ListItemIcon>
          <Typography variant="body1">{platform}</Typography>
        </Grid>
        <Grid container item alignItems="center" wrap="nowrap">
          <ListItemIcon>
            {mic === "Microphone" ? <Mic /> : <MicSlash />}
          </ListItemIcon>
          <Typography variant="body1">{mic}</Typography>
        </Grid>
        <Grid container item alignItems="center" wrap="nowrap">
          <ListItemIcon> <People /> </ListItemIcon>
          <Typography variant="body1">{players}</Typography>
        </Grid>
      </Grid>

      <Grid container item alignItems="center" wrap="nowrap">
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
      </Grid>

      <Grid container item spacing={1} direction="column">
        <Grid item>
          <TMButton leadingIcon={<Gear />} fullWidth>
            Edit Teamo
          </TMButton>
        </Grid>
        <Grid item>
          <TMButton leadingIcon={<Headset />} fullWidth>
            Join Voice
          </TMButton>
        </Grid>
        <Grid item>
          <TMButton leadingIcon={<Exit />} fullWidth variant="outlined">
            Delete Lobby
          </TMButton>
        </Grid>
      </Grid>
    </Grid>
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
