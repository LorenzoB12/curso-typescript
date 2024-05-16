import { Negociacao } from "../models/negociacao.js";
export class NegociacaoController {
    constructor() {
        this.inputData = document.querySelector("#data");
        this.inputQuantidade = document.querySelector("#quantidade");
        this.inputValor = document.querySelector("#valor");
    }
    adiciona() {
        const exp = /-/g;
        const negociacao = new Negociacao(new Date(this.inputData.value.replace(exp, ",")), parseInt(this.inputQuantidade.value), parseFloat(this.inputValor.value));
        console.log(negociacao);
    }
}
