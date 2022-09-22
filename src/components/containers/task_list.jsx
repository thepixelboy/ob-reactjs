import React, { useEffect, useState } from "react";
import { LEVELS } from "../../models/levels.enum";
import { Task } from "../../models/task.class";
import TaskComponent from "../pure/task";

// Importamos la hoja de estilos task.scss
import "../../styles/task.scss";
// import TaskForm from "../pure/forms/taskForm";
import TaskFormik from "../pure/forms/taskFormik";

const TaskListComponent = () => {
  const defaultTask1 = new Task(
    "Task Example 1",
    "Lorem impsum dolor sit amet",
    true,
    LEVELS.NORMAL
  );
  const defaultTask2 = new Task(
    "Task Example 2",
    "Consetetur sadipscing elitr",
    false,
    LEVELS.URGENT
  );
  const defaultTask3 = new Task(
    "Task Example 3",
    "Plura nonumy eirmod tempor",
    false,
    LEVELS.BLOCKING
  );

  // Estado del componente
  const [tasks, setTasks] = useState([
    defaultTask1,
    defaultTask2,
    defaultTask3,
  ]);
  const [loading, setLoading] = useState(true);

  // Control del ciclo de vida del componente
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => {
      console.log("TaskList component is going to be unmounted");
    };
  }, [tasks]);

  function completeTask(task) {
    const index = tasks.indexOf(task);
    const tempTasks = [...tasks];
    tempTasks[index].completed = !tempTasks[index].completed;
    setTasks(tempTasks);
  }

  function removeTask(task) {
    const index = tasks.indexOf(task);
    const tempTasks = [...tasks];
    tempTasks.splice(index, 1);
    setTasks(tempTasks);
  }

  function addTask(task) {
    const tempTasks = [...tasks];
    tempTasks.push(task);
    setTasks(tempTasks);
  }

  const Table = () => {
    return (
      <table>
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col">Priority</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {/* TODO: Iterar sobre una lista de tareas */}
          {tasks.map((task, index) => {
            return (
              <TaskComponent
                key={index}
                task={task}
                complete={completeTask}
                remove={removeTask}
              ></TaskComponent>
            );
          })}
        </tbody>
      </table>
    );
  };

  let taskTable;

  if (tasks.length > 0) {
    taskTable = <Table></Table>;
  } else {
    taskTable = (
      <div className="text-center">
        <h4>There are no tasks to show</h4>
        <h5>Please, consider creating one</h5>
      </div>
    );
  }

  return (
    <div>
      <div className="col-12">
        <div className="card">
          <div className="card-header p-3">
            <h5>Your tasks</h5>
          </div>
          <div
            className="card-body"
            data-mdb-perfect-scrollbars="true"
            style={{ position: "relative", height: "400px" }}
          >
            {loading ? (
              <div className="d-flex justify-content-center">
                <div className="spinner-border" role="status">
                  <span className="visually-hidden">Loading tasks...</span>
                </div>
              </div>
            ) : (
              taskTable
            )}
          </div>
        </div>
        <TaskFormik add={addTask} length={tasks.length}></TaskFormik>
        {/* <TaskForm add={addTask} length={tasks.length}></TaskForm> */}
      </div>
      {/* TODO: Use for/map to render tasks list  */}
      {/* <TaskComponent task={defaultTask}></TaskComponent> */}
    </div>
  );
};

export default TaskListComponent;
