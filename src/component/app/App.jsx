import React from "react";
import store from "../../store";
import { AuthProvider } from "../Context/AuthContext";
import { StyledAppWrapper, StyledRouter } from "./App.style";
import { Play } from "../Play";
import { Provider } from "react-redux";
import { ParallaxContainer } from "../Parallax/Parallax";
import { HomePage } from "../../pages/HomePage/HomePage";
import { LogIn } from "../LogIn";
import { SignUp } from "../SignUp/SignUp";
import { Profile } from "../Profile";
import {
  createMemorySource,
  createHistory,
  LocationProvider,
} from "@reach/router";

const App = () => {
  return (
    <Provider store={store}>
      <StyledAppWrapper>
        <AuthProvider>
            <StyledRouter>
              <HomePage path="/" />
              <ParallaxContainer path="parallax" />
              <LogIn path="/logIn" />
              <SignUp path="signUp" />
              <Profile path="profile" />
              <Play path="play" />
            </StyledRouter>
        </AuthProvider>
      </StyledAppWrapper>
    </Provider>
  );
};

export { App };
