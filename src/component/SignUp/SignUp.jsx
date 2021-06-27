import React, { useRef, useState } from "react";
import { Formik } from "formik";
import { MainGrid } from "../MainGrid";
import { Button } from "@material-ui/core";
import { Background } from "../Background";
import { initialSigninValues, validate } from "./validation";
import { useAuth } from "../Context/auth-context";

import * as SS from "./SignUp.styles";
import { auth } from "../../config/firestore";
import { navigate } from "@reach/router";

const SignUp = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passworConfirmRef = useRef();
  const { signup, currentUser } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const usernameRef = useRef();

  async function handleSigninSubmit(e) {
    e.preventDefault();
    if (passwordRef.current.value !== passworConfirmRef.current.value) {
      return setError('Passwords do not Match')
    }
    try {
      console.log("a mers");
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
    } catch {
      setError("Failed to log in");
    }
    setLoading(false);
    navigate('/logIn')
  }

  return (
    <Background>
      <MainGrid>
        <SS.StyledPaper elevation={8}>
          <SS.StyledFormHeader to="/logIn">Log in</SS.StyledFormHeader>
          <SS.StyledFormTitle>Sign Up</SS.StyledFormTitle>
          <Formik
            initialValues={initialSigninValues}
            validationSchema={validate}
            onSubmit={handleSigninSubmit}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              isValid,
              handleSubmit,
              isSubmitting,
              setFieldValue,
            }) => (
              <SS.StyledForm onSubmit={handleSigninSubmit}>
                {currentUser && currentUser.email}
                {/* <SS.StyledTextField
                  label="Username"
                  variant="outlined"
                  type="text"
                  name="username"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.Username}
                  inputRef={emailRef}
                /> */}
                <SS.StyledTextField
                  label="E-mail"
                  variant="outlined"
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  inputRef={emailRef}
                />
                <SS.StyledTextField
                  label="Password"
                  variant="outlined"
                  type="password"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  inputRef={passwordRef}
                />
                <SS.StyledTextField
                  label="Confirm Password"
                  variant="outlined"
                  type="password"
                  name="confirmPassword"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.confirmPassword}
                  inputRef={passworConfirmRef}
                />
                  {error && <span>{error}</span>}
                <Button
                  variant="contained"
                  type="submit"
                >
                  Submit
                </Button>
                <SS.StyledLink to="/">Go back</SS.StyledLink>
              </SS.StyledForm>
            )}
          </Formik>
        </SS.StyledPaper>
      </MainGrid>
    </Background>
  );
};

export { SignUp }
