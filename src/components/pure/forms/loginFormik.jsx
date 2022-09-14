import React from "react";
import { ErrorMessage, Formik, Form, Field } from "formik";
import * as Yup from "yup";

// Yup validation schema
const loginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().required("Required"),
});

const LoginFormik = () => {
  const initialCredentials = {
    email: "",
    password: "",
  };
  return (
    <div>
      <h4>Login</h4>
      <Formik
        initialValues={initialCredentials}
        validationSchema={loginSchema}
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 500));
          alert(JSON.stringify(values, null, 2));
          // Saving credentials in local storage
          localStorage.setItem("credentials", values);
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
            <label htmlFor="email">Email</label>
            <Field id="email" name="email" type="email" placeholder="email" />
            {/* Email errors */}
            {errors.email && touched.email && (
              <ErrorMessage name="email" component="div" />
            )}

            <label htmlFor="password">Password</label>
            <Field
              id="password"
              name="password"
              type="password"
              placeholder="password"
            />
            {/* Password errors */}
            {errors.password && touched.password && (
              <ErrorMessage name="password" component="div" />
            )}

            <button type="submit">Submit</button>
            {isSubmitting ? (
              <div className="d-flex align-items-center mt-1">
                <strong>Validating your credentials ...</strong>
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

export default LoginFormik;
