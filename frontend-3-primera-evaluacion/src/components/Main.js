import data from "./data.json";
import React, { Component } from "react";
import Opciones from "./Opciones";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      historial: [],
      seleccionPrevia: "",
      contador: 1,
      info: ''
    };
  }

  componentDidMount(){
    this.setState({
      historial:[],
      seleccionPrevia: "",
      contador: 1,
      info: '',
    })
  }
  
  devolverIndice() {
    let retorno = data.findIndex(
      (item) => item.id === (this.state.contador + this.state.seleccionPrevia))
    if (retorno === -1) {
      retorno = 0;
    }
    return retorno;
  }

  handlerClick = (e) => {
    if (this.state.contador > 4) {
      if(window.confirm("Quieres jugar de nuevo?")){
        this.componentDidMount()
      }      
      return;
    }
    this.setState({
      contador: this.state.contador + 1,
      seleccionPrevia: e.target.id,
      historial: [...this.state.historial, e.target.id]
    });
  };

  render() {
    
    return (
      <div className="layout">
        <h1 className="historia">
          {data[this.devolverIndice()].historia}
        </h1>
        <Opciones
          handlerClick={this.handlerClick}
          opcionA={data[this.devolverIndice()].opciones.a}
          opcionB={data[this.devolverIndice()].opciones.b}
        />
        <div className="recordatorio">
          <h3>Selección anterior: {this.state.seleccionPrevia.toUpperCase()}</h3>
          <h4>Historial de opciones elegidas: </h4>
          <ul>
            {this.state.historial.map(
              (e, index) => (
                <li key={index}>{e.toUpperCase()}</li>
              ),
              data[this.state.contador].id
            )}
          </ul>
        </div>
      </div>
    );
  }
}

export default Main;
