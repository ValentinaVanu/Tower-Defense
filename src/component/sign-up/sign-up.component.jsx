import React from "react";
import { Paper, TextField } from "@material-ui/core";
import { Form } from "formik";
import { Background } from "../background";
import { BlueButton } from "../button/button.component";


// NEED TO FIND A BETTER SOLUTION TO SHARING FORMIK IN TWO COMPONENTS

const SignUp = ({
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
  isSubmitting,
}) => {
  return (
    <Background>
      <Paper elevation={8}>
        <h1 style={{ textAlign: "center" }}>
          Log In
        </h1>
        <Form>
          <TextField
            label="E-mail"
            variant="outlined"
            type="email"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            // value={values.email}
          />
          {errors.email && touched.email && errors.email}
          <TextField
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
        </Form>
      </Paper>
    </Background>
  );
};

export { SignUp };
