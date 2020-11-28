import React from 'react';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& label.Mui-focused': {
      color: theme.palette.secondary.main,
    },
    '& .MuiOutlinedInput-root': {
      borderRadius: 12,
      '&.Mui-focused fieldset': {
        borderColor: theme.palette.secondary.main,
        borderRadius: 12,
      },
    },
  },
}));

function TMTextfield({ label, defaultValue, helperText, error, disabled, multiline, rows }) {
  const classes = useStyles();

  return (
    <TextField
      classes={{ root: classes.root }}
      variant="outlined"
      label={label}
      defaultValue={defaultValue}
      helperText={helperText}
      error={error}
      disabled={disabled}
      multiline={multiline}
      rows={rows}
    />
  )
}

TMTextfield.propTypes = {
  label: PropTypes.string.isRequired,
  defaultValue: PropTypes.string,
  helperText: PropTypes.string,
  error: PropTypes.bool,
  disabled: PropTypes.bool,
  multiline: PropTypes.bool,
  rows: PropTypes.number
}

TMTextfield.defaultProps = {
  error: false,
  disabled: false,
  multiline: false
}

export default TMTextfield;
