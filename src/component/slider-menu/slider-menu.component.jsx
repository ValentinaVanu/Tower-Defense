import React, { Fragment, useState } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import { monkeyList } from './config'


import * as SS from './slider-menu.style'

const SliderMenu = ({ show }) => {
  const [selectedMonkey, setSelectedMonkey] = useState()
  const classes = SS.useStyles();

  const handleSelectedMonkey = (monkeyName) => {
    setSelectedMonkey(monkeyName)
  }
  
  return (
    <SS.StyledSSPaper show={show}>
      <List className={classes.root}>
        {monkeyList.map(({name, path, description})=> {
          return(
            <Fragment key={name}>
              <ListItem onClick={() => handleSelectedMonkey(name)} alignItems="flex-start">
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
                  <Avatar alt={name} src={path} />
                </ListItemAvatar>
              </ListItem>
            </Fragment>
          )
        })}
        <Divider variant="inset" component="li" />
      </List>
    </SS.StyledSSPaper>
  );
};

export { SliderMenu };