import React from 'react'
import TextField from '@material-ui/core/TextField'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    '& label.Mui-focused': {
      color: theme.palette.secondary.main,
    },
    '& .MuiOutlinedInput-root': {
      borderRadius: 12,
      '&.Mui-focused fieldset': {
        borderColor: theme.palette.secondary.main,
      }
    }
  }
}))

function TMTextfield({ label, defaultValue, helperText, error, disabled, multiline, rows, type }) {
  const classes = useStyles()

  return (
    <TextField
      classes={{ 
        root: classes.root
      }}
      variant="outlined"
      size="small"
      label={label}
      defaultValue={defaultValue}
      helperText={helperText}
      error={error}
      disabled={disabled}
      multiline={multiline}
      rows={rows}
      type={type}
    />
  )
}

TMTextfield.propTypes = {
  /** The label content. */
  label: PropTypes.string.isRequired,

  /** The default input value. */
  defaultValue: PropTypes.string,

  /** Text that is displayed under the Textfield */
  helperText: PropTypes.string,

  /** If `true`, the input will indicate an error. */
  error: PropTypes.bool,

  /** If `true`, the input will be disabled. */
  disabled: PropTypes.bool,

  /** If `true`, a textarea element will be rendered. */
  multiline: PropTypes.bool,

  /** Number of rows to display when multiline option is set to true. */
  rows: PropTypes.number,

  /** Type of the input element. It should be a valid HTML5 input type. */
  type: PropTypes.string
}

TMTextfield.defaultProps = {
  error: false,
  disabled: false,
  multiline: false,
  type: 'text'
}

export default TMTextfield
