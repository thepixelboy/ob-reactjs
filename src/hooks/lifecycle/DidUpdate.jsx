// Ejemplo de uso de método de componentDidUpdate en componente de tipo clase
// y uso de hook en componente de tipo funcional.
import React, { Component, useEffect } from "react";

export class DidUpdate extends Component {
  componentDidUpdate(prevProps, prevState) {
    console.log(
      "Comportamiento cuando el componente recibe nuevos props o cambia su estado"
    );
  }

  render() {
    return (
      <div>
        <h1>DidUpdate</h1>
      </div>
    );
  }
}

export const DidUpdateHook = () => {
  useEffect(() => {
    console.log(
      "Comportamiento cuando el componente recibe nuevos props o cambia su estado"
    );
  });

  return (
    <div>
      <h1>DidUpdate</h1>
    </div>
  );
};
