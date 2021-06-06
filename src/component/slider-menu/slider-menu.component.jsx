import React, { Fragment, useState } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import { monkeyList } from "./config";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedMonkey } from "../../store/slider-menu/slider-menu.action";

import * as SS from "./slider-menu.style";

const SliderMenu = ({ show }) => {
  const dispatch = useDispatch();
  const selectedMonkey = useSelector(({ slider }) => slider.selected);
  const classes = SS.useStyles();

  const handleSelectedMonkey = (name) => {
    dispatch(setSelectedMonkey(name));
  };
  console.log(selectedMonkey);
  return (
    <SS.StyledSSPaper show={show}>
      <List className={classes.root}>
        {monkeyList.map(({ name, image, description }) => {
          console.log(name);
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
