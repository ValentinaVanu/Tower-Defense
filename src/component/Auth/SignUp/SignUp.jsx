import React, { useState } from "react";
import { Formik, Field } from "formik";
import { MainGrid } from "../../MainGrid";
import { Button } from "@material-ui/core";
import { initialSigninValues, validate } from "./validation";

import GitHubIcon from "@material-ui/icons/GitHub";
import * as SS from "../elements";
import { navigate } from "@reach/router";
import { useDispatch } from "react-redux";
import { auth, GitHubProvider } from "../../../config/firestore";
import { setUserAction } from "../../../store/auth/auth.action";
import { Background } from "../../Background";

const SignUp = () => {
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

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
    const {
      user: { uid, displayName, photoURL, email },
    } = await auth
      .createUserWithEmailAndPassword(values.email, values.password)
      .then((result) => {
        dispatch(setUserAction({ uid, displayName, photoURL, email }));
        if (values.password !== values.confirmPassword) {
          return setError("Passwords do not Match");
        }
      })
      .catch((error) => {
        setError("Failed to log in", error);
      });
    navigate("/logIn");
    setLoading(false);
  };

  return (
    <Background>
      <MainGrid>
        <SS.StyledPaper elevation={8}>
          <SS.StyledFormHeader to="/logIn">Log in</SS.StyledFormHeader>
          <SS.StyledFormTitle>Sign Up</SS.StyledFormTitle>
          <Formik
            initialValues={initialSigninValues}
            validationSchema={validate}
            onSubmit={onSubmit}
          >
            {({ errors, isValid, values }) => (
              <SS.StyledForm onSubmit={() => onSubmit(values)}>
                <Field
                  label="E-mail"
                  variant="outlined"
                  type="email"
                  name="email"
                  values={values.email}
                  as={SS.StyledTextField}
                />
                <Field
                  as={SS.StyledTextField}
                  label="Password"
                  variant="outlined"
                  type="password"
                  values={values.password}
                  name="password"
                />
                <Field
                  as={SS.StyledTextField}
                  label="Confirm Password"
                  variant="outlined"
                  type="password"
                  name="confirmPassword"
                />
                {error && <span>{error}</span>}
                <SS.BottomSection>
                  <Button
                    color="primary"
                    disabled={isValid}
                    variant="contained"
                    type="submit"
                  >
                    Submit
                  </Button>
                  <SS.GithubPopup onClick={handleSignInWithGitHub}>
                    Log in with Github{" "}
                    <GitHubIcon
                      fontSize="small"
                      style={{ marginLeft: "8px" }}
                    />
                  </SS.GithubPopup>
                  <SS.StyledLink to="/">Go back</SS.StyledLink>
                </SS.BottomSection>
              </SS.StyledForm>
            )}
          </Formik>
        </SS.StyledPaper>
      </MainGrid>
    </Background>
  );
};

export { SignUp };
