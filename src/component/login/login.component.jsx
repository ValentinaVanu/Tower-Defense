import React, { useRef, useState } from "react";
import { Formik } from "formik";
import { validate, initialLogInValues, initialLogInLabels } from "./validation";
import { MainGrid } from "../main-grid";
import { StyledPaper } from "./login.style";
import { Background } from "../background";
import { Button } from "@material-ui/core";

import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { useAuth } from "../context/auth-context";

import * as SL from "./login.style";

const LogIn = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  console.log(emailRef, passwordRef);

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setLoading(true);
    await login(emailRef.current.value, passwordRef.current.value);
    setLoading(false);
  }

  return (
    <Background>
      <MainGrid>
        <StyledPaper elevation={8}>
          <SL.StyledFormHeader to="/sign-up">Sign Up</SL.StyledFormHeader>
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
