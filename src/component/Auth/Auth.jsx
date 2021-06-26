import React, { Fragment } from "react";
// import { AuthProvider } from "../Context/auth-context";
import { LogIn } from "../LogIn";
// import { LogIn } from "../Login";
// import { SignUp } from "../SignUp/SignUp";


const Auth = () => {
 
  return (
    <Fragment>
     {/* <AuthProvider> */}
        <LogIn />
        {/* <SignUp /> */}
     {/* </AuthProvider> */}
    </Fragment>
  );
};

export { Auth };
