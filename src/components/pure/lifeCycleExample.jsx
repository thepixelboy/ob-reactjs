// Ejemplo de componente de tipo clase que dispone de los
// métodos de cliclo de vida
import React, { Component } from "react";
import PropTypes from "prop-types";

class LifeCycleExample extends Component {
  constructor(props) {
    super(props);
    console.log("CONSTRUCTOR: Cuando se instancia el componente");
  }

  componentWillMount() {
    // OBSOLETO
    console.log("WILLMOUNT: Antes del montaje del componente");
  }

  componentDidMount() {
    console.log(
      "DIDMOUNT: Justo al acabar el montaje del componente, antes de renderizarlo"
    );
  }

  componentWillReceiveProps(nextProps) {
    // OBSOLETO
    console.log("WILLRECEIVEPROPS: Si el componente va a recibir nuevas props");
  }

  shouldComponentUpdate(nextProps, nextState) {
    // OBSOLETO
    // Controla si el componente debe o no actualizarse
    // return true / false
  }

  componentWillUpdate(nextProps, nextState) {
    // OBSOLETO
    console.log("WILLUPDATE: Justo antes de actualizar el componente");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("DIDUPDATE: Justo después de actualizar el componente");
  }

  componentWillUnmount() {
    console.log("WILLUNMOUNT: Justo antes de desaparecer");
  }

  render() {
    return <div></div>;
  }
}

LifeCycleExample.propTypes = {};
