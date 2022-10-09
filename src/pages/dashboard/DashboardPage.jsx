import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";

import Copyright from "../../components/pure/Copyright";

const DashboardPage = () => {
  const navigate = useNavigate();

  const navigateTo = (path) => {
    navigate(path);
  };

  const logout = () => {
    navigateTo("/login");
  };

  const tasks = () => {
    navigateTo("/tasks");
  };

  return (
    <div>
      <h1>Dashboard page</h1>
      <Button variant="contained" onClick={tasks}>
        Tasks
      </Button>
      <Button variant="contained" onClick={logout}>
        Logoutt
      </Button>
      <Copyright />
    </div>
  );
};

export default DashboardPage;
