import React from "react"
// import PropTypes from "prop-types"
import { makeStyles } from "@material-ui/core/styles"
import { Grid, Typography } from "@material-ui/core"

import { TMAvatar, TMButton } from "../../atoms/"

const useStyles = makeStyles({
  containerGrid: {
    width: 304,
    borderRadius: 16,
    backgroundColor: "#4D287C",
    padding: 16,
  },
  headerGrid: {
    marginBottom: 8,
  },
  buttonsGrid: {
    marginTop: 16,
  }
})

function PlayerCard() {
  const classes = useStyles()

  return (
    <Grid container direction="column" classes={{ root: classes.containerGrid }}>
      <Grid container item classes={{ root: classes.headerGrid }}>
        <TMAvatar
          size="medium"
          alt="Pondorasti"
          src="https://avatars0.githubusercontent.com/u/32957606?s=460&u=e631c3762c12d41f3ce0348b8137f0751a2eed75&v=4"
        />

      </Grid>

      <Typography>
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

export default PlayerCard
