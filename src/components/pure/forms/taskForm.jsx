import React, { useRef } from "react";
import PropTypes from "prop-types";
import { LEVELS } from "../../../models/levels.enum";
import { Task } from "../../../models/task.class";

const TaskForm = ({ add, length }) => {
  const nameRef = useRef("");
  const descriptionRef = useRef("");
  const levelRef = useRef(LEVELS.NORMAL);

  function addTask(e) {
    e.preventDefault();
    const newTask = new Task(
      nameRef.current.value,
      descriptionRef.current.value,
      false,
      levelRef.current.value
    );
    add(newTask);
  }

  return (
    <form
      onSubmit={addTask}
      className="justify-content-center align-items-center my-4"
    >
      <div className="form-outline flex-fil">
        <input
          ref={nameRef}
          id="inputName"
          type="text"
          className="form-control form-control-lg"
          required
          autoFocus
          placeholder="Task name"
        />
        <input
          ref={descriptionRef}
          id="inputDescription"
          type="text"
          className="form-control form-control-lg"
          required
          placeholder="Task description"
        />
        <select
          ref={levelRef}
          defaultValue={LEVELS.NORMAL}
          id="selectLevel"
          className="form-control form-control-lg"
        >
          <option value={LEVELS.NORMAL}>Priority: Normal</option>
          <option value={LEVELS.URGENT}>Priority: Urgent</option>
          <option value={LEVELS.BLOCKING}>Priority: Blocking</option>
        </select>
        <button type="submit" className="btn btn-primary btn-lg ms-2">
          {length === 0 ? "Create your first task" : "Add new task"}
        </button>
      </div>
    </form>
  );
};

TaskForm.propTypes = {
  add: PropTypes.func.isRequired,
  length: PropTypes.number.isRequired,
};

export default TaskForm;
