import React, { useState } from "react";
import { useAuth } from "../Context/AuthContext";
import { navigate } from "@reach/router";
import { Button, Typography } from "@material-ui/core";
import { ProfileChart } from "../Chart";
import { ProfileCard } from "./ProfileCard";

import { useStyles } from "./Profile.styles";

const Profile = () => {
  const { currentUser, logout } = useAuth();
  const [error, setError] = useState("");
  const classes = useStyles();

  async function handleLogout() {
    setError("");

    try {
      await logout();
      navigate("/");
    } catch {
      setError("Failed to log out");
    }
  }

  return (
    <div className={classes.root}>
      <header className={classes.header}>
        {currentUser && (
          <Typography variant="h3">{currentUser}'s profile</Typography>
        )}
        {currentUser && (
          <Typography varinat="h4">Email: {currentUser.email}</Typography>
        )}
        <Button
          className={classes.logout}
          variant="outlined"
          color="primary"
          onClick={handleLogout}
        >
          Log Out
        </Button>
      </header>
      {error && <Typography>{error}</Typography>}
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
