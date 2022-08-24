import React, { useState } from "react";

// Definiendo estilos en constantes
// ? Usuario autenticado
const loggedStyle = { color: "white" };

// ? Usuario no autenticado
const notLoggedStyle = { color: "tomato", fontWeight: "bold" };

const GreetingStyled = (props) => {
  // Generamos un estado para el componente para así
  // controlar si el usuario está o no autenticado
  const [logged, setLogged] = useState(false);

  const greetingUser = () => <p>Hola {props.name}</p>;
  const pleaseLogin = () => <p>Por favor, inicia sesión</p>;

  return (
    <div style={logged ? loggedStyle : notLoggedStyle}>
      {logged ? greetingUser() : pleaseLogin()}
      <button onClick={() => setLogged(!logged)}>
        {logged ? "Logout" : "Login"}
      </button>
    </div>
  );
};

export default GreetingStyled;
