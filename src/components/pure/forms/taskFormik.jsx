import React from "react";
import PropTypes from "prop-types";
import { ErrorMessage, Field, Formik, Form } from "formik";
import * as Yup from "yup";

// Models
import { LEVELS } from "../../../models/levels.enum";
import { Task } from "../../../models/task.class";

const TaskFormik = (add, length) => {
  const initialValues = {
    title: "",
    description: "",
    level: LEVELS.NORMAL,
  };

  const taskSchema = Yup.object().shape({
    name: Yup.string().required("Title field is required"),
    description: Yup.string().required("Description field is required"),
    level: Yup.string()
      .oneOf([LEVELS.NORMAL, LEVELS.URGENT, LEVELS.BLOCKING])
      .required("Level field is required"),
  });

  function addTask(values) {
    const newTask = new Task(
      values.title,
      values.description,
      false,
      values.level
    );
    add(newTask);
  }

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={taskSchema}
        onSubmit={(values) => {
          addTask(values);
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
          <Form className="justify-content-center align-items-center my-4">
            <Field
              id="title"
              name="title"
              type="text"
              className="form-control form-control-lg mb-1"
              placeholder="Task title"
            />
            {errors.title && touched.title && (
              <ErrorMessage name="title" component="div" />
            )}

            <Field
              id="description"
              name="description"
              type="text"
              className="form-control form-control-lg mb-1"
              placeholder="Task description"
            />
            {errors.description && touched.description && (
              <ErrorMessage name="description" component="div" />
            )}

            <Field
              as="select"
              id="level"
              name="level"
              className="form-control form-control-lg mb-1"
            >
              <option value={LEVELS.NORMAL}>Priority: Normal</option>
              <option value={LEVELS.URGENT}>Priority: Urgent</option>
              <option value={LEVELS.BLOCKING}>Priority: Blocking</option>
            </Field>
            {errors.level && touched.level && (
              <ErrorMessage name="level" component="div"></ErrorMessage>
            )}

            <button type="submit" className="btn btn-primary btn-lg">
              {length === 0 ? "Create your first task" : "Add new task"}
            </button>
            {isSubmitting ? (
              <div className="d-flex align-items-center mt-1">
                <strong>Creating task ...</strong>
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

TaskFormik.propTypes = {
  add: PropTypes.func.isRequired,
  length: PropTypes.number.isRequired,
};

export default TaskFormik;
