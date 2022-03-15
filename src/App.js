import React, { Component } from "react";
import FormularioCadastro from "./Components/FormularioCadastro";
import ListaDeNotas from "./Components/ListaDeNotas";
import ListaDeCategorias from "./Components/ListaDeCategorias";
import "./Assets/index.css";
import "./Assets/App.css";
import Categorias from "./dados/Categorias";
import ArrayNotas from "./dados/Notas";

class App extends Component {
  constructor() {
    super();
    this.categorias = new Categorias();
    this.notas = new ArrayNotas();
  }

  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro
          categorias={this.categorias}
          criarNota={this.notas.adicionarNota.bind(this.notas)}
        />
        <main className="conteudo_principal">
          <ListaDeCategorias
            adicionarCategoria={this.categorias.adicionarCategoria.bind(this.categorias)}
            categorias={this.categorias}
          />
          <ListaDeNotas
            deletarNota={this.notas.apagarNotas.bind(this.notas)}
            notas={this.notas}
          />
        </main>
      </section>
    );
  }
}

export default App;
