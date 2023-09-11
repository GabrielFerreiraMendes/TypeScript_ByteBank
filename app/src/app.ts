import { NegociacaoCotroller } from "./controllers/negociacaoController.js";

const controller = new NegociacaoCotroller();
const formulario = document.querySelector('.form');
const botaoIncluir = document.querySelector('#botao-incluir');

if (formulario) {
    formulario.addEventListener('submit', Event => {
        Event.preventDefault();
        controller.adiciona();
    })
} else { throw new Error("Não foi possível inicializar a aplicação."); }

const botaoImportar = document.querySelector('#botao-importar');
if (botaoImportar) {
    botaoImportar?.addEventListener('click', Event => {
        Event.preventDefault();
        controller.importarDados();
    })
} else { throw new Error("Não foi possível inicializar a aplicação."); }