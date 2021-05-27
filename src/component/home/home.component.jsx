import React, { Fragment } from "react";
import { Background } from "../background";
import { AuthProvider } from "../context/auth-context";
import { LogIn } from "../login";
import { SignUp } from "../sign-up/sign-up.component";

import * as SH from "./home.style";


const Home = () => {
 
  return (
    <Fragment>
     {/* <AuthProvider> */}
        <LogIn />
        <SignUp />
     {/* </AuthProvider> */}
    </Fragment>
  );
};

export { Home };
