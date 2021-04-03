import React, { Fragment } from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Fab from '@material-ui/core/Fab';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import MoreIcon from '@material-ui/icons/MoreVert';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { Link } from '@reach/router';
import { SliderMenu } from '../slider-menu/slider-menu.component';
import { useDispatch, useSelector } from 'react-redux';
import DartMonkeyImg from '../../image/DartMonkey.png'

import * as SM from './menu.style';
import { setSliderAction } from '../../store/slider-menu/slider-menu.action';

const Menu = () => {
  const dispatch = useDispatch()
  const show = useSelector(({ slider }) => slider.show)

  const toggleSliderMenu = () => {
    dispatch(setSliderAction(!show))
  }

  const selectMonkey = () => {
    console.log('gonna add more monkeys to select from')
  }

    const classes = SM.useStyles();
    return (
      <Fragment>
        <SM.StyledAppBar position="fixed" color="primary" className={classes.appBar}>
          <Toolbar>
            <IconButton onClick={toggleSliderMenu} edge="start" color="inherit" aria-label="open drawer">
              <MenuIcon />
            </IconButton>
            {/* <Link to="/login"> */}
              <Fab onClick={selectMonkey} color="secondary" aria-label="add" className={classes.fabButton}>
                <img width='50px' height='50px' src={DartMonkeyImg} alt="DartMonkey"/>
                {/* <AccountCircleIcon /> */}
              </Fab>
            {/* </Link> */}
            <div className={classes.grow} />
            <IconButton color="inherit">
              <SearchIcon />
            </IconButton>
            <IconButton edge="end" color="inherit">
              <MoreIcon />
            </IconButton>
          </Toolbar>
        </SM.StyledAppBar>
        <SliderMenu show={show}/>
      </Fragment>
  )
}
export { Menu };