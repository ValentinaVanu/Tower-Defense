import React, { useState } from "react";
import { Field, Formik } from "formik";
import { validate, initialLogInValues } from "./validation";
import { navigate } from "@reach/router";
import { MainGrid } from "../MainGrid";
import { StyledPaper } from "./LogIn.style";
import { Background } from "../Background";
import {
  Button,
  Checkbox,
  FormControlLabel,
  Typography,
} from "@material-ui/core";

import * as SL from "./LogIn.style";
import { useDispatch } from "react-redux";
import { setUserAction } from "../../store/auth/auth.action";
import { auth, GitHubProvider } from "../../config/firestore";
import { useAuth } from "../../context/AuthContext";

const LogIn = () => {
  const dispatch = useDispatch();
  const [error, setError] = useState("");
  // const [loading, setLoading] = useState(false);
  const { login } = useAuth();

  const handleSignInWithGitHub = async () => {
    try {
      const {
        user: { uid, displayName, photoURL, email },
      } = await auth.signInWithPopup(GitHubProvider);
      dispatch(setUserAction({ uid, displayName, photoURL, email }));
      navigate("/profile");
    } catch (error) {
      console.log(error, "ops");
    }
  };

  const onSubmit = async (values) => {
    try {
      const {user: { displayName, email, idToken },
    } = await login(values.email, values.password)
    dispatch(setUserAction({ displayName, email, idToken }));
    navigate("/profile");
    } catch (error){
      setError(error)
    }
  };

  return (
    <Background>
      <MainGrid>
        <StyledPaper elevation={8}>
          <SL.StyledFormHeader to="/signUp">Sign Up</SL.StyledFormHeader>
          <SL.StyledFormTitle>Log In</SL.StyledFormTitle>
          <Typography onClick={handleSignInWithGitHub}>
            Sign in with Github
          </Typography>
          {/* {currentUser && (
            <Typography>You are logged in as {currentUser}</Typography>
          )} */}
          <Formik
            initialValues={initialLogInValues}
            validationSchema={validate}
          >
            {({ errors, touched, values }) => (
              <SL.StyledForm onSubmit={() => onSubmit(values)}>
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
