import React, { useState } from "react";
import { Field, Formik } from "formik";
import { validate, initialLogInValues } from "./validation";
import { navigate } from "@reach/router";
import { post } from 'axios';
import { MainGrid } from "../../MainGrid";
import { StyledPaper } from "../elements";
import { Background } from "../../Background";
import { Button, Typography } from "@material-ui/core";

import GitHubIcon from "@material-ui/icons/GitHub";
import * as SL from "../elements";
import { useDispatch, useSelector } from "react-redux";
import { setUserAction } from "../../../store/auth/auth.action";
import { auth, firebaseConfig, GitHubProvider } from "../../../config/firestore";
import { useAuth } from "../../../context/AuthContext";

const LogIn = () => {
  const dispatch = useDispatch();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const currentUser = useSelector(({ auth }) => auth.user);

  const handleSignInWithGitHub = async () => {
    setLoading(true);
    try {
      const {
        user: { uid, displayName, photoURL, email },
      } = await auth.signInWithPopup(GitHubProvider);

      dispatch(setUserAction({ uid, displayName, photoURL, email }));
      navigate("/dashboard");
    } catch (error) {
      console.log(error, "ops");
    }
    setLoading(false);
  };

  const onSubmit = async (values) => {
    setLoading(true);
    const newUserData = {
      email: values.email,
      password: values.password,
      returnSecureToken: true
    }
    try {
      post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${firebaseConfig.apiKey}`, newUserData)
      .then(res => {
        console.log(res)
        // On this response I will set the user
        // It tells if the account exists or not
        // https://firebase.google.com/docs/reference/rest/auth
        // EX: EMAIL_NOT_FOUND, INVALID_PASSWORD, USER_DISABLED
      })
      const {
        user: {
          createdAt,
          email,
          emailVerified,
          lastLoginAt,
          lastRefreshAt,
          localId,
          photoUrl,
          screenName,
          providerUserInfo,
        },
      } = await login(values.email, values.password);
      dispatch(
        setUserAction({
          createdAt,
          email,
          emailVerified,
          lastLoginAt,
          lastRefreshAt,
          localId,
          photoUrl,
          screenName,
          providerUserInfo,
        })
      );
      navigate("/dashboard");
    } catch (error) {
      setError(error);
    }
    setLoading(false);
  };

  return (
    <Background>
      <MainGrid>
        <StyledPaper elevation={8}>
          <SL.StyledFormHeader to="/signUp">Sign Up</SL.StyledFormHeader>
          <SL.StyledFormTitle>Log In</SL.StyledFormTitle>
          {currentUser && (
            <Typography>You are logged in as {currentUser.email}</Typography>
          )}
          {currentUser && currentUser.providerUserInfo && (
            <Typography>
              You are logged in as{" "}
              {currentUser.providerUserInfo.map(({ screenName }) => screenName)}
            </Typography>
          )}
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
                <SL.BottomSection>
                  {errors.password && touched.password && errors.password}
                  {error}
                  <Button variant="contained" type="submit">
                    Log in
                  </Button>
                  <SL.GithubPopup onClick={handleSignInWithGitHub}>
                    Log in with Github{" "}
                    <GitHubIcon
                      fontSize="small"
                      style={{ marginLeft: "8px" }}
                    />
                  </SL.GithubPopup>
                  <SL.StyledLink to="/sign-up">Create an account</SL.StyledLink>
                </SL.BottomSection>
              </SL.StyledForm>
            )}
          </Formik>
        </StyledPaper>
      </MainGrid>
    </Background>
  );
};

export { LogIn };
