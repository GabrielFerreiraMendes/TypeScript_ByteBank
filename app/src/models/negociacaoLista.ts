import { modeloInterface } from "../interfaces/modeloInterface.js";
import { Negociacao } from "./negociacao.js";

export class NegociacaoLista implements modeloInterface<NegociacaoLista> {
    private _negociacoes: Negociacao[] = [];

    public adiciona(negociacao: Negociacao): void {
        this._negociacoes.push(negociacao);
    }

    public lista(): readonly Negociacao[] {
        return this._negociacoes;
    }

    public paraTexto(): string {
        return JSON.stringify(this._negociacoes, null, 2);
    }

    public objetoExiste(objeto: NegociacaoLista): boolean {
        return JSON.stringify(this._negociacoes) == JSON.stringify(objeto.lista());
    }
}