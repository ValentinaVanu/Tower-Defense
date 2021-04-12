import { Form, Formik } from "formik";
import React from "react";
import { MainGrid } from "../main-grid";
import * as yup from 'yup';
import { BlueButton } from "../button/button.component";
import { Link } from '@reach/router';


import * as SS from './sign-up.style'
import { Paper, TextField } from "@material-ui/core";
import { Background } from "../background";

const SignUp = () => {
  const validate = yup.object().shape({
    email: yup.string().email('Invalid email').required('Email is required'),
    password: yup.string().required('Required!')
    .min(8, 'Too Short!')
    // .minLowercase(3, 'at least 3 lowercase characters')
    // .minUppercase(1, 'Should contain at least 1 uppercase')
    // .minNumber(1, 'Should contain at least 1 number')
  });

  return (
    <Background>
      <MainGrid>
        <SS.StyledPaper elevation={8}>
          {/* <div>Sign Up</div> */}
          <h1 style={{ textAlign: "center" }}>
            Sign Up
          </h1>
          <Formik
            initialValues={{ username: "", email: "", password: "" }}
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
              <SS.StyledForm onSubmit={handleSubmit}>
                <TextField
                  label="Username"
                  variant="outlined"
                  type="text"
                  name="name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.username}
                />
                <TextField
                  label="E-mail"
                  variant="outlined"
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
                <TextField
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
                <Link to='/'>Go back</Link>
              </SS.StyledForm>
            )}
          </Formik>
        </SS.StyledPaper>
      </MainGrid>
    </Background>
  );
};

export { SignUp };
