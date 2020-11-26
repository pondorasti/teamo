import React from 'react'
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  sizeSmall: {
    padding: '4px 8px',
    borderRadius: 8
  },
  sizeLarge: {
    padding: '8px 24px',
    borderRadius: 8
  }
})


function TMButton({ children, color, size, style, disabled, fullWidth, href}) {
  const classes = useStyles()
  const className = classNames(
    {
    [classes.sizeSmall]: size === 'small',
    [classes.sizeLarge]: size === 'large'
    }
  )

  return (
    <Button
      className={className}
      color="primary"
      size={size}
      variant={style}
      disabled={disabled}
      fullWidth={fullWidth}
      href={href}
    >
      {children}
    </Button>
  )
}

TMButton.propTypes = {
  /**
   * The content of the button.
   */
  children: PropTypes.node.isRequired,

  /**
   * The color of the component. It only supports theme colors that make sense for this component.
   */
  color: PropTypes.oneOf(['primary', 'error']),

  /**
   * The size of the button.
   */
  size: PropTypes.oneOf(['small', 'large']),

  /**
   * The variant to use.
   */
  style: PropTypes.oneOf(['contained', 'outlined']),

  /**
   * If `true`, the button will be disabled.
   */
  disabled: PropTypes.bool,

  /**
   * If `true`, the button will take up the full width of its container.
   */
  fullWidth: PropTypes.bool,

  /**
   * The URL to link to when the button is clicked.
   * If defined, an `a` element will be used as the root node.
   */
  href: PropTypes.string
}

TMButton.defaultProps = {
  color: 'primary',
  size: 'large',
  style: 'contained',
  disabled: false,
  fullWidth: false
}

export default TMButton