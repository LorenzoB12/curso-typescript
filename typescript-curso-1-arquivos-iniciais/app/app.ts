import { NegociacaoController } from "./controllers/negociacao-controller.js";

const controller = new NegociacaoController();
const form = document.querySelector(".form");
if(form){
    form.addEventListener('submit', event => {
        event.preventDefault();
        controller.adiciona();
    });
} else{
    throw Error("Não foi possível inicializar a aplicação!");
}

const botaoImporta = document.querySelector("#btn-importa");
if(botaoImporta) {
    botaoImporta.addEventListener('click', function(event) {
        event.preventDefault();
        controller.importaDados();
    })
} else {
    throw Error("Botão importa não foi encontrado!");
}