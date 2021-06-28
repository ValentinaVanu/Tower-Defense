import React, { Fragment } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import { monkeyList } from "./config";
import { useDispatch, useSelector } from "react-redux";

import * as SS from "./SliderMenustyle";
import { setMonkeyId } from "../../store/monkey/monkey.action";
import { setSelectedMonkey } from "../../store/slider-menu/slider-menu.action";

const SliderMenu = ({ show }) => {
  const dispatch = useDispatch();
  const [selectedMonkey, monkeyId] = useSelector(({ slider, monkey }) => [slider.selected, monkey.id]);
  const classes = SS.useStyles();

  const handleSelectedMonkey = (selectedName) => {
    let selectedId =  Math.floor(Math.random() * 99)
    dispatch(setSelectedMonkey(selectedName, selectedId));
    dispatch(setMonkeyId(Math.floor(Math.random() * 99)))
    // console.log(selectedName)
  };
  return (
    <SS.StyledSSPaper show={show}>
      <List className={classes.root}>
        {monkeyList.map(({ name, image, description }) => {
          return (
            <Fragment key={name}>
              <ListItem
                onClick={() => handleSelectedMonkey(name)}
                alignItems="flex-start"
              >
                <ListItemText
                  primary={name}
                  secondary={
                    <React.Fragment>
                      <Typography
                        component="span"
                        variant="body2"
                        className={classes.inline}
                        color="textPrimary"
                      >
                        {description}
                      </Typography>
                      {"---Click on dart monkey and place on map"}
                    </React.Fragment>
                  }
                />
                <ListItemAvatar>
                  <Avatar alt={name} src={image} />
                </ListItemAvatar>
              </ListItem>
            </Fragment>
          );
        })}
        <Divider variant="inset" component="li" />
      </List>
    </SS.StyledSSPaper>
  );
};

export { SliderMenu };
