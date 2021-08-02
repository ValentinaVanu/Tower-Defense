import React, { useState } from "react";
import ReactPlayer from "react-player";
import { useStyles } from "./Hero.styles";
import startImg from "../../image/start.jpg";
import { FadeInTitle } from "../../utils/FadeIn";
import { Button } from "@material-ui/core";
import { Paper } from "@material-ui/core";
import { navigate } from "@reach/router";

const Hero = () => {
  const [videoPlay, setVideoPlay] = useState(true);
  const classes = useStyles();

  const handleVideoEnded = () => {
    setVideoPlay(false);
  };
  const handleGetStarted = () => navigate("/logIn");

  return (
    <div className={classes.root}>
      {!videoPlay && (
        <Paper className={classes.paper}>
          <FadeInTitle>Welcome to Tower Defense</FadeInTitle>
        </Paper>
      )}
      {!videoPlay && (
        <FadeInTitle>
          <Button
            onClick={handleGetStarted}
            className={classes.button}
            variant="contained"
            color="primary"
          >
            Click here to get started
          </Button>
        </FadeInTitle>
      )}
      {videoPlay && (
        <ReactPlayer
          onEnded={handleVideoEnded}
          className="Bloons TD 6 - Teaser Roundup!"
          url="https://www.youtube.com/watch?v=dvcQY0v0Ow8"
          width="100vw"
          height="100%"
          playing={true}
          fallback={startImg}
          controls={true}
          muted={true}
        />
      )}
    </div>
  );
};

export { Hero };
