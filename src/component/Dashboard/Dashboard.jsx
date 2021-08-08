import React from "react";
import { navigate } from "@reach/router";
import { Button, Typography } from "@material-ui/core";
import { DashboardChart } from "../Chart/Chart";
import { DashboardCard } from "./DashboardCard";

import { useStyles } from "./Dashboard.styles";
import { useDispatch, useSelector } from "react-redux";
import { logoutAction } from "../../store/auth/auth.action";

const Dashboard = () => {
  const currentUser = useSelector(({ auth }) => auth.user);
  const dispatch = useDispatch();
  const classes = useStyles();

  const logOut = () => {
    dispatch(logoutAction());
    navigate("/logIn");
  };

  const userName = currentUser.email.split("@")[0];

  return (
    <div className={classes.root}>
      <header className={classes.header}>
        {currentUser && (
          <>
            <Typography variant="h4">{userName}'s profile</Typography>
            <Typography varinat="h4">Email: {currentUser.email}</Typography>
          </>
        )}
        <Button
          className={classes.logout}
          variant="outlined"
          color="primary"
          onClick={logOut}
        >
          Log Out
        </Button>
      </header>
      <div className={classes.cardSection}>
        <DashboardCard>
          <DashboardChart />
        </DashboardCard>
        <DashboardCard>List of Monkey Cards You Own</DashboardCard>
      </div>
    </div>
  );
};

export { Dashboard };
