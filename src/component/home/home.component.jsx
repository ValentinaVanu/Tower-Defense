import { Formik } from "formik";
import React, { Fragment, useState } from "react";
import { Background } from "../background";
import { LogIn } from "../login";
import { SignUp } from "../sign-up/sign-up.component";

import * as SH from "./home.style";

import * as yup from "yup";

const Home = () => {
  const [newAccount, setNewAccount] = useState(false);

  const validate = yup.object().shape({
    email: yup.string().email("Invalid email").required("Email is required"),
    password: yup.string().required("Required!").min(8, "Too Short!"),
    // .minLowercase(3, 'at least 3 lowercase characters')
    // .minUppercase(1, 'Should contain at least 1 uppercase')
    // .minNumber(1, 'Should contain at least 1 number')
  });

  const handleEntryPage = () => {
    setNewAccount(true)
  }

  return (
    <Background>
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
          <Fragment>
            <LogIn
              values={values}
              errors={errors}
              touched={touched}
              handleChange={handleChange}
              handleBlur={handleBlur}
              isSubmitting={isSubmitting}
            />
            {newAccount && <SignUp 
              values={values}
              errors={errors}
              touched={touched}
              handleChange={handleChange}
              handleBlur={handleBlur}
              isSubmitting={isSubmitting}
            />}
          </Fragment>
        )}
      </Formik>
    </Background>
  );
};

export { Home };
