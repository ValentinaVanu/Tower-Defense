import React from "react";
import store from "../../store";
import { StyledAppWrapper, StyledRouter } from "./App.style";
import { Play } from "../Play";
import { Provider } from "react-redux";
import { ParallaxContainer } from "../Parallax/Parallax";
import { HomePage } from "../../pages/HomePage/HomePage";
import { LogIn } from "../LogIn";
import { SignUp } from "../SignUp/SignUp";
import { Dashboard } from "../Dashboard";
import { AuthProvider } from "../../context/AuthContext";

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
              <Dashboard path="dashboard" />
              <Play path="play" />
            </StyledRouter>
        </AuthProvider>
      </StyledAppWrapper>
    </Provider>
  );
};

export { App };
