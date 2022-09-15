import React from "react";
import { ErrorMessage, Field, Formik, Form } from "formik";
import * as Yup from "yup";

// Models
import { User } from "../../../models/user.class";
import { ROLES } from "../../../models/roles.enum";

const RegisterFormik = () => {
  let user = new User();

  const initialValues = {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: ROLES.USER,
  };

  const registerSchema = Yup.object().shape({
    username: Yup.string()
      .min(6, "Username must be at least 6 characters")
      .max(12, "Username must be at most 12 characters")
      .required("Username field is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email field is required"),
    password: Yup.string()
      .min(12, "Password must be at least 12 characters")
      .required("Password field is required"),
    confirmPassword: Yup.string()
      .when("password", {
        is: (value) => (value && value.length > 0 ? true : false),
        then: Yup.string().oneOf([Yup.ref("password")], "Passwords must match"),
      })
      .required("Confirm password field is required"),
    role: Yup.string()
      .oneOf([ROLES.ADMIN, ROLES.USER])
      .required("Role field is required"),
  });

  const submit = (values) => {
    alert("User registered successfully");
  };

  return (
    <div>
      <h4>Register</h4>
      <Formik
        initialValues={initialValues}
        validationSchema={registerSchema}
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 500));
          alert(JSON.stringify(values, null, 2));
        }}
      >
        {({
          values,
          touched,
          errors,
          isSubmitting,
          handleChange,
          handleBlur,
        }) => (
          <Form>
            <label htmlFor="username">Username</label>
            <Field
              id="username"
              name="username"
              type="text"
              placeholder="Write your user name"
            />
            {errors.username && touched.username && (
              <ErrorMessage name="username" component="div" />
            )}

            <label htmlFor="email">Email address</label>
            <Field
              id="email"
              name="email"
              type="email"
              placeholder="example@email.com"
            />
            {errors.email && touched.email && (
              <ErrorMessage name="email" component="div" />
            )}

            <label htmlFor="password">Password</label>
            <Field
              id="password"
              name="password"
              type="password"
              placeholder="Password"
            />
            {errors.password && touched.password && (
              <ErrorMessage name="password" component="div" />
            )}

            <label htmlFor="confirmPassword">Confirm password</label>
            <Field
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              placeholder="Confirm password"
            />
            {errors.confirmPassword && touched.confirmPassword && (
              <ErrorMessage name="confirmPassword" component="div" />
            )}

            <button type="submit">Register</button>
            {isSubmitting ? (
              <div className="d-flex align-items-center mt-1">
                <strong>Creating account ...</strong>
                <div
                  className="spinner-border ms-auto"
                  role="status"
                  aria-hidden="true"
                ></div>
              </div>
            ) : null}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default RegisterFormik;
