import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

// Añadimos Bootstrap al proyecto
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
// ! Importante: los estilos personalizados deben cargarse siempre después de los estilos de Bootstrap

import "./index.css";
// import App from "./App";
import reportWebVitals from "./reportWebVitals";
import AppRoutingOne from "./AppRoutingOne";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <App /> */}
      <AppRoutingOne></AppRoutingOne>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
