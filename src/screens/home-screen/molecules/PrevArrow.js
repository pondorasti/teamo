import React from "react"
import { ArrowLeft } from "../../../assets/icons"
import PropTypes from "prop-types"

// import { makeStyles } from "@material-ui/core/styles"

// const useStyles = makeStyles({
//   cardContainer: { position: "relative" },
// })

function PrevArrow({ onClick }) {
  // const classes = useStyles()

  return (
    <div className="arrow next" onClick={onClick}>
      <ArrowLeft style={{ fontSize: 48 }} />
    </div>
  )
}

PrevArrow.propTypes = {
  /** The username of the lobby host. */
  onClick: PropTypes.func,
}

export default PrevArrow
