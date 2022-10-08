import React from "react";
import { createSearchParams, useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  const navigateTo = (path) => {
    navigate(path);
  };

  const navigateProps = (path) => {
    navigate({
      replace: true,
      pathname: path,
      search: createSearchParams({ online: true }).toString(),
      state: { online: true },
    });
  };

  return (
    <div>
      <h1>Home page</h1>
      <button
        onClick={() => navigateProps("/online-state")}
        className="btn btn-primary me-2"
      >
        Go to a page with State / Query params
      </button>
      <button
        onClick={() => navigateTo("/profile")}
        className="btn btn-primary"
      >
        Go to Profile
      </button>
    </div>
  );
};

export default HomePage;
