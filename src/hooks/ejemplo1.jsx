// Ejemplo de uso del hook useState
// Crear un componente de tipo función y acceder a su estado
// a través de un hook y, además, poder modificarlo
import React, { useState } from "react";

const Ejemplo1 = () => {
  // Valor incial para un contador
  const valorInicial = 0;

  // Valor incial para una persona
  const personaInicial = {
    nombre: "John Doe",
    email: "john.doe@unknown.com",
  };

  // Queremos que el valorInicial y personaInicial sean
  //  parte del estrado del componente para así poder gestionar
  // su cambio y que este se vea reflejado en la vista del componente
  // const [nombreVariable, funcionDeActualizacion] = useState(valorInicial);
  const [contador, setContador] = useState(valorInicial);
  const [persona, setPersona] = useState(personaInicial);

  // Función para incrementar el contador
  function incrementarContador() {
    setContador(contador + 1);
  }

  // Funcion para actualizar el estado de persona
  function actualizarPersona() {
    setPersona({
      nombre: "Jane Doe",
      email: "jane.doe@blindspot.com",
    });
  }

  return (
    <div>
      <h1>Ejemplo de useState()</h1>
      <h2>Contador: {contador}</h2>
      <h2>Datos de la persona</h2>
      <h3>Nombre: {persona.nombre}</h3>
      <h3>Email: {persona.email}</h3>
      {/* Bloque de botones para actualizar estado */}
      <div>
        <button onClick={incrementarContador}>Incrementar contador</button>
        <button onClick={actualizarPersona}>Actualizar persona</button>
      </div>
    </div>
  );
};

export default Ejemplo1;
