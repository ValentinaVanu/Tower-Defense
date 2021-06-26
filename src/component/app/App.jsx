import React from "react";
import store from "../../store";
// import { Background } from '../background/background.component';
import { LogIn } from "../LogIn";
import { Menu } from "../Menu";
import { StyledAppWrapper, StyledRouter } from "./App.style";
import { Play } from "../Play";
import { Provider } from "react-redux";
import { SignUp } from "../SignUp/SignUp";
import { AuthProvider } from "../Context/auth-context";
import { Auth } from "../Auth";
import { ParallaxContainer } from "../Parallax/Parallax";

const App = () => {
  return (
    <Provider store={store}>
      <StyledAppWrapper>
        <AuthProvider>
          <StyledRouter>
            {/* <Home path="/" /> */}
            <ParallaxContainer path='/'/>
            <Auth path="/auth" />
            {/* <LogIn path="/login" />
            <SignUp path="/sign-up" /> */}
            <Play path="/play" />
          </StyledRouter>
        </AuthProvider>
      </StyledAppWrapper>
    </Provider>
  );
};

export { App };
