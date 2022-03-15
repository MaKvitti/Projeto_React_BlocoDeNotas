import React, { Component } from "react";
import "./estilo.css";
import { ReactComponent as Note_Add } from "../../Assets/img/note_Add.svg";

class FormularioCadastro extends Component {
  constructor(props) {
    super(props);
    this.titulo = "";
    this.texto = "";
    this.categoria = "Sem Categoria";
    this.state = { categorias: [] };
    this._novasCategorias = this._novasCategorias.bind(this);
  }

  componentDidMount() {
    this.props.categorias.inscrever(this._novasCategorias);
  }

  componentWillUnmount() {
    this.props.categorias.desinscrever(this._novasCategorias);
  }

  _novasCategorias(categorias) {
    this.setState({ ...this.state, categorias });
  }

  _handleMudancaTitulo(evento) {
    evento.stopPropagation();
    this.titulo = evento.target.value;
  }
  _handleMudancaTexto(evento) {
    evento.stopPropagation();
    this.texto = evento.target.value;
  }
  _handleMudancaCategoria(evento) {
    evento.stopPropagation();
    this.categoria = evento.target.value;
  }

  _criarNota(evento) {
    evento.preventDefault();
    evento.stopPropagation();
    this.props.criarNota(this.titulo, this.texto, this.categoria);
  }

  render() {
    return (
      <form
        onSubmit={this._criarNota.bind(this)}
        className="formulario-cadastro"
      >
        <input
          type="text"
          placeholder="Título"
          onChange={this._handleMudancaTitulo.bind(this)}
          className="formulario-cadastro_input"
        />
        <textarea
          className="formulario-cadastro_textarea"
          placeholder="Escreva sua nota"
          onChange={this._handleMudancaTexto.bind(this)}
          rows={15}
        />
        <div className="formulario-cadastro_Div">
          <select
            className="formulario-cadastro_select"
            onChange={this._handleMudancaCategoria.bind(this)}
          >
            <option>Sem Categoria</option>
            {this.state.categorias.map((categorias, index) => {
              return <option key={index}>{categorias}</option>;
            })}
          </select>
          <button className="formulario-cadastro_submit">
            <p className="formulario-cadastro-submit_img">
              <Note_Add />
            </p>
          </button>
        </div>
      </form>
    );
  }
}

export default FormularioCadastro;
