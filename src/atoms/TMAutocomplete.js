import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete, { createFilterOptions } from '@material-ui/lab/Autocomplete';
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

function TMAutocomplete({ label }) {
  const classes = useStyles();

  return (
    <Autocomplete
      classes={{root: classes.root}}
      options={gameTitles}
      getOptionLabel={(option) => option.title}
      style={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Combo box" variant="outlined" />}
    />
  );
}

const gameTitles = [
  { title: 'Minecraft', year: 1994 },
  { title: 'League of Legends', year: 1972 },
  { title: 'Fall Guys', year: 1974 },
];

export default TMAutocomplete;
