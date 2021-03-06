import React, { Component } from "react";
import "./estilo.css";

class ListaDeCategorias extends Component {
  constructor() {
    super();
    this.state = { categorias: [] };
  }

  componentDidMount() {
    this.props.categorias.inscrever(this._novasCategorias.bind(this));
  }

  _novasCategorias(categorias) {
    this.setState({ ...this.state, categorias });
  }
  _handleEventoInput(evento) {
    if (evento.key == "Enter") {
      let valorCategoria = evento.target.value;
      this.props.adicionarCategoria(valorCategoria);
    }
  }

  render() {
    return (
      <section className="categoria_Select">
        <ul className="categoria_lista">
          {this.state.categorias.map((categoria, index) => {
            return (
              <li className="categoria_categoria" key={index}>
                {categoria}
              </li>
            );
          })}
        </ul>
        <input
          type="text"
          placeholder="Criar Categoria"
          className="categoria_Input"
          onKeyUp={this._handleEventoInput.bind(this)}
        />
      </section>
    );
  }
}

export default ListaDeCategorias;
