export default class Categorias {
  constructor() {
    this.categorias = [];
    this._inscritos = [];
  }

  inscrever(func) {
    this._inscritos.push(func);
  }

  desinscrever(func) {
    this._inscritos = this._inscritos.filter((f) => f !== func);
    //cria um novo array com todos os elementos que passaram no teste implementado pela função fornecida.
  }

  notificar() {
    this._inscritos.forEach((func) => func(this.categorias));
    //executa uma dada função em cada elemento de um array.
  }

  adicionarCategoria(novaCategoria) {
    this.categorias.push(novaCategoria);
    this.notificar();
  }
}
