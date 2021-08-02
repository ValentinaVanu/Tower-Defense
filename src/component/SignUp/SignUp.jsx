import React, { useState } from "react";
import { Formik, Field } from "formik";
import { MainGrid } from "../MainGrid";
import { Button } from "@material-ui/core";
import { Background } from "../Background";
import { initialSigninValues, validate } from "./validation";

import * as SS from "./SignUp.styles";
import { navigate } from "@reach/router";
import { auth } from "../../config/firestore";

const SignUp = () => {
  const [error, setError] = useState("");
  // const [loading, setLoading] = useState(false);

  const onSubmit = async (values) => {
    try {
      await auth.createUserWithEmailAndPassword(values.email, values.password)
      if( values.password !== values.confirmPassword) {
        return setError("Passwords do not Match")
      }
    } catch (error) {
      setError("Failed to log in")
    }
    navigate("/logIn")
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
            onSubmit={onSubmit}
          >
            {({ values, errors }) => (
              <SS.StyledForm>
                <Field
                  label="E-mail"
                  variant="outlined"
                  type="email"
                  name="email"
                  as={SS.StyledTextField}
                />
                <Field
                  as={SS.StyledTextField}
                  label="Password"
                  variant="outlined"
                  type="password"
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
