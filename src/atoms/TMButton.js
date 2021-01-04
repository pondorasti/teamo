import React from "react"
import Button from "@material-ui/core/Button"
import PropTypes from "prop-types"
import { fade, darken } from "@material-ui/core/styles/colorManipulator"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
  root: {
    textTransform: "none",
    color: theme.palette.text.primary,
  },
  sizeSmall: {
    padding: "4px 8px",
    borderRadius: 8,
    fontSize: "0.875rem",
  },
  sizeLarge: {
    padding: "8px 24px",
    borderRadius: 8,
    fontSize: theme.typography.button.fontSize,
  },
  contained: {
    backgroundColor: theme.palette.primary.main,
    "&:hover": {
      backgroundColor: darken(theme.palette.primary.main, 0.075),
    },
  },
  outlinedSizeSmall: {
    padding: "3px 7px",
  },
  outlinedSizeLarge: {
    padding: "7px 23px",
  },
  outlined: {
    backgroundColor: theme.palette.error.light,
    borderColor: theme.palette.error.main,
    "&:hover": {
      backgroundColor: fade(
        theme.palette.error.light,
        theme.palette.action.hoverOpacity,
      ),
      borderColor: theme.palette.error.main,
    },
  },
  leadingIcon: {
    "& .MuiSvgIcon-root": {
      fontSize: 16,
    },
  },
  iconSizeSmall: {
    marginRight: 8,
    marginLeft: 0,
  },
  iconSizeLarge: {
    marginRight: 12,
    marginLeft: 0,
  },
  childrenContainter: {
    width: "100%",
  },
}))

function TMButton({
  children,
  leadingIcon,
  size,
  variant,
  disabled,
  fullWidth,
  href,
  style,
  onClick,
}) {
  const classes = useStyles()

  return (
    <Button
      classes={{
        root: classes.root,
        sizeSmall: classes.sizeSmall,
        sizeLarge: classes.sizeLarge,
        contained: classes.contained,
        outlinedSizeSmall: classes.outlinedSizeSmall,
        outlinedSizeLarge: classes.outlinedSizeLarge,
        outlined: classes.outlined,
        startIcon: classes.leadingIcon,
        iconSizeSmall: classes.iconSizeSmall,
        iconSizeLarge: classes.iconSizeLarge,
      }}
      startIcon={leadingIcon}
      size={size}
      variant={variant}
      disabled={disabled}
      fullWidth={fullWidth}
      href={href}
      disableElevation
      style={style}
      onClick={onClick}
    >
      <div className={classes.childrenContainter}>{children}</div>
    </Button>
  )
}

TMButton.propTypes = {
  /** The content of the button. */
  children: PropTypes.node.isRequired,

  /** An optional leading icon for the button */
  leadingIcon: PropTypes.node,

  /** The size of the button. */
  size: PropTypes.oneOf(["small", "large"]),

  /** The variant to use. */
  variant: PropTypes.oneOf(["contained", "outlined"]),

  /** If `true`, the button will be disabled. */
  disabled: PropTypes.bool,

  /** If `true`, the button will take up the full width of its container. */
  fullWidth: PropTypes.bool,

  /**
   * The URL to link to when the button is clicked.
   * If defined, an `a` element will be used as the root node.
   */
  href: PropTypes.string,

  /** Override or extend the styles applied to the component. */
  style: PropTypes.object,

  /** An optional function that is called when the button is pressed. */
  onClick: PropTypes.func,
}

TMButton.defaultProps = {
  leadingIcon: undefined,
  size: "large",
  variant: "contained",
  disabled: false,
  fullWidth: false,
  href: undefined,
  style: undefined,
  onClick: undefined,
}

export default TMButton
