import React from "react"
import Avatar from "@material-ui/core/Avatar"
import { makeStyles } from "@material-ui/core/styles"
import PropTypes from "prop-types"
import classNames from "classnames"

const useStyles = makeStyles((theme) => ({
  container: {
    position: "relative",
    display: "inline-block",
  },
  sizeExtraSmall: {
    width: "24px",
    height: "24px",
    borderRadius: "13.4%",
  },
  sizeSmall: {
    width: "36px",
    height: "36px",
    borderRadius: "13.4%",
  },
  sizeMedium: {
    width: "56px",
    height: "56px",
    borderRadius: "13.4%",
  },
  sizeLarge: {
    width: "120px",
    height: "120px",
    borderRadius: "13.4%",
  },
  onlineStatusOverlay: {
    position: "absolute",
    zIndex: 1,
    bottom: "0%",
    right: "0%",

    width: "20%",
    height: "20%",
    borderRadius: "100%",

    backgroundColor: theme.palette.success.main,

    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  backgroundStatusOverlay: {
    width: "166%",
    height: "166%",
    borderRadius: "100%",

    flexShrink: 0,
  },
}))

function TMAvatar({
  alt, src, size, status, backgroundColor, style,
}) {
  const classes = useStyles()
  const className = classNames({
    [classes.sizeExtraSmall]: size === "extraSmall",
    [classes.sizeSmall]: size === "small",
    [classes.sizeMedium]: size === "medium",
    [classes.sizeLarge]: size === "large",
  })

  if (status === "none") {
    return (
      <Avatar classes={{ root: className }} alt={alt} src={src} style={style} />
    )
  }
  return (
    <div className={classes.container}>
      <Avatar
        classes={{ root: className }}
        alt={alt}
        src={src}
        style={style}
      />
      <div className={classes.onlineStatusOverlay}>
        <div
          className={classes.backgroundStatusOverlay}
          style={{ backgroundColor: `${backgroundColor}` }}
        />
      </div>
      <div className={classes.onlineStatusOverlay} />
    </div>
  )
}

TMAvatar.propTypes = {
  /** Provides an alt attribute for the rendered `img` element. */
  alt: PropTypes.string.isRequired,

  /** The `src` attribute for the `img` element. */
  src: PropTypes.string.isRequired,

  /** The size of the avatar. */
  size: PropTypes.oneOf(["extraSmall", "small", "medium", "large"]),

  /** An optional badge for the avatar */
  status: PropTypes.oneOf(["none", "online"]),

  /** An optional string property that represents the background color of the badge */
  backgroundColor: PropTypes.string,

  /** Override or extend the styles applied to the component. */
  style: PropTypes.object,
}

TMAvatar.defaultProps = {
  size: "medium",
  status: "none",
  backgroundColor: undefined,
  style: undefined,
}

export default TMAvatar
