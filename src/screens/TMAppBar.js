import React from 'react'
import { AppBar, Toolbar, IconButton, Menu, MenuItem } from '@material-ui/core/'
import TMButton from '../atoms/TMButton'
import TMAvatar from '../atoms/TMAvatar'
import { makeStyles } from '@material-ui/styles'
import TeamoBanner from '../assets/images/TeamoBanner.png'

const useStyles = makeStyles(theme => ({
  appBarRoot: {
    backgroundColor: theme.palette.grey[900],
  },
  toolbarRoot: {
    padding: '0 32px 0 32px',
  },
  divSpacer: {
    flexGrow: 1,
  },
}))

function TMAppBar() {

  const classes = useStyles()
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return <>
    <AppBar
      classes={{ root: classes.appBarRoot }}
      position='fixed'
      elevation={0}
    >
      <Toolbar classes={{ root: classes.toolbarRoot }}>
        <img src={TeamoBanner} alt='Teamo Banner' />

        <div className={classes.divSpacer} />

        <TMButton size='small'>
          Create Lobby
        </TMButton>

        <IconButton
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleMenu}
          style={{ marginLeft: '4px' }}
        >
          <TMAvatar
            size='extraSmall'
            alt='Pondorasti'
            src='https://avatars0.githubusercontent.com/u/32957606?s=460&u=e631c3762c12d41f3ce0348b8137f0751a2eed75&v=4'
          />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          anchorOrigin={{ vertical: "top", horizontal: "left" }}
          transformOrigin={{ vertical: "top", horizontal: "right" }}
          keepMounted
          open={open}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>My Profile</MenuItem>
          <MenuItem onClick={handleClose}>Sign out</MenuItem>
        </Menu>

      </Toolbar>
    </AppBar>
    <Toolbar />
  </>
}

export default TMAppBar
