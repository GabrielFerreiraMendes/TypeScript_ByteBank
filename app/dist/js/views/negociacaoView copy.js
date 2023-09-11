export class NegociacaoView {
    constructor(seletor) {
        this._elemento = document.querySelector(seletor);
    }
    template(modelo) {
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
                                    ${new Intl.DateTimeFormat().format(negociacao.data)}
                                </td>    
                                <td>
                                    ${negociacao.quantidade}
                                </td>
                                <td>
                                    ${negociacao.valor}
                                </td>                                
                            </tr>
                        `;
        }).join('')}
                </tbody>
            </table>        
        `;
    }
    update(modelo) {
        const template = this.template(modelo);
        this._elemento.innerHTML = template;
    }
}
