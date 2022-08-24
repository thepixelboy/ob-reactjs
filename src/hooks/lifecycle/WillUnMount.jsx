// Ejemplo de uso del método componentWillUnmount en componente de tipo clase,
// y el hook de ciclo de vida en componente de tipo funcional.
import React, { Component, useEffect } from "react";

export class WillUnMount extends Component {
  componentWillUnmount() {
    console.log(
      "Comportamiento antes de que el componente desaparezca (sea eliminado del DOM)"
    );
  }

  render() {
    return (
      <div>
        <h1>WillUnMount</h1>
      </div>
    );
  }
}

export const WillUnMountHook = () => {
  useEffect(() => {
    return () => {
      console.log(
        "Comportamiento antes de que el componente desaparezca (sea eliminado del DOM)"
      );
    };
  }, []);

  return (
    <div>
      <h1>WillUnMount</h1>
    </div>
  );
};
