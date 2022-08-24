// Componente que va a contener un formulara para
// autenticación de usuarios
import React, { useState } from "react";

const LoginForm = () => {
  const defaultCredentials = [
    {
      user: "",
      password: "",
    },
  ];

  const [credentials, setCredentials] = useState(defaultCredentials);

  return (
    <div>
      <h1>Login</h1>
    </div>
  );
};

export default LoginForm;
