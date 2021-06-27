import React, { useRef, useState } from "react";
import { Formik } from "formik";
import { validate, initialLogInValues, initialLogInLabels } from "./validation";
import { MainGrid } from "../MainGrid";
import { StyledPaper } from "./LogIn.style";
import { Background } from "../Background";
import { Button } from "@material-ui/core";

import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { useAuth } from "../Context/auth-context";

import * as SL from "./LogIn.style";
import { navigate } from "@reach/router";

const LogIn = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login, currentUser} = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    // e.preventdefault()

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
    } catch {
      setError('Ops, something went wrong')
    }
    setLoading(false);
    navigate('/play')
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
              <SL.StyledForm onSubmit={handleSubmit}>
                {currentUser && currentUser.email}
                <SL.StyledTextField
                  label="E-mail"
                  variant="outlined"
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  inputRef={emailRef}
                />
                {errors.email && touched.email && errors.email}
                <SL.StyledTextField
                  label="Password"
                  variant="outlined"
                  type="password"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  inputRef={passwordRef}
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
