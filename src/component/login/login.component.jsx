import React from "react";
import { MainGrid } from "../main-grid";
import { StyledPaper } from "./login.style";
import { BlueButton } from "../button/button.component";
import * as SL from "./login.style";

const LogIn = ({
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
  isSubmitting,
}) => {

  return (
    <MainGrid>
      <StyledPaper elevation={8}>
        <SL.StyledFormTitle style={{ textAlign: "center" }}>
          Log In
        </SL.StyledFormTitle>
        <SL.StyledForm>
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
        </SL.StyledForm>
      </StyledPaper>
    </MainGrid>
  );
};

export { LogIn };
