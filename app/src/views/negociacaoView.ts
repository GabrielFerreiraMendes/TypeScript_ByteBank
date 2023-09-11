import { escapar } from "../decorators/escapar.js";
import { NegociacaoLista } from "../models/negociacaoLista.js";
import { View } from "./view.js";

export class NegociacaoView extends View<NegociacaoLista>{

    @escapar()
    protected template(modelo: NegociacaoLista): string {
        return `
            <table class="table table hover table-bordered">
                <thead>
                    <tr>
                        <th>DATA</th>
                        <th>QUANTIDADE</th>
                        <th>VALOR</th>
                    </tr>
                </thead>
                <tbody>
                    ${modelo.lista().map(negociacao => {
            return `
                            <tr>
                                <td>
                                    ${this.formatarData(negociacao.data)}
                                </td>    
                                <td>
                                    ${negociacao.quantidade}
                                </td>
                                <td>
                                    ${negociacao.valor}
                                </td>                                
                            </tr>
                        `;
        }).join('')
            }
                </tbody>
            </table>        
        `;
    }

    private formatarData(data: Date): string {
        return Intl.DateTimeFormat().format(data);
    }
}