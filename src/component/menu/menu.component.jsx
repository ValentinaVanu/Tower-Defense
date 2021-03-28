import React, { Fragment } from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Fab from '@material-ui/core/Fab';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import MoreIcon from '@material-ui/icons/MoreVert';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { Link } from '@reach/router';

import * as SM from './menu.style';



const Menu = () => {

    const classes = SM.useStyles();
    return (
      <Fragment>
        <SM.StyledAppBar position="fixed" color="primary" className={classes.appBar}>
          <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="open drawer">
              <MenuIcon />
            </IconButton>
            <Link to="/login">
              <Fab color="secondary" aria-label="add" className={classes.fabButton}>
                <AccountCircleIcon />
              </Fab>
            </Link>
            <div className={classes.grow} />
            <IconButton color="inherit">
              <SearchIcon />
            </IconButton>
            <IconButton edge="end" color="inherit">
              <MoreIcon />
            </IconButton>
          </Toolbar>
        </SM.StyledAppBar>
      </Fragment>
  )
}
export { Menu };