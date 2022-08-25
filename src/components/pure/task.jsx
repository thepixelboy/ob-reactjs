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
    <tr className="fw-normal">
      <th>
        <span className="task-ms-2">{task.name}</span>
      </th>
      <td className="align-middle">
        <span>{task.description}</span>
      </td>
      <td className="align-middle">
        {/* TODO: Sustituir por un badge de Bootstrap */}
        <span>{task.level}</span>
      </td>
      <td className="align-middle">
        {/* TODO: Sustituir por un icono de Bootstrap */}
        <span>{task.completed}</span>
      </td>
    </tr>
  );
};

TaskComponent.propTypes = {
  task: PropTypes.instanceOf(Task),
};

export default TaskComponent;
