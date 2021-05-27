import * as yup from "yup";
require("yup-password")(yup);

export const initialLogInValues = {
  email: '',
  password: '',
}

export const initialLogInLabels = {
  email: 'E-mail',
  password: 'Password'
}

export const validate = yup.object().shape({
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
