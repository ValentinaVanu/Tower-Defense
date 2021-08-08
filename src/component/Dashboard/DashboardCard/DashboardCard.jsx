import React from "react";
import { Paper } from "@material-ui/core";
import { useStyles } from "./DashboardCard.styles";

export const DashboardCard = ({ children }) => {
  const classes = useStyles();
  return (
    <Paper elevation={6} rounded className={classes.root}>
      {children}
    </Paper>
  );
};
