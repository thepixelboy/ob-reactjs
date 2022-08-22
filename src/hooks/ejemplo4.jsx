// Ejemplo para enterder el uso de props.children
import React from "react";

const Ejemplo4 = (props) => {
  return (
    <div>
      <h1>Ejemplo de uso de props.children</h1>
      <h2>Nombre: {props.nombre}</h2>
      {/* props.children pintará por defecto aquello que se encuentre entre
        las etiquetas de apertura y cierre de este componente desde el
        componente de orden superior */}
      {props.children}
    </div>
  );
};

export default Ejemplo4;
