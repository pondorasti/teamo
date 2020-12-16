import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { IconButton, Menu, MenuItem } from "@material-ui/core"
import PropTypes from "prop-types"
import classNames from "classnames"

import ThreeDots from "../../../assets/icons/ThreeDots"

const useStyles = makeStyles(theme => ({
  container: {
    border: `1px solid ${theme.palette.grey[500]}`,
    backgroundColor: theme.palette.grey[700],
    borderRadius: 6,

    overflow: "hidden",
    position: "absolute",
    zIndex: 1,

    top: -12,
    right: -12,

    opacity: 0,

    // do not reveal options menu before hovering the card
    pointerEvents: "none",

    transition: theme.transitions.create("opacity", {
      duration: theme.transitions.duration.short,
    }),

    "&:hover": {
      pointerEvents: "auto",
      opacity: 1,
    },
  },
  iconButton: {
    borderRadius: 0,
    height: 24,
    width: 24,
  },
  iconStyle: { fontSize: 16 },
}))

function LobbyOptionsButton({className}) {
  const classes = useStyles()
  const containerClassName = classNames(className, classes.container)

  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleOptionsButton = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleAddToWatchList = () => {
    handleClose()
  }
  const handleReportLobby = () => {
    handleClose()
  }

  return (
    <div className={containerClassName}>
      <IconButton
        classes={{ root: classes.iconButton }}
        aria-label="lobby options"
        aria-controls="lobby-menu"
        aria-haspopup="true"
        onClick={handleOptionsButton}
      >
        <ThreeDots classes={{ root: classes.iconStyle }} />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={handleAddToWatchList}>Add to Watch List</MenuItem>
        <MenuItem onClick={handleReportLobby}>Report Lobby</MenuItem>
      </Menu>
    </div>
  )
}

LobbyOptionsButton.propTypes = {
  /** Override or extend the styles applied to the component. */
  className: PropTypes.string.isRequired,
}

export default LobbyOptionsButton