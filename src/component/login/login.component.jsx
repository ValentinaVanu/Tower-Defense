import { Formik } from "formik";
import React from "react";
import { MainGrid } from "../main-grid";
import { StyledPaper } from "./login.style";
import { BlueButton } from "../button/button.component";
import { useNavigate } from '@reach/router';
import * as yup from "yup";

import * as SL from "./login.style";
import { Background } from "../background";

const LogIn = () => {
  require("yup-password")(yup);
  const navigate = useNavigate();
  const validate = yup.object().shape({
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

  const handleFormRoute = () => {
    navigate('/sign-up')
  }

  return (
    <Background>
      <MainGrid>
        <StyledPaper elevation={8}>
          <SL.StyledFormHeader onClick={handleFormRoute}>Sign Up</SL.StyledFormHeader>
          <SL.StyledFormTitle style={{ textAlign: "center" }}>
            Log In
          </SL.StyledFormTitle>
          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={validate}
            onSubmit={(values) => {
              console.log(values);
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
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
                />
                {errors.password && touched.password && errors.password}
                <BlueButton
                  label={"Log In"}
                  variant="contained"
                  type="submit"
                  disabled={isSubmitting}
                />
                <SL.StyledLink to='/sign-up'>Create an account</SL.StyledLink>
              </SL.StyledForm>
            )}
          </Formik>
        </StyledPaper>
      </MainGrid>
    </Background>
  );
};

export { LogIn };
