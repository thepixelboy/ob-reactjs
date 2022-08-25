import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Task } from "../../models/task.class";

// Importamos la hoja de estilos task.scss
import "../../styles/task.scss";
import { LEVELS } from "../../models/levels.enum";

const TaskComponent = ({ task }) => {
  useEffect(() => {
    console.log("A task has been created");
    return () => {
      console.log(`Task ${task.name} is going to be unmounted`);
    };
  }, [task]);

  // Returns a badge style depending on task's level
  function taskLevelBadgeStyle() {
    switch (task.level) {
      case LEVELS.BLOCKING:
        return "badge bg-danger";
      case LEVELS.URGENT:
        return "badge bg-warning";
      case LEVELS.NORMAL:
        return "badge bg-primary";
      default:
        break;
    }
  }

  // Returns an icon style and color depending on task's status
  function taskStatuStyle() {
    if (task.completed) {
      return "bi-toggle-on completed";
    } else {
      return "bi-toggle-off pending";
    }
  }

  return (
    <tr className="fw-normal">
      <th>
        <span className="task-ms-2">{task.name}</span>
      </th>
      <td className="align-middle">
        <span>{task.description}</span>
      </td>
      <td className="align-middle">
        <h6 className="mb-0">
          <span className={taskLevelBadgeStyle()}>{task.level}</span>
        </h6>
      </td>
      <td className="align-middle task-status">
        <i className={taskStatuStyle()}></i>
        <i className="bi-trash delete"></i>
      </td>
    </tr>
  );
};

TaskComponent.propTypes = {
  task: PropTypes.instanceOf(Task),
};

export default TaskComponent;
