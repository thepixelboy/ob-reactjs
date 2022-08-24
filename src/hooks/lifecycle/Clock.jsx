import React, { Component, useEffect, useState } from "react";
import "../../styles/clock.scss";

// Partiendo del siguiente componente de clase que contempla varios métodos de ciclo de vida,
// convertidlo en un componente funcional que realice exactamente lo mismo:
export class ClockClass extends Component {
  constructor(props) {
    super(props);
    // Estado privado del component
    this.state = {
      // Se genera una fecha como estado inicial del componente
      fecha: new Date(),
      edad: 0,
      nombre: "Martín",
      apellidos: "San José",
    };
  }
  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  render() {
    return (
      <div>
        <h2>
          Hora Actual:
          {this.state.fecha.toLocaleTimeString()}
        </h2>
        <h3>
          {this.state.nombre} {this.state.apellidos}
        </h3>
        <h1>Edad: {this.state.edad}</h1>
      </div>
    );
  }
  tick() {
    this.setState((prevState) => {
      let edad = prevState.edad + 1;
      return {
        ...prevState,
        fecha: new Date(),
        edad,
      };
    });
  }
}

// Componente funcional que realice exactamente lo mismo que el anterior componente de clase:
export const Clock = () => {
  const defaultState = {
    fecha: new Date(),
    edad: 0,
    nombre: "John",
    apellidos: "Doe",
  };

  const [state, setState] = useState(defaultState);

  useEffect(() => {
    function actualizarEstado() {
      setState({
        ...state,
        fecha: new Date(),
        edad: state.edad + 1,
      });
    }

    const intervalID = setInterval(() => {
      actualizarEstado();
    }, 1000);

    return () => {
      clearInterval(intervalID);
    };
  }, [state]);

  return (
    <div>
      <h2>
        Hora Actual:
        {state.fecha.toLocaleTimeString()}
      </h2>
      <h3>
        {state.nombre} {state.apellidos}
      </h3>
      <h1>Edad: {state.edad}</h1>
    </div>
  );
};
