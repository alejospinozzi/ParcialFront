import React, { Component } from "react";

class Opciones extends Component {
  render() {
    return (
      <div className="opciones">
        <div className="opcion">
          <button id="a" className="botones" onClick={this.props.handlerClick}>
            A
          </button>
          <h2>{this.props.opcionA}</h2>
        </div>
        <div className="opcion">
          <button id="b" className="botones" onClick={this.props.handlerClick}>
            B
          </button>
          <h2>{this.props.opcionB}</h2>
        </div>
      </div>
    );
  }
}

export default Opciones;