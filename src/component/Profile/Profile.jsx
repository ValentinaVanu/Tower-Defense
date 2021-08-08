import React from "react";
import { navigate } from "@reach/router";
import { Button, Typography } from "@material-ui/core";
import { ProfileChart } from "../Chart/Chart";
import { ProfileCard } from "./ProfileCard";

import { useStyles } from "./Profile.styles";
import { useDispatch, useSelector } from "react-redux";
import { logoutAction } from "../../store/auth/auth.action";

const Profile = () => {
  const currentUser = useSelector(({ auth }) => auth.user);
  const dispatch = useDispatch();
  const classes = useStyles();

  const logOut = () => {
      dispatch(logoutAction());
      navigate("/logIn");
  };

  const userName = currentUser.email.split("@")[0]

  return (
    <div className={classes.root}>
      <header className={classes.header}>
        {currentUser && (
          <>
            <Typography variant="h4">
              {userName}'s profile
            </Typography>
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
        <ProfileCard>
          <ProfileChart />
        </ProfileCard>
        <ProfileCard>List of Monkey Cards You Own</ProfileCard>
      </div>
    </div>
  );
};

export { Profile };
