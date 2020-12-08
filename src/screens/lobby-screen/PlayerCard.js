import React from "react"
import PropTypes from "prop-types"
import { makeStyles } from "@material-ui/core/styles"
import { Grid, Typography, Tooltip } from "@material-ui/core"
import { Copy } from "../../assets/icons"
import { TMAvatar, TMButton } from "../../atoms/"

const useStyles = makeStyles(theme => ({
  containerGrid: {
    width: 304,
    borderRadius: 16,
    backgroundColor: "#4D287C",
    padding: 16,
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

  function copyGamerTagToClipboard() {
    navigator.clipboard.writeText(username)
  }

  return (
    <Grid container direction="column" classes={{ root: classes.containerGrid }}>
      <Grid container item wrap="nowrap" classes={{ root: classes.headerGrid }}>
        <TMAvatar
          size="medium"
          alt={username}
          src="https://avatars0.githubusercontent.com/u/32957606?s=460&u=e631c3762c12d41f3ce0348b8137f0751a2eed75&v=4"
        />

        <Grid container item direction="column" style={{ marginLeft: 8 }} >
          <Typography variant="h5">
            Pondorasti
          </Typography>

          <Tooltip title="Copy" arrow placement="right">
            <div onClick={copyGamerTagToClipboard} className={classes.containerGamerTag}>
              <Typography variant="body">
                u/{username}
              </Typography>
              <Copy style={{ marginLeft: 4, width: 12, height: 12 }} />
            </div>
          </Tooltip>
        </Grid>

      </Grid>

      <Typography variant="body1">
        we only allow this many characters? 52 chars, let&apos;s make it 62
      </Typography>

      <Grid container item wrap="nowrap" classes={{ root: classes.buttonsGrid }}>
        <TMButton
          variant="outlined"
          fullWidth
        >
          Deny
        </TMButton>
        <TMButton
          fullWidth
          color="primary"
          style={{ marginLeft: 16 }}
        >
          Accept
        </TMButton>
      </Grid>
    </Grid>
  )
}

PlayerCard.propTypes = {
  username: PropTypes.string.isRequired
}

export default PlayerCard
