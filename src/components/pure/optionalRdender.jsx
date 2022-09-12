import React, { useState } from "react";

let red = 0;
let green = 200;
let blue = 150;

// ? Estilo ara usuario autenticado
const authStyle = {
  backgroundColor: `rgb(${red}, ${green}, ${blue})`,
  color: "white",
  fontWeight: "bold",
};

// ? Estilo para usuario no autenticado
const noAuthStyle = {
  backgroundColor: "tomato",
  color: "white",
  fontWeight: "bold",
};

// Login / Logout buttons
const LoginButton = ({ loginAction, propStyle }) => {
  return (
    <button style={propStyle} onClick={loginAction}>
      Login
    </button>
  );
};

const LogoutButton = ({ logoutAction, propStyle }) => {
  return (
    <button style={propStyle} onClick={logoutAction}>
      Logout
    </button>
  );
};

// ? (Expresión true) && expresión => se renderiza la expresión
// ? (Expresión false) && expresión => no se renderiza la expresión

const OptionalRdender = () => {
  const [access, setAccess] = useState(false);
  const [nMessages, setNMessages] = useState(0);

  // const updateAccess = () => {
  //   setAccess(!access);
  // };

  // if (access) {
  //   optionalButton = <button onClick={updateAccess}>Logout</button>;
  // } else {
  //   optionalButton = <button onClick={updateAccess}>Login</button>;
  // }

  const loginAction = () => {
    setAccess(true);
  };

  const logoutAction = () => {
    setAccess(false);
  };

  let optionalButton;

  if (access) {
    optionalButton = (
      <LogoutButton
        propStyle={noAuthStyle}
        logoutAction={logoutAction}
      ></LogoutButton>
    );
  } else {
    optionalButton = (
      <LoginButton
        propStyle={authStyle}
        loginAction={loginAction}
      ></LoginButton>
    );
  }

  // Unread messages
  let addMessages = () => {
    setNMessages(nMessages + 1);
  };

  return (
    <div>
      {/* Optional button */}
      {optionalButton}

      {/* Unread messages */}
      {/* {nMessages > 0 && nMessages === 1 && (
        <p>You have {nMessages} unread message.</p>
      )}
      {nMessages > 1 && <p>You have {nMessages} unread messages.</p>}
      {nMessages === 0 && <p>You have no unread messages.</p>} */}
      {/* Ternary operator */}
      {access ? (
        <div>
          {nMessages > 0 ? (
            <p>
              You have {nMessages} new message{nMessages > 1 ? "s" : null}.
            </p>
          ) : (
            <p>There are no new messages</p>
          )}
          <button onClick={addMessages}>
            {nMessages === 0 ? "Add your first message" : "Add a new message"}
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default OptionalRdender;
