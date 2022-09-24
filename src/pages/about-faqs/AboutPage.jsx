import React from "react";
import { useNavigate } from "react-router-dom";

const AboutPage = () => {
  const navigate = useNavigate();

  const goTo = (path) => {
    navigate(path);
  };

  const goBack = () => {
    navigate(-1);
  };

  const goForward = () => {
    navigate(1);
  };

  return (
    <div>
      <h1>About | FAQ</h1>
      <div>
        <button onClick={() => goTo("/")} className="btn btn-primary">
          Go to home
        </button>
        <button onClick={goBack} className="btn btn-primary mx-2">
          Go back
        </button>
        <button onClick={goForward} className="btn btn-primary">
          Go forward
        </button>
      </div>
    </div>
  );
};

export default AboutPage;
