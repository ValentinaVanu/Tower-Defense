import React, { useState } from "react";
import ReactPlayer from 'react-player'
import { useStyles } from "./Hero.styles";
import jungleBackground from "../../image/jungleBackground.jpg";

const Hero = () => {
  const [videoPlay, setVideoPlay] = useState(true)
  const classes = useStyles();

  const handleVideoEnded = () => {
    setVideoPlay(false)
  }

  return (
    <div className={classes.root}>
      {videoPlay && <ReactPlayer
          onEnded={handleVideoEnded}
          className='Bloons TD 6 - Teaser Roundup!'
          url='https://www.youtube.com/watch?v=dvcQY0v0Ow8'
          width='100%'
          height='100%'
          fallback={jungleBackground}
          controls={true}
        />}
      {/* <CardMedia
        onError={handleImageError}
        className={classes.root}
        src={heroVideo}
        component="iframe"
        allow="autoPlay"
        controls
      /> */}
    </div>
  );
};

export { Hero };
