import React, { useState } from "react";
import PropTypes from "prop-types";

const GreetingF = (props) => {
  // const [variable, update variable method] = useState(initial value)
  const [age, setage] = useState(29);

  const birthday = () => {
    setage(age + 1);
  };

  return (
    <div>
      <h1>Hola, {props.name} desde componente funcional!</h1>
      <h2>Tu edad es de: {age} años</h2>
      <div>
        <button onClick={birthday}>Cumplir años</button>
      </div>
    </div>
  );
};

GreetingF.propTypes = {
  name: PropTypes.string,
};

export default GreetingF;
