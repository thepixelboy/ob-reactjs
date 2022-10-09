import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";

import LoginFormik from "../../components/pure/forms/loginFormik.jsx";
import Copyright from "../../components/pure/Copyright";

const LoginPage = () => {
  const navigate = useNavigate();

  const navigateTo = (path) => {
    navigate(path);
  };

  const register = () => {
    navigateTo("/register");
  };

  return (
    <div>
      <h1>Login page</h1>
      <LoginFormik />
      <Button variant="contained" onClick={register}>
        Register
      </Button>
      <Copyright />
    </div>
  );
};

export default LoginPage;
