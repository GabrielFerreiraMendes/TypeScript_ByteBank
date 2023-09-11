import { imprimivelInterface } from "../interfaces/imprimivelInterface.js";

export function imprimir(... objetos: Array<imprimivelInterface>){
    for(let objeto of objetos){
        console.log(objeto.paraTexto());
    }
}
