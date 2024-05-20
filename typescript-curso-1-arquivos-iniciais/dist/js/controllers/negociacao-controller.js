import { Negociacao } from "../models/negociacao.js";
export class NegociacaoController {
    constructor() {
        this.limparFormulario = () => {
            this.inputData.value = '';
            this.inputQuantidade.value = '';
            this.inputValor.value = '';
            this.inputData.focus();
        };
        this.inputData = document.querySelector("#data");
        this.inputQuantidade = document.querySelector("#quantidade");
        this.inputValor = document.querySelector("#valor");
    }
    adiciona() {
        const negociacao = this.criaNegociacao();
        this.limparFormulario();
        console.log(negociacao);
    }
    criaNegociacao() {
        const exp = /-/g;
        return new Negociacao(new Date(this.inputData.value.replace(exp, ",")), parseInt(this.inputQuantidade.value), parseFloat(this.inputValor.value));
    }
}
