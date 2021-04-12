import React, { Fragment } from "react";
import { Background } from "../background";
import { LogIn } from "../login";
import { SignUp } from "../sign-up/sign-up.component";

import * as SH from "./home.style";


const Home = () => {
 
  return (
    <Fragment>
      <LogIn />
      <SignUp />
    </Fragment>
  );
};

export { Home };
