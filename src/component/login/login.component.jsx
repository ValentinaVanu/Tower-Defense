import { Button } from "@material-ui/core";
import { Formik } from "formik";
import React from "react";
import { MainGrid } from "../main-grid";
import { StyledPaper } from "./login.style";

import * as SL from './login.style'

const LogIn = () => {
  return (
    <MainGrid>
      <StyledPaper elevation={8}>
        <h1 style={{textAlign: 'center'}}>Log In</h1>
        <Formik
          initialValues={{ email: "", password: "" }}
          validate={(values) => {
            const errors = {};
            if (!values.email) {
              errors.email = "Required";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Invalid email address";
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
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
            /* and other goodies */
          }) => (
            <SL.StyledForm onSubmit={handleSubmit}>
              <SL.StyledTextField
                // id="outlined-basic"
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
                // id="outlined-basic"
                label="Password"
                variant="outlined"
                type="password"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
              {errors.password && touched.password && errors.password}
              <Button variant="contained" color="primary" type="submit" disabled={isSubmitting}>
                Log In
              </Button>
            </SL.StyledForm>
          )}
        </Formik>
      </StyledPaper>
    </MainGrid>
  );
};

export { LogIn };
