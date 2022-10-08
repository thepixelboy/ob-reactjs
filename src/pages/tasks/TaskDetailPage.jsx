import React from "react";
import { useParams } from "react-router-dom";

const TaskDetailPage = ({ task }) => {
  const { id } = useParams();
  const { name, description } = task.find((item) => item.id === parseInt(id));

  return (
    <div>
      <h1>Task Detail: {id}</h1>
      <p>{name}</p>
      <p>{description}</p>
    </div>
  );
};

export default TaskDetailPage;
