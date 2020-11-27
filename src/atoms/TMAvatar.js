import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const useStyles = makeStyles((theme) => ({
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
}));

function TMAvatar({ alt, src, size, status }) {
  const classes = useStyles();
  const className = classNames({
    [classes.sizeSmall]: size === 'small',
    [classes.sizeMedium]: size === 'medium',
    [classes.sizeLarge]: size === 'large',
    [classes.status]: status === 'online',
  });

  return (
    <Avatar classes={{ root: className }} alt={alt} src={src} status={status} />
  );
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
