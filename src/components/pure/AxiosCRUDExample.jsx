import React from "react";
import { ErrorMessage, Field, Formik, Form } from "formik";
import {
  createUser,
  deleteUser,
  getAllUsers,
  getAllUsersPaginated,
  getUserById,
  login,
  updateUser,
} from "../../services/axiosCRUDService";
import * as Yup from "yup";

// Yup validation schema
const loginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().required("Required"),
});

const AxiosCRUDExample = () => {
  const initialCredentials = {
    email: "",
    password: "",
  };

  const authUser = (values) => {
    login(values.email, values.password)
      .then((response) => {
        if (response.data.token) {
          alert(JSON.stringify(response.data));
          sessionStorage.setItem("token", response.data.token);
        } else {
          sessionStorage.removeItem("token");
          throw new Error("Invalid credentials");
        }
      })
      .catch((error) => {
        alert(`Something went wrong: ${error}`);
        sessionStorage.removeItem("token");
      })
      .finally(() => console.log("Login suscessful"));
  };

  // CRUD Examples
  const obtainAllUsers = () => {
    getAllUsers()
      .then((response) => {
        if (response.data && response.status === 200) {
          alert(JSON.stringify(response.data.data));
        } else {
          throw new Error("Unable to get user list");
        }
      })
      .catch((error) => {
        alert(`Something went wrong: ${error}`);
      })
      .finally(() => console.log("All users obtained"));
  };

  const obtainAllUsersPaginated = (page) => {
    getAllUsersPaginated(page)
      .then((response) => {
        if (response.data && response.status === 200) {
          alert(JSON.stringify(response.data.data));
        } else {
          throw new Error(`No users found in page ${page}`);
        }
      })
      .catch((error) => {
        alert(`Something went wrong: ${error}`);
      })
      .finally(() => console.log("All users obtained"));
  };

  const obtainUserById = (id) => {
    getUserById(id)
      .then((response) => {
        if (response.data && response.status === 200) {
          alert(JSON.stringify(response.data.data));
        } else {
          throw new Error("User not found");
        }
      })
      .catch((error) => {
        alert(`Something went wrong: ${error}`);
      })
      .finally(() => console.log("User obtained"));
  };

  const createNewUser = (name, job) => {
    createUser(name, job)
      .then((response) => {
        if (response.status === 201) {
          alert(JSON.stringify(response.data));
        } else {
          throw new Error("Unable to create new user");
        }
      })
      .catch((error) => {
        alert(`Something went wrong: ${error}`);
      })
      .finally(() => console.log("User created"));
  };

  const updateUserByName = (id, name, job) => {
    updateUser(id, name, job)
      .then((response) => {
        if (response.status === 200) {
          alert(JSON.stringify(response.data));
        } else {
          throw new Error("Unable to update user");
        }
      })
      .catch((error) => {
        alert(`Something went wrong: ${error}`);
      })
      .finally(() => console.log("User updated"));
  };

  const deleteUserById = (id) => {
    deleteUser(id)
      .then((response) => {
        if (response.status === 204) {
          alert("User deleted");
        } else {
          throw new Error("Unable to delete user");
        }
      })
      .catch((error) => {
        alert(`Something went wrong: ${error}`);
      })
      .finally(() => console.log("User deleted"));
  };

  return (
    <div>
      <h4 className="mb-4">Login</h4>
      <Formik
        initialValues={initialCredentials}
        validationSchema={loginSchema}
        onSubmit={async (values) => {
          authUser(values);
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
            <label className="form-label" htmlFor="email">
              Email
            </label>
            <Field
              className="form-control"
              id="email"
              name="email"
              type="email"
              placeholder="email"
            />
            {/* Email errors */}
            {errors.email && touched.email && (
              <ErrorMessage name="email" component="div" />
            )}

            <label className="form-label mt-3" htmlFor="password">
              Password
            </label>
            <Field
              className="form-control"
              id="password"
              name="password"
              type="password"
              placeholder="password"
            />
            {/* Password errors */}
            {errors.password && touched.password && (
              <ErrorMessage name="password" component="div" />
            )}

            <button className="btn btn-primary mt-2" type="submit">
              Submit
            </button>
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
      <hr />
      <div>
        <button className="btn btn-primary me-2" onClick={obtainAllUsers}>
          Get all users
        </button>
        <button
          className="btn btn-primary me-2"
          onClick={() => obtainAllUsersPaginated(2)}
        >
          Get all users paginated (page 2)
        </button>
        <button
          className="btn btn-primary me-2"
          onClick={() => obtainUserById(2)}
        >
          Get user by ID (2)
        </button>
      </div>
      <hr />
      <div>
        <button
          className="btn btn-primary me-2"
          onClick={() => createNewUser("morpheus", "leader")}
        >
          Create new user (morpheus, leader)
        </button>
        <button
          className="btn btn-primary me-2"
          onClick={() => updateUserByName(2, "morpheus", "zion resident")}
        >
          Update user (morpheus)
        </button>
        <button
          className="btn btn-primary me-2"
          onClick={() => deleteUserById(2)}
        >
          Delete user (2)
        </button>
      </div>
    </div>
  );
};

export default AxiosCRUDExample;
