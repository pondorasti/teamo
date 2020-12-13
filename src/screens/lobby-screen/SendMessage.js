import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import IconButton from "@material-ui/core/IconButton"
import InputAdornment from "@material-ui/core/InputAdornment"

import { Airplane } from "../../assets/icons"

import TextField from "@material-ui/core/TextField"

const useStyles = makeStyles(theme => ({
  textField: {
    background: theme.palette.grey[600],
    borderRadius: 16,
    "& .MuiOutlinedInput-root": {
      borderRadius: 16,
      "&.Mui-focused fieldset": {
        borderColor: theme.palette.grey[600],
      },
      "& fieldset": {
        borderColor: theme.palette.grey[600],
      },
      "&:hover fieldset": {
        borderColor: theme.palette.grey[600],
      },
    },
  },
  airplane: {
    fontSize: 16,
  },
}))

function SendMessage() {
  const classes = useStyles()

  const handleSubmit = () => {}

  return (
    <TextField
      fullWidth
      className={classes.textField}
      placeholder="Say hi to the team"
      InputProps={{
        endAdornment: (
          <InputAdornment position="start">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleSubmit}
              edge="end"
              style={{ width: 32, height: 32 }}
            >
              <Airplane classes={{ root: classes.airplane }} />
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  )
}

export default SendMessage
