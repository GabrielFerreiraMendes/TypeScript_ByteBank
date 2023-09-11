export abstract class View<T>{
    protected _elemento: HTMLElement;

    constructor(seletor: string) {
        const elemento = document.querySelector(seletor);

        if (elemento) {
            this._elemento = document.querySelector(seletor) as HTMLInputElement;
        } else {
            throw new Error(`Seletor ${seletor} não existe no DOM.`)
        };
    }
    
    public update(modelo: T): void {
        let template = this.template(modelo);
        this._elemento.innerHTML = template;
    }

    protected abstract template(modelo: T): string;
}