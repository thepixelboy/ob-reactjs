import React, { useEffect, useState } from "react";
import { LEVELS } from "../../models/levels.enum";
import { Task } from "../../models/task.class";
import TaskComponent from "../pure/task";

// Importamos la hoja de estilos task.scss
import "../../styles/task.scss";

const TaskListComponent = () => {
  const defaultTask = new Task(
    "Example",
    "Default description",
    false,
    LEVELS.NORMAL
  );

  // Estado del componente
  const [tasks, setTasks] = useState([defaultTask]);
  const [loading, setLoading] = useState(true);

  // Control del ciclo de vida del componente
  useEffect(() => {
    console.log("Task state has been updated");
    setLoading(false);

    return () => {
      console.log("TaskList component is going to be unmounted");
    };
  }, [tasks]);

  const changeCompleted = (id) => {
    console.log("TODO: Change task status to completed");
  };

  return (
    <div>
      <div>
        <h1>Your tasks:</h1>
      </div>
      {/* TODO: Use for/map to render tasks list  */}
      <TaskComponent task={defaultTask}></TaskComponent>
    </div>
  );
};

export default TaskListComponent;
