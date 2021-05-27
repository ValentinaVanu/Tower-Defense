import React, { useRef, useState } from "react";
import { Formik } from "formik";
import { MainGrid } from "../main-grid";
import { Button } from "@material-ui/core";
import { Background } from "../background";
import { initialSigninValues, validate } from "./validation";
import { useAuth } from "../context/auth-context";

import * as SS from "./sign-up.style";

const SignUp = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const usernameRef = useRef();

  async function handleSigninSubmit(e) {
    e.preventDefault();
    try {
      console.log("a mers");
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
    } catch {
      setError("Failed to log in");
    }
    setLoading(false);
  }

  return (
    <Background>
      <MainGrid>
        <SS.StyledPaper elevation={8}>
          <SS.StyledFormHeader to="/">Log in</SS.StyledFormHeader>
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
              handleSubmit,
              isSubmitting,
              setFieldValue,
            }) => (
              <SS.StyledForm onSubmit={handleSigninSubmit}>
                <SS.StyledTextField
                  label="Username"
                  variant="outlined"
                  type="text"
                  name="username"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.Username}
                  inputRef={emailRef}
                />
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

export { SignUp };
