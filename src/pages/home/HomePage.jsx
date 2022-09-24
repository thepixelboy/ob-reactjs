import React from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  const goTo = (path) => {
    navigate(path);
  };

  return (
    <div>
      <h1>Home page</h1>
      <button onClick={() => goTo("/profile")} className="btn btn-primary">
        Go to Profile
      </button>
    </div>
  );
};

export default HomePage;
