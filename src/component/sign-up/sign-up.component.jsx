import { Form, Formik } from "formik";
import React from "react";
import { MainGrid } from "../main-grid";
import { BlueButton } from "../button/button.component";
import { Link } from "@reach/router";
import * as yup from "yup";

import * as SS from "./sign-up.style";
import { TextField } from "@material-ui/core";
import { Background } from "../background";

const SignUp = () => {
  require("yup-password")(yup);
  const validate = yup.object().shape({
    username: yup.string().required('Required!'),
    email: yup.string().email("Invalid email").required("Email is required"),
    password: yup
      .string()
      .required("Required!")
      .min(8, "Too Short!")
      .minLowercase(3, "Should be at least 3 lowercase characters")
      .minUppercase(1, 'Should contain at least 1 uppercase')
      .minNumbers(1, 'Should contain at least 1 number')
      .minSymbols(1, 'Should contain at least one special symbol')
  });

  return (
    <Background>
      <MainGrid>
        <SS.StyledPaper elevation={8}>
          <SS.StyledFormHeader to="/">Log in</SS.StyledFormHeader>
          <SS.StyledFormTitle>Sign Up</SS.StyledFormTitle>
          <Formik
            initialValues={{ username: "", email: "", password: "" }}
            validationSchema={validate}
            onSubmit={(values) => {
              console.log(values);
            }}
          >
            {({
              values,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
            }) => (
              <SS.StyledForm onSubmit={handleSubmit}>
                <SS.StyledTextField
                  label="Username"
                  variant="outlined"
                  type="text"
                  name="name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.username}
                />
                <SS.StyledTextField
                  label="E-mail"
                  variant="outlined"
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
                <SS.StyledTextField
                  label="Password"
                  variant="outlined"
                  type="password"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                />
                <BlueButton
                  label={"Submit"}
                  variant="contained"
                  type="submit"
                  disabled={isSubmitting}
                />
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
