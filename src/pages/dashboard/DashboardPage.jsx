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

  return (
    <div>
      <Button variant="contained" onClick={logout}>
        Logoutt
      </Button>
      <Copyright />
    </div>
  );
};

export default DashboardPage;
