import React from 'react'
import Avatar from '@material-ui/core/Avatar'
import { makeStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const useStyles = makeStyles((theme) => ({
  avatarDiv: {
    position: 'relative',
    display: 'inline-block'
  },
  sizeSmall: {
    width: '24px',
    height: '24px',
    borderRadius: '13.4%',
  },
  sizeMedium: {
    width: '36px',
    height: '36px',
    borderRadius: '13.4%',
  },
  sizeLarge: {
    width: '120px',
    height: '120px',
    borderRadius: '13.4%',
  },
  onlineStatusOverlay: {
    position: 'absolute',
    zIndex: 1,
    bottom: '0%',
    right: '0%',

    width: '20%',
    height: '20%',
    borderRadius: '100%',

    backgroundColor: theme.palette.success.main,

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  backgroundStatusOverlay: {
    width: '166%',
    height: '166%',
    borderRadius: '100%',

    flexShrink: 0
  },
}))

function TMAvatar({ alt, src, size, status, backgroundColor }) {

  const classes = useStyles()
  const className = classNames({
    [classes.sizeSmall]: size === 'small',
    [classes.sizeMedium]: size === 'medium',
    [classes.sizeLarge]: size === 'large',
  })

  return <div className={classes.avatarDiv}>
    <Avatar classes={{ root: className }} alt={alt} src={src} />
    <div className={classes.onlineStatusOverlay}>
      <div className={classes.backgroundStatusOverlay} style={{ backgroundColor: `${backgroundColor}` }}></div>
    </div>
    <div className={classes.onlineStatusOverlay}></div>
  </div>
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
