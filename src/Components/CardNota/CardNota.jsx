import React, { Component } from "react";
import "./estilo.css";
import { ReactComponent as DeleteSVG } from "../../Assets/img/deleteSVG.svg";

class CardNota extends Component {
  apagar() {
    const index = this.props.index;
    this.props.deletarNota(index);
  }

  render() {
    return (
      <section className="card-nota">
        <header className="card-nota_Cabecalho">
          <div className="card-nota_div">
            <h3 className="card-nota_titulo">{this.props.titulo}</h3>
            <DeleteSVG onClick={this.apagar.bind(this)} />
          </div>
        </header>
        <h4 className="card-nota_categoria">{this.props.categoria}</h4>
        <p className="card-nota_texto">{this.props.texto} </p>
      </section>
    );
  }
}

export default CardNota;
