import React, { useRef, useState } from "react";
import { Formik, Field } from "formik";
import { MainGrid } from "../MainGrid";
import { Button } from "@material-ui/core";
import { Background } from "../Background";
import { initialSigninValues, validate } from "./validation";
import { useAuth } from "../Context/AuthContext";

import * as SS from "./SignUp.styles";
import { navigate } from "@reach/router";

const SignUp = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passworConfirmRef = useRef();
  const { signup, currentUser } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSigninSubmit(e) {
    // e.preventDefault();
    if (passwordRef.current.value !== passworConfirmRef.current.value) {
      return setError("Passwords do not Match");
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
    navigate("/logIn");
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
            {({ values, errors }) => (
              <SS.StyledForm>
                {currentUser && currentUser.email}
                <Field
                  label="E-mail"
                  variant="outlined"
                  type="email"
                  name="email"
                  as={SS.StyledTextField}
                  inputRef={emailRef}
                />
                <Field
                  as={SS.StyledTextField}
                  label="Password"
                  variant="outlined"
                  type="password"
                  name="password"
                  inputRef={passwordRef}
                />
                <Field
                  as={SS.StyledTextField}
                  label="Confirm Password"
                  variant="outlined"
                  type="password"
                  name="confirmPassword"
                  inputRef={passworConfirmRef}
                />
                {error && <span>{error}</span>}
                {console.log(values)}
                <Button variant="contained" type="submit">
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
