// Ejemplo de uso de:
// - useState()
// - useContext()
import React, { useState, useContext } from "react";

const miContexto = React.createContext(null);

// @returns Componente 1
// Dispone de un contexto que va a tener un valor
// que recibirá desde el padre
const Componente1 = () => {
  const state = useContext(miContexto);

  return (
    <div>
      <h1>El token es: {state.token}</h1>
      {/* Pintamos el componente 2 */}
      <Componente2></Componente2>
    </div>
  );
};

const Componente2 = () => {
  const state = useContext(miContexto);

  return (
    <div>
      <h2>La sesión es: {state.session}</h2>
    </div>
  );
};

export default function MiComponenteConContexto() {
  const estadoInicial = {
    token: "123456789",
    session: 1,
  };

  // Creamos el estado de este componente
  const [sessionData, setSessionData] = useState(estadoInicial);

  function actualizarSession() {
    setSessionData({
      token: "JWT987654321",
      session: sessionData.session + 1,
    });
  }

  return (
    <miContexto.Provider value={sessionData}>
      {/* Todo lo que está aquí dentro puede leer los datos de sessionData */}
      {/* Además, si se actualiza, los componentes de aquí, también lo actualizan */}
      <h1>Ejemplo de useState() y useContext()</h1>
      <Componente1></Componente1>
      <button onClick={actualizarSession}>Actualizar sesión</button>
    </miContexto.Provider>
  );
}
