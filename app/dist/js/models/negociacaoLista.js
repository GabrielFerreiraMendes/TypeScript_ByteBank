export class NegociacaoLista {
    constructor() {
        this._negociacoes = [];
    }
    adiciona(negociacao) {
        this._negociacoes.push(negociacao);
    }
    lista() {
        return this._negociacoes;
    }
    paraTexto() {
        return JSON.stringify(this._negociacoes, null, 2);
    }
    objetoExiste(objeto) {
        return JSON.stringify(this._negociacoes) == JSON.stringify(objeto.lista());
    }
}
//# sourceMappingURL=negociacaoLista.js.map