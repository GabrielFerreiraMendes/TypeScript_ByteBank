import { modeloInterface } from "../interfaces/modeloInterface.js";

export class Negociacao implements modeloInterface<Negociacao> {
    constructor(
        private _data: Date,
        public readonly quantidade: number,
        public readonly valor: number
    ) { }

    get data(): Date {
        const data = new Date(this._data.getTime());
        return data;
    }

    get volume(): number {
        return this.quantidade * this.valor;
    }

    public static CriaInstancia(dataString: string, quantidadeString: string, valorString: string): Negociacao {
        const exp = /-/g;
        const date = new Date(dataString.replace(exp, ','));
        const quantidade = parseInt(quantidadeString);
        const valor = parseFloat(valorString);

        return new Negociacao(date, quantidade, valor);
    }

    public paraTexto(): string {
        return ` Data: ${this.data}
                 Quantidade: ${this.quantidade}
                 Valor: ${this.quantidade}`;
    }

    public objetoExiste(negociacao: Negociacao): boolean {
        return this.data.getDate() == negociacao.data.getDate() &&
            this.data.getMonth() == negociacao.data.getMonth() &&
            this.data.getFullYear() == negociacao.data.getFullYear();
    }
}