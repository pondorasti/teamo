import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const useStyles = makeStyles((theme) => ({
  avatarDiv: {
    // backgroundColor: 'currentColor',
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
    backgroundColor: '#1E1E1E',
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
    backgroundColor: '#141414',
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
}));

function TMAvatar({ alt, src, size, status }) {
  const classes = useStyles();
  const className = classNames({
    [classes.sizeSmall]: size === 'small',
    [classes.sizeMedium]: size === 'medium',
    [classes.sizeLarge]: size === 'large',
    // [classes.status]: status === 'online',
  });

  const large = (
    <div className={classes.largeStatusOverlay}>
      <div className={classes.largeGreenDot}></div>
    </div>
  );

  const small = (
    <div className={classes.smallStatusOverlay}>
      <div className={classes.smallGreenDot}></div>
    </div>
  );

  const largeOrSmall = <div> {size === 'large' ? large : small} </div>;

  const noStatus = <Avatar classes={{ root: className }} alt={alt} src={src} />;

  const withStatus = (
    <div className={classes.avatarDiv}>
      <Avatar
        classes={{ root: className }}
        alt={alt}
        src={src}
        // status={status}
      />
      {size === 'medium' ? '' : largeOrSmall}
    </div>
  );

  return <div>{status === 'online' ? withStatus : noStatus}</div>;
}

TMAvatar.propTypes = {
  alt: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  status: PropTypes.oneOf(['none', 'online']),
};

TMAvatar.defaultProps = {
  size: 'large',
  status: 'none',
};

export default TMAvatar;
