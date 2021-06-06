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
import { setMonkeyId } from "../../store/monkey/monkey.action";

// const monkeyTypes = {
//   dartMonkey: DartMonkeyImg,
//   druidMonkey: DruidMonkeyImg,
//   mageMonkey: MageMonkeyImg,
// };

const MONKEY = {
  DRUID: "DruidMonkey",
  DART: "DartMonkey",
  WIZARD: "WizardMonkey",
};

const Menu = ({ parent, draggableMonkey }) => {
  const dispatch = useDispatch();
  const classes = SM.useStyles();
  const [show, selected, monkeyId] = useSelector(({ slider, monkey }) => [
    slider.show,
    slider.selected,
    monkey.id
  ]);

  const toggleSliderMenu = () => {
    dispatch(setSliderAction(!show));
  };

  const handleMonkeyId = (e) => {
    dispatch(setMonkeyId(e.target.id))
    console.log(e.target.id)
  }
console.log(monkeyId)
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
          {selected?.map((monkey, key) => {
            return (
              <>
                {monkey === MONKEY.DART && <SM.StyledFabContainer key={key + 1}>
                  <Fab
                    color="secondary"
                    aria-label="add"
                    className={classes.fabButton}
                    id={(new Date()).getTime()}
                    // I NEVER CLICK HERE!!!
                    // EACH MONKEY GETS AND ID'
                    // I NOW NEED to check THIS id WITH THE
                    // monkey BEING DRAGGED
                    // onClick={(e) => console.log('wtf?')}
                    key={key + 1}
                  >
                    {parent === null ? draggableMonkey : null}
                  </Fab>
                </SM.StyledFabContainer>}
              </>
            );
          })}
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
