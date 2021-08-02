import React, { useState } from "react";
import { Field, Formik } from "formik";
import { validate, initialLogInValues } from "./validation";
import { navigate } from "@reach/router";
import { MainGrid } from "../MainGrid";
import { StyledPaper } from "./LogIn.style";
import { Background } from "../Background";
import { Button, Checkbox, FormControlLabel, Typography } from "@material-ui/core";


import * as SL from "./LogIn.style";
import { useDispatch } from "react-redux";
import { setUserAction } from "../../store/auth/auth.action";
import { auth, GitHubProvider } from "../../config/firestore";

const LogIn = () => {
  const dispatch = useDispatch()
  const [error, setError] = useState("");
  // const [loading, setLoading] = useState(false);

  const handleSignInWithGitHub = async () => {
    try{
      const { user: { uid, displayName, photoURL, email } } = await auth.signInWithPopup(GitHubProvider)
      console.log(uid, displayName, photoURL, email)
      dispatch(setUserAction({uid, displayName, photoURL, email}))
      navigate("/profile")
    } catch (error) {
      console.log(error,"ops")
    }
  }

  const handleSignInWithEmail = async (values) => {
    try {
      setError("");
      // setLoading(true);
      await auth.createUserWithEmailAndPassword(
        values.email, values.password
        )
    } catch {
      setError("Ops, something went wrong");
    }
    // setLoading(false);
    // navigate("/play");
  }



  return (
    <Background>
      <MainGrid>
        <StyledPaper elevation={8}>
          <SL.StyledFormHeader to="/signUp">Sign Up</SL.StyledFormHeader>
          <SL.StyledFormTitle>Log In</SL.StyledFormTitle>
          <Typography onClick={handleSignInWithGitHub}>Sign ip with Github</Typography>
          <Formik
            initialValues={initialLogInValues}
            validationSchema={validate}
            onSubmit={handleSignInWithEmail}
          >
            {({ errors, touched, handleSubmit, values }) => (
              <SL.StyledForm onSubmit={handleSignInWithEmail}>
                <Field
                  as={SL.StyledTextField}
                  label="E-mail"
                  variant="outlined"
                  name="email"
                  type="email"
                />
                {errors.email && touched.email && errors.email}
                <Field
                  as={SL.StyledTextField}
                  label="Password"
                  name="password"
                  variant="outlined"
                  values={values.password}
                  type="password"
                />
                <FormControlLabel
                  control={<Checkbox />}
                  color="primary"
                  label="Accept Terms and Conditions"
                />
                {errors.password && touched.password && errors.password}
                {error}
                <Button variant="contained" type="submit">
                  Log in
                </Button>
                <SL.StyledLink to="/sign-up">Create an account</SL.StyledLink>
              </SL.StyledForm>
            )}
          </Formik>
        </StyledPaper>
      </MainGrid>
    </Background>
  );
};

export { LogIn };
