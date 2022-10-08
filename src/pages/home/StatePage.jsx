import React from "react";
import { useLocation, useParams } from "react-router-dom";

const StatePage = () => {
  const location = useLocation();
  const params = useParams();

  console.log("Location query params:", params.search); // Query params

  return (
    <div>
      <h1>State: {location.state.online ? "User online" : "User offline"}</h1>
    </div>
  );
};

export default StatePage;
