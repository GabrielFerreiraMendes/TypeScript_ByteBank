export class View {
    constructor(seletor, escapar) {
        const elemento = document.querySelector(seletor);
        if (elemento) {
            this._elemento = document.querySelector(seletor);
        }
        else {
            throw new Error(`Seletor ${seletor} não existe no DOM.`);
        }
        ;
        escapar ? this._escapar = escapar : this._escapar = false;
    }
    update(modelo) {
        let template = this.template(modelo);
        if (this._escapar) {
            template = template.replace(/<script>[\s\S]*?<script>/, '');
        }
        this._elemento.innerHTML = template;
    }
}
