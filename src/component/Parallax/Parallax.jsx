import React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { useStyles } from "./Parallax.styles";
import MageMonkey from "../../image/MageMonkey.webp";
import DruidMonkey from "../../image/DruidMonkey.png";
import GlueGunner from "../../image/GlueGunner.webp";
import DartMonkey from "../../image/DartMonkey.png";

export const ParallaxContainer = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Parallax pages={3}>
        <ParallaxLayer
          offset={1}
          speed={1}
          style={{ backgroundColor: "#805E73" }}
        />
        <ParallaxLayer
          offset={2}
          speed={1}
          style={{ backgroundColor: "#253237" }}
        />
        <ParallaxLayer
          offset={0}
          speed={0.5}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "start",
            color: "#0a8926",
            fontSize: '40px',
            zIndex: 999,
          }}
        >
          <p>Welcome to my awesome page!</p>{" "}
        </ParallaxLayer>
        <ParallaxLayer
          offset={0}
          speed={0}
          factor={3}
          className={classes.dartMonkeyLayer}
        />

        <ParallaxLayer
          offset={1.3}
          speed={-0.3}
          style={{ pointerEvents: "none" }}
        >
          <img src={MageMonkey} className={classes.mageMonkeyLayer} />
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.8} style={{ opacity: 0.1 }}>
          <img
            src={DruidMonkey}
            style={{ display: "block", width: "20%", marginLeft: "55%" }}
          />
          <img
            src={GlueGunner}
            style={{ display: "block", width: "10%", marginLeft: "15%" }}
          />
        </ParallaxLayer>

        <ParallaxLayer offset={1.75} speed={0.5} style={{ opacity: 0.1 }}>
          <img
            src={MageMonkey}
            style={{ display: "block", width: "20%", marginLeft: "70%" }}
          />
          <img
            src={DartMonkey}
            style={{ display: "block", width: "20%", marginLeft: "40%" }}
          />
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.2} style={{ opacity: 0.2 }}>
          <img
            src={DartMonkey}
            style={{ display: "block", width: "10%", marginLeft: "10%" }}
          />
          <img
            src={DruidMonkey}
            style={{ display: "block", width: "20%", marginLeft: "75%" }}
          />
        </ParallaxLayer>

        <ParallaxLayer offset={1.6} speed={-0.1} style={{ opacity: 0.4 }}>
          <img
            src={GlueGunner}
            style={{ display: "block", width: "20%", marginLeft: "60%" }}
          />
          <img
            src={DartMonkey}
            style={{ display: "block", width: "25%", marginLeft: "30%" }}
          />
          <img
            src={DruidMonkey}
            style={{ display: "block", width: "10%", marginLeft: "80%" }}
          />
        </ParallaxLayer>

        <ParallaxLayer offset={2.6} speed={0.4} style={{ opacity: 0.6 }}>
          <img
            src={GlueGunner}
            style={{ display: "block", width: "20%", marginLeft: "5%" }}
          />
          <img
            src={DruidMonkey}
            style={{ display: "block", width: "15%", marginLeft: "75%" }}
          />
        </ParallaxLayer>

        <ParallaxLayer
          offset={2.5}
          speed={-0.4}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            pointerEvents: "none",
          }}
        >
          <img src={MageMonkey} />
        </ParallaxLayer>

        <ParallaxLayer
          offset={2}
          speed={-0.3}
          className={classes.dartMonkeyLayer}
        />
      </Parallax>
    </div>
  );
};
