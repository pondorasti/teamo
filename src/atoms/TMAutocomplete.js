import React from 'react'
import TMTextField from './TMTextfield'
import Autocomplete from '@material-ui/lab/Autocomplete'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    
  },
}))

function TMAutocomplete({ label }) {
  const classes = useStyles()

  return (
    <Autocomplete
       classes={{root: classes.root}}
       options={gameTitles}
       getOptionLabel={(option) => option.title}
       style={{ width: 300 }}
       renderInput={(params) => <TMTextField {...params} label="Combo box"/>} // input props
     />
  )
}

const gameTitles = [
  { title: 'Minecraft', year: 1994 },
  { title: 'League of Legends', year: 1972 },
  { title: 'Fall Guys', year: 1974 },
]

export default TMAutocomplete
