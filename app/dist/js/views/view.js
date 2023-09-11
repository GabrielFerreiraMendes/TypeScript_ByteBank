export class View {
    constructor(seletor) {
        const elemento = document.querySelector(seletor);
        if (elemento) {
            this._elemento = document.querySelector(seletor);
        }
        else {
            throw new Error(`Seletor ${seletor} não existe no DOM.`);
        }
        ;
    }
    update(modelo) {
        let template = this.template(modelo);
        this._elemento.innerHTML = template;
    }
}
//# sourceMappingURL=view.js.map