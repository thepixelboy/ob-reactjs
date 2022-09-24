import React from "react";
import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  const navigate = useNavigate();

  const goTo = (path) => {
    navigate(path);
  };

  return (
    <div>
      <h1>404 - Page not found</h1>
      <button onClick={() => goTo("/")} className="btn btn-primary">
        Go to Home
      </button>
    </div>
  );
};

export default NotFoundPage;
