import React from "react"
import { Grid, Typography } from "@material-ui/core"
import { TMAvatar } from "../../atoms"

function Message() {
  return (
    <Grid container direction="row" wrap="nowrap">
      <TMAvatar size="small" />
      <Grid container item>
        <Grid container item alignItems="baseline">
          <Typography variant="h6">Pondorasti</Typography>
          <Typography variant="caption">Today at 17:42</Typography>
        </Grid>
        <Typography variant="body">We can allow a one player queue, so that if someone get kicked, there is one more instant option, but this is extra feature, maybe not in mvp</Typography>
      </Grid>
    </Grid>
  )
}

export default Message