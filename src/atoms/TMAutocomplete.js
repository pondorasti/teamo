import React from "react"
import Autocomplete from "@material-ui/lab/Autocomplete"
import TextField from "@material-ui/core/TextField"
import ArrowDown from "../assets/icons/ArrowDown"
import PropTypes from "prop-types"

function TMAutocomplete({ label, options, getOptionLabel, style }) {

  return (
    <Autocomplete
      options={options}
      getOptionLabel={getOptionLabel}
      style={style}
      popupIcon={<ArrowDown />}
      size="small"
      autoHighlight
      autoSelect
      renderInput={(params) => (
        <TextField {...params} variant="outlined" label={label} />
      )}
    />
  )
}

TMAutocomplete.propTypes = {
  /** The label content. */
  label: PropTypes.string.isRequired,

  /** Array of options. */
  options: PropTypes.array.isRequired,

  /**
   * Used to determine the string value for a given option.
   *
   * @param {T} option
   * @returns {string}
   * @default (option) => option.label ?? option
   */
  getOptionLabel: PropTypes.func.isRequired,

  /** Override or extend the styles applied to the component. */
  style: PropTypes.object,
}

export default TMAutocomplete
