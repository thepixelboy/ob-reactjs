import React from "react";
import { useNavigate } from "react-router-dom";

const ProfilePage = ({ user }) => {
  const navigate = useNavigate();

  const goTo = (path) => {
    navigate(path);
  };

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div>
      <h1>Profile page</h1>
      <button onClick={() => goTo("/tasks")} className="btn btn-primary me-2">
        Your Tasks
      </button>
      <button onClick={goBack} className="btn btn-primary">
        Go back
      </button>
    </div>
  );
};

export default ProfilePage;
