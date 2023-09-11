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
    @domInjetor("#data")
    private _inputData: HTMLInputElement;
    @domInjetor("#quantidade")
    private _inputQuantidade: HTMLInputElement;
    @domInjetor("#valor")
    private _inputValor: HTMLInputElement;

    private _negociacoes: NegociacaoLista = new NegociacaoLista();
    private _negociacaoView: NegociacaoView = new NegociacaoView('#negociacoesView');
    private _mensagemView: MensagemView = new MensagemView('#mensagemView');
    private _negociacaoService: NegociacaoService = new NegociacaoService();

    constructor() {
        this._negociacaoView.update(this._negociacoes);
    }

    @inspecionar()
    @logarTempoExecucao()
    public adiciona(): void {
        const negociacao = Negociacao.CriaInstancia(
            this._inputData.value,
            this._inputQuantidade.value,
            this._inputValor.value
        );

        let mensagem = "Negociação adicionada com sucesso.";

        if (this.getDiaUtil(negociacao.data)) {
            this._negociacoes.adiciona(negociacao);
            this.limparFormulario();
        } else {
            mensagem = "Apenas negociações em dias úteis são aceitas.";
        }

        imprimir(negociacao, this._negociacoes);
        this.atualizaView(mensagem);
    };

    public importarDados(): void {
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

    private getDiaUtil(data: Date): boolean {
        return (data.getDay() > DiasDaSemana.DOMINGO) && (data.getDay() < DiasDaSemana.SABADO);
    }

    private limparFormulario(): void {
        this._inputData.value = '';
        this._inputQuantidade.value = '';
        this._inputValor.value = '';

        this._inputData.focus;
    }

    private atualizaView(mensagem: string): void {
        this._negociacaoView.update(this._negociacoes);
        this._mensagemView.update(mensagem);
    }
}