import React, { useState } from "react"
import PropTypes from "prop-types"
import { makeStyles, useTheme } from "@material-ui/core/styles"
import { Grid, Typography, Tooltip, IconButton, Menu, MenuItem, Collapse } from "@material-ui/core"
import { Copy, ThreeDots, Exit, Headset, Crown } from "../../../assets/icons"
import { TMAvatar, TMButton } from "../../../atoms"

const useStyles = makeStyles(theme => ({
  containerGrid: {
    borderRadius: 16,
    padding: 16,
    transition: theme.transitions.create("background-color"),
  },
  headerGrid: { marginBottom: 8 },
  containerGamerTag: {
    color: theme.palette.info.main,

    display: "flex",
    alignItems: "center",
    marginRight: "auto",

    cursor: "pointer",
    "&:hover": {
      textDecoration: "underline",
    },
  },
  crownIcon: {
    fontSize: 16,
    marginLeft: 4,
  },
  usernameGrid: { marginLeft: 8 },
  copyIcon: {
    marginLeft: 4,
    width: 12,
    height: 12,
  },
  threeDotsIconButton: {
    width: 24,
    height: 24,
  },
  buttonsGrid: { marginTop: 16 }
}))

function PlayerCard({ username, gamerTag, avatarUrl, bio, isHost, isAccepted }) {
  const classes = useStyles()
  const theme = useTheme()

  const [acceptedPlayer, setAcceptedPlayer] = useState(isAccepted)
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)

  function handleClose() { setAnchorEl(null) }
  function handleOptionsButton(event) { setAnchorEl(event.currentTarget) }
  function handledAcceptButton() { setAcceptedPlayer(true) }

  function copyGamerTagToClipboard() {
    navigator.clipboard.writeText(gamerTag)
  }

  return (
    <Grid container item>
      <Grid
        container
        item
        direction="column"
        classes={{ root: classes.containerGrid }}
        style={{ backgroundColor: `${acceptedPlayer ? theme.palette.warning.main : theme.palette.grey[700]}` }}
      >

        <Grid container item wrap="nowrap" classes={{ root: classes.headerGrid }}>
          <TMAvatar
            size="medium"
            alt={username}
            src={avatarUrl}
          />

          <Grid container item direction="column" classes={{ root: classes.usernameGrid }}>
            <Grid container item>
              <Typography variant="h5"> {username} </Typography>
              {isHost && <Crown classes={{ root: classes.crownIcon }} />}

            </Grid>
            <Tooltip title="Copy" arrow placement="right">
              <div onClick={copyGamerTagToClipboard} className={classes.containerGamerTag}>
                <Typography variant="body1"> u/{gamerTag} </Typography>
                <Copy classes={{ root: classes.copyIcon }} />
              </div>
            </Tooltip>
          </Grid>

          <IconButton classes={{ root: classes.threeDotsIconButton }} onClick={handleOptionsButton}>
            <ThreeDots size="inherit" />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
            transformOrigin={{ vertical: "top", horizontal: "left" }}
            open={open}
            onClose={handleClose}
          >
            <MenuItem>Profile</MenuItem>
            <MenuItem>Kick</MenuItem>
          </Menu>
        </Grid>

        <Typography variant="body1"> {bio} </Typography>

        <Collapse in={!acceptedPlayer}>
          <Grid container item wrap="nowrap" classes={{ root: classes.buttonsGrid }}>
            <TMButton
              fullWidth
              variant="outlined"
              leadingIcon={<Exit />}
            >
              Deny
            </TMButton>

            <TMButton
              fullWidth
              color="primary"
              leadingIcon={<Headset />}
              style={{ marginLeft: 16 }}
              onClick={handledAcceptButton}
            >
              Accept
            </TMButton>
          </Grid>
        </Collapse>
      </Grid>
    </Grid>
  )
}

PlayerCard.propTypes = {
  username: PropTypes.string.isRequired,
  gamerTag: PropTypes.string.isRequired,
  avatarUrl: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
  isHost: PropTypes.bool,
  isAccepted: PropTypes.bool,
}

PlayerCard.defaultProps = {
  isHost: false,
  isAccepted: false,
}

export default PlayerCard