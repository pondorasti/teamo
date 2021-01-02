import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { IconButton, InputAdornment, TextField } from "@material-ui/core/"
import { Airplane } from "../../../assets/icons"

const useStyles = makeStyles((theme) => ({
  textField: {
    background: theme.palette.grey[600],
    borderRadius: 16,
    "& .MuiOutlinedInput-root": {
      borderRadius: 16,

      "& fieldset": {
        border: "none",
      },
    },
  },
  iconButton: {
    width: 32,
    height: 32,
  },
  airplaneIcon: {
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
              aria-label="send-message"
              onClick={handleSubmit}
              edge="end"
              classes={{ root: classes.iconButton }}
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
