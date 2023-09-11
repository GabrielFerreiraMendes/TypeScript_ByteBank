var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { imprimir } from "../Utils/imprimir.js";
import { domInjetor } from "../decorators/domInjetor.js";
import { inspecionar } from "../decorators/inspecionar.js";
import { logarTempoExecucao } from "../decorators/logarTempoExecucao.js";
import { DiasDaSemana } from "../enums/diasDaSemana.js";
import { Negociacao } from "../models/negociacao.js";
import { NegociacaoLista } from "../models/negociacaoLista.js";
import { NegociacaoService } from "../services/negociacaoService.js";
import { MensagemView } from "../views/mensagemView.js";
import { NegociacaoView } from "../views/negociacaoView.js";
export class NegociacaoCotroller {
    constructor() {
        this._negociacoes = new NegociacaoLista();
        this._negociacaoView = new NegociacaoView('#negociacoesView');
        this._mensagemView = new MensagemView('#mensagemView');
        this._negociacaoService = new NegociacaoService();
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
        imprimir(negociacao, this._negociacoes);
        this.atualizaView(mensagem);
    }
    ;
    importarDados() {
        this._negociacaoService.obterNegociacao().then(negociacoesDeHoje => {
            return negociacoesDeHoje.filter(negociacaoDeHoje => {
                return !this._negociacoes.lista().some(negociacao => negociacao.objetoExiste(negociacaoDeHoje));
            });
        }).then(negociacoesDeHoje => {
            for (let negociacao of negociacoesDeHoje) {
                this._negociacoes.adiciona(negociacao);
            }
            this._negociacaoView.update(this._negociacoes);
        });
    }
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
__decorate([
    domInjetor("#data")
], NegociacaoCotroller.prototype, "_inputData", void 0);
__decorate([
    domInjetor("#quantidade")
], NegociacaoCotroller.prototype, "_inputQuantidade", void 0);
__decorate([
    domInjetor("#valor")
], NegociacaoCotroller.prototype, "_inputValor", void 0);
__decorate([
    inspecionar(),
    logarTempoExecucao()
], NegociacaoCotroller.prototype, "adiciona", null);
//# sourceMappingURL=negociacaoController.js.map