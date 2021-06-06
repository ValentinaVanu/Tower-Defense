import React, { Fragment } from "react";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Fab from "@material-ui/core/Fab";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import MoreIcon from "@material-ui/icons/MoreVert";
import { SliderMenu } from "../slider-menu/slider-menu.component";
import { useDispatch, useSelector } from "react-redux";
import DartMonkeyImg from "../../image/DartMonkey.png";
import DruidMonkeyImg from "../../image/DruidMonkey.png";
import MageMonkeyImg from "../../image/MageMonkey.webp";
import { setSliderAction } from "../../store/slider-menu/slider-menu.action";
import { DropDown } from "../drop-down";

import * as SM from "./menu.style";

// const monkeyTypes = {
//   dartMonkey: DartMonkeyImg,
//   druidMonkey: DruidMonkeyImg,
//   mageMonkey: MageMonkeyImg,
// };

const Menu = ({ parent, draggableMonkey }) => {
  const dispatch = useDispatch();
  const classes = SM.useStyles();
  const [show, selected] = useSelector(({ slider }) => [
    slider.show,
    slider.selected,
  ]);

  const toggleSliderMenu = () => {
    dispatch(setSliderAction(!show));
  };

  return (
    <Fragment>
      <SM.StyledAppBar
        position="fixed"
        color="primary"
        className={classes.appBar}
      >
        <Toolbar>
          <IconButton
            onClick={toggleSliderMenu}
            edge="start"
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>
          {selected && (
            <SM.StyledFabContainer>
              <Fab
                color="secondary"
                aria-label="add"
                className={classes.fabButton}
              >
                {parent === null ? draggableMonkey : null}
              </Fab>
            </SM.StyledFabContainer>
          )}
          <div className={classes.grow} />
          <IconButton color="inherit">
            <SearchIcon />
          </IconButton>
          <IconButton edge="end" color="inherit">
            <DropDown />
            <MoreIcon />
          </IconButton>
        </Toolbar>
      </SM.StyledAppBar>
      <SliderMenu show={show} />
    </Fragment>
  );
};
export { Menu };
