import { negociacaoInterface } from "../interfaces/negociacaoInterface";
import { Negociacao } from "../models/negociacao.js";

export class NegociacaoService {
    public obterNegociacao(): Promise<Array<Negociacao>> {
        return fetch('http://localhost:8181/dados')
            .then(res => res.json())
            .then((dados: Array<negociacaoInterface>) => {
                return dados.map(dado => {
                    return new Negociacao(new Date(), dado.vezes, dado.montante);
                })
            });
    }
}