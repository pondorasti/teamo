import React from 'react'
import Avatar from '@material-ui/core/Avatar'
import { makeStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const useStyles = makeStyles((theme) => ({
  avatarDiv: {
    position: 'relative',
  },
  sizeSmall: {
    width: '24px',
    height: '24px',
    borderRadius: '4px',
  },
  sizeMedium: {
    width: '36px',
    height: '36px',
    borderRadius: '6px',
  },
  sizeLarge: {
    width: '120px',
    height: '120px',
    borderRadius: '16px',
  },
  largeStatusOverlay: {
    position: 'absolute',
    top: '88px',
    left: '88px',
    zIndex: 1,
    padding: '8px',
    borderRadius: '50%',
  },
  largeGreenDot: {
    height: '24px',
    width: '24px',
    backgroundColor: '#23E036',
    borderRadius: '50%',
  },
  smallStatusOverlay: {
    position: 'absolute',
    top: '16px',
    left: '16px',
    zIndex: 1,
    padding: '2px',
    borderRadius: '50%',
  },
  smallGreenDot: {
    height: '6px',
    width: '6px',
    backgroundColor: '#23E036',
    borderRadius: '50%',
  },
}))

function TMAvatar({ alt, src, size, status, BGColor }) {
  console.log(BGColor)
  const classes = useStyles()
  const className = classNames({
    [classes.sizeSmall]: size === 'small',
    [classes.sizeMedium]: size === 'medium',
    [classes.sizeLarge]: size === 'large',
  })

  const large = (
    <div
      className={classes.largeStatusOverlay}
      style={{ backgroundColor: `${BGColor}` }}
    >
      <div className={classes.largeGreenDot}></div>
    </div>
  )

  const small = (
    <div
      className={classes.smallStatusOverlay}
      style={{ backgroundColor: `${BGColor}` }}
    >
      <div className={classes.smallGreenDot}></div>
    </div>
  )

  const largeOrSmall = <div> {size === 'large' ? large : small} </div>

  const noStatus = <Avatar classes={{ root: className }} alt={alt} src={src} />

  const withStatus = (
    <div className={classes.avatarDiv}>
      <Avatar classes={{ root: className }} alt={alt} src={src} />
      {size === 'medium' ? '' : largeOrSmall}
    </div>
  )

  return <div>{status === 'online' ? withStatus : noStatus}</div>
}

TMAvatar.propTypes = {
  alt: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  status: PropTypes.oneOf(['none', 'online']),
}

TMAvatar.defaultProps = {
  size: 'medium',
  status: 'none',
}

export default TMAvatar
