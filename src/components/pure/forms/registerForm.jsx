import React, { useState } from "react";

const RegisterForm = () => {
  const defaultData = [
    {
      user: "",
      name: "",
      email: "",
      password: "",
    },
  ];

  const [data, setData] = useState(defaultData);

  return (
    <div>
      <h1>Register</h1>
    </div>
  );
};

export default RegisterForm;
