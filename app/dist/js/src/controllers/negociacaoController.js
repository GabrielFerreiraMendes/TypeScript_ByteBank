import { DiasDaSemana } from "../enums/diasDaSemana.js";
import { Negociacao } from "../models/negociacao.js";
import { NegociacaoLista } from "../models/negociacaoLista.js";
import { MensagemView } from "../views/mensagemView.js";
import { NegociacaoView } from "../views/negociacaoView.js";
export class NegociacaoCotroller {
    constructor() {
        this._negociacoes = new NegociacaoLista();
        this._negociacaoView = new NegociacaoView('#negociacaoView');
        this._mensagemView = new MensagemView('#mensagemView');
        this._inputData = document.querySelector('#data');
        this._inputQuantidade = document.querySelector('#quantidade');
        this._inputValor = document.querySelector('#valor');
        this._negociacaoView.update(this._negociacoes);
    }
    adiciona() {
        const negociacao = Negociacao.CriaInstancia(this._inputData.value, this._inputQuantidade.value, this._inputValor.value);
        let mensagem = "Negociação adicionada com sucesso.";
        if (this.getDiaUtil(negociacao.data)) {
            this._negociacoes.adiciona(negociacao);
            this.limparFormulario();
        }
        else {
            mensagem = "Apenas negociações em dias úteis são aceitas.";
        }
        this.atualizaView(mensagem);
    }
    ;
    getDiaUtil(data) {
        return (data.getDay() > DiasDaSemana.DOMINGO) && (data.getDay() < DiasDaSemana.SABADO);
    }
    limparFormulario() {
        this._inputData.value = '';
        this._inputQuantidade.value = '';
        this._inputValor.value = '';
        this._inputData.focus;
    }
    atualizaView(mensagem) {
        this._negociacaoView.update(this._negociacoes);
        this._mensagemView.update(mensagem);
    }
}
