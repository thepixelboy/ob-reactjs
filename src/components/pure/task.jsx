import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Task } from "../../models/task.class";

// Importamos la hoja de estilos task.scss
import "../../styles/task.scss";

const TaskComponent = ({ task }) => {
  useEffect(() => {
    console.log("A task has been created");
    return () => {
      console.log(`Task ${task.name} is going to be unmounted`);
    };
  }, [task]);

  return (
    <div>
      <h2 className="task-name">Name: {task.name}</h2>
      <h3>Description: {task.description}</h3>
      <h4>Level: {task.level}</h4>
      <h5>This task is: {task.completed ? "COMPLETED" : "PENDING"}</h5>
    </div>
  );
};

TaskComponent.propTypes = {
  task: PropTypes.instanceOf(Task),
};

export default TaskComponent;
