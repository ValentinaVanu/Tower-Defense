import React, { useRef, useState } from "react";
import { Field, Formik } from "formik";
import { validate, initialLogInValues } from "./validation";
import { navigate } from "@reach/router";
import { useAuth } from "../Context/auth-context";
import { MainGrid } from "../MainGrid";
import { StyledPaper } from "./LogIn.style";
import { Background } from "../Background";
import { Button, Checkbox, FormControlLabel } from "@material-ui/core";


import * as SL from "./LogIn.style";

const LogIn = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login, currentUser } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    // e.preventdefault()

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
    } catch {
      setError("Ops, something went wrong");
    }
    setLoading(false);
    navigate("/play");
  }

  return (
    <Background>
      <MainGrid>
        <StyledPaper elevation={8}>
          <SL.StyledFormHeader to="/signUp">Sign Up</SL.StyledFormHeader>
          <SL.StyledFormTitle>Log In</SL.StyledFormTitle>
          <Formik
            initialValues={initialLogInValues}
            validationSchema={validate}
            onSubmit={handleSubmit}
          >
            {({ errors, touched, handleSubmit }) => (
              <SL.StyledForm onSubmit={handleSubmit}>
                {currentUser && currentUser.email}
                <Field
                  as={SL.StyledTextField}
                  label="E-mail"
                  variant="outlined"
                  type="email"
                  name="email"
                  inputRef={emailRef}
                />
                {errors.email && touched.email && errors.email}
                <Field
                  as={SL.StyledTextField}
                  label="Password"
                  variant="outlined"
                  type="password"
                  name="password"
                  inputRef={passwordRef}
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
