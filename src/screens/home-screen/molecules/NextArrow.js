import React from "react"
import { ArrowRight } from "../../../assets/icons"

import PropTypes from "prop-types"

function NextArrow({ onClick }) {
  return (
    <div className="arrow next" onClick={onClick}>
      <ArrowRight style={{ fontSize: 48 }} />
    </div>
  )
}

NextArrow.propTypes = {
  /** The username of the lobby host. */
  onClick: PropTypes.func,
}

export default NextArrow
