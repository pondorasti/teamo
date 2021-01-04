import React from "react"
import PropTypes from "prop-types"
import { Grid, Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import { TMAvatar } from "../../../atoms"

const useStyle = makeStyles({
  marginLeft: { marginLeft: 8 },
  message: { marginTop: 4 },
})

function Message({
  avatarUrl, username, timestamp, message,
}) {
  const classes = useStyle()

  return (
    <Grid container direction="row" wrap="nowrap">
      <TMAvatar size="small" src={avatarUrl} alt={username} />
      <Grid container item classes={{ root: classes.marginLeft }}>
        <Grid container item alignItems="baseline">
          <Typography variant="h6">
            {" "}
            {username}
            {" "}
          </Typography>
          <Typography variant="caption" color="textSecondary" classes={{ root: classes.marginLeft }}>
            {" "}
            {timestamp}
            {" "}
          </Typography>
        </Grid>
        <Typography variant="body" classes={{ root: classes.message }}>
          {" "}
          {message}
          {" "}
        </Typography>
      </Grid>
    </Grid>
  )
}

Message.propTypes = {
  /** The avatar `src` attribute associated with the message. */
  avatarUrl: PropTypes.string.isRequired,

  /** The username associated with the message. */
  username: PropTypes.string.isRequired,

  /** A string representation of the timestamp. */
  timestamp: PropTypes.string.isRequired,

  /** The contents of the message. */
  message: PropTypes.string.isRequired,
}

export default Message
