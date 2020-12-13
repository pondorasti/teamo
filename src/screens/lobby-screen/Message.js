import React from "react"
import PropTypes from "prop-types"
import { Grid, Typography } from "@material-ui/core"
import { TMAvatar } from "../../atoms"

function Message({ avatarUrl, username, timestamp, message }) {
  return (
    <Grid container direction="row" wrap="nowrap">
      <TMAvatar size="small" src={avatarUrl} alt={username}/>
      <Grid container item>
        <Grid container item alignItems="baseline">
          <Typography variant="h6"> {username} </Typography>
          <Typography variant="caption"> {timestamp} </Typography>
        </Grid>
        <Typography variant="body"> {message} </Typography>
      </Grid>
    </Grid>
  )
}

Message.propTypes = {
  avatarUrl: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  timestamp: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
}

export default Message