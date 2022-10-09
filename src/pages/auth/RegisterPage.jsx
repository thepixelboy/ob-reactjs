import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";

import RegisterFormik from "../../components/pure/forms/registerFormik.jsx";
import Copyright from "../../components/pure/Copyright";

const RegisterPage = () => {
  const navigate = useNavigate();

  const navigateTo = (path) => {
    navigate(path);
  };

  const login = () => {
    navigateTo("/login");
  };

  return (
    <div>
      <h1>Register page</h1>
      <RegisterFormik />
      <Button variant="contained" onClick={login}>
        Login
      </Button>
      <Copyright />
    </div>
  );
};

export default RegisterPage;
