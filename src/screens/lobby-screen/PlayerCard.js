import React, { useState } from "react"
import PropTypes from "prop-types"
import { makeStyles } from "@material-ui/core/styles"
import { Grid, Typography, Tooltip, IconButton, Menu, MenuItem, Collapse } from "@material-ui/core"
import { useTheme } from "@material-ui/styles"
import { Copy, ThreeDots, Exit, Headset, Crown } from "../../assets/icons"
import { TMAvatar, TMButton } from "../../atoms/"

const useStyles = makeStyles(theme => ({
  containerGrid: {
    width: 304,
    borderRadius: 16,
    padding: 16,
    transition: theme.transitions.create("background-color"),
  },
  headerGrid: {
    marginBottom: 8,
  },
  containerGamerTag: {
    color: theme.palette.info.main,

    display: "inline-flex",
    alignItems: "center",
    marginRight: "auto",

    cursor: "pointer",
    "&:hover": {
      textDecoration: "underline",
    },
  },
  buttonsGrid: {
    marginTop: 16,
  }
}))

function PlayerCard({ username }) {
  const classes = useStyles()
  const theme = useTheme()

  const [acceptedPlayer, setAcceptedPlayer] = useState(false)
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)

  function handleClose() { setAnchorEl(null) }
  function handleOptionsButton(event) { setAnchorEl(event.currentTarget) }
  function handledAcceptButton() { setAcceptedPlayer(true) }

  function copyGamerTagToClipboard() {
    navigator.clipboard.writeText(username)
  }

  return (
    <Grid
      container
      direction="column"
      classes={{ root: classes.containerGrid }}
      style={{ backgroundColor: `${acceptedPlayer ? theme.palette.warning.main : theme.palette.grey[700]}` }}
    >
      <Grid container item wrap="nowrap" classes={{ root: classes.headerGrid }}>
        <TMAvatar
          size="medium"
          alt={username}
          src="https://avatars0.githubusercontent.com/u/32957606?s=460&u=e631c3762c12d41f3ce0348b8137f0751a2eed75&v=4"
        />

        <Grid container item direction="column" style={{ marginLeft: 8 }} >
          <Typography variant="h5">
            Pondorasti
            <Crown />
          </Typography>

          <Tooltip title="Copy" arrow placement="right">
            <div onClick={copyGamerTagToClipboard} className={classes.containerGamerTag}>
              <Typography variant="body1">
                u/{username}
              </Typography>
              <Copy style={{ marginLeft: 4, width: 12, height: 12 }} />
            </div>
          </Tooltip>
        </Grid>

        <IconButton style={{ width: 24, height: 24 }} onClick={handleOptionsButton}>
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

      <Typography variant="body1">
        we only allow this many characters? 52 chars, let&apos;s make it 62
      </Typography>

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
  )
}

PlayerCard.propTypes = {
  username: PropTypes.string.isRequired
}

export default PlayerCard
