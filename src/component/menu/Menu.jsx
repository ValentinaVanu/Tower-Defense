import React, { Fragment, useState } from "react";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Fab from "@material-ui/core/Fab";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import MoreIcon from "@material-ui/icons/MoreVert";
import { SliderMenu } from "../SliderMenu/SliderMenu";
import { useDispatch, useSelector } from "react-redux";
import { setSliderAction } from "../../store/slider-menu/slider-menu.action";
import { DropDown } from "../DropDown";

import * as SM from "./Menu.style";
import { setSelectedMonkeyAction } from "../../store/monkey/monkey.action";
// import { setMonkeyId } from "../../store/monkey/monkey.action";

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
  const [show, selected] = useSelector(({ slider }) => [
    slider.show,
    slider.selected,
  ]);
  // const [dragActive, setDragActive] = useState(false)
  const classes = SM.useStyles();

  const toggleSliderMenu = () => {
    dispatch(setSliderAction(!show));
  };

  // const handleMonkeyId = (e) => {
  //   dispatch(setMonkeyId(e.target.id))
  //   console.log(e.target.id)
  // }
  const handleSelectedMonkey = (e, selectedId) => {
    setSelectedMonkeyAction(+e.target.id === selectedId);
    console.log(+e.target.id === selectedId);
  };

  // console.log(selected.map(x =>x).map(y => y));
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
            // console.log(selectedName)
            return (
              <>
                {monkey.selectedName === MONKEY.DART && (
                  <SM.StyledFabContainer
                    key={key + 1}
                    id={monkey.selectedId}
                    // onClick={(e) => handleSelectedMonkey(e)}
                    onMouseEnter={(e) => handleSelectedMonkey(e, monkey.selectedId)}
                    // onMouseLeave={content.back && !isMobile ? handleClose : null}              
                    // onClick={(e) => console.log(+e.target.id, monkey.selectedId)}
                    >
                    <Fab
                      color="secondary"
                      aria-label="add"
                      className={classes.fabButton}
                      // id={(new Date()).getTime()}
                      // I NEVER CLICK HERE!!!
                      // EACH MONKEY GETS AND ID'
                      // I NOW NEED to check THIS id WITH THE
                      // monkey BEING DRAGGED
                      key={key + 1}
                    >
                      {parent === null ? draggableMonkey : null}
                    </Fab>
                  </SM.StyledFabContainer>
                )}
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
