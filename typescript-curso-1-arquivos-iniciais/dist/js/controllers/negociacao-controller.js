import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
export class NegociacaoController {
    constructor() {
        this.negociacoes = new Negociacoes();
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
        this.negociacoes.adiciona(negociacao);
        this.limparFormulario();
        console.log(this.negociacoes.lista());
    }
    criaNegociacao() {
        const exp = /-/g;
        return new Negociacao(new Date(this.inputData.value.replace(exp, ",")), parseInt(this.inputQuantidade.value), parseFloat(this.inputValor.value));
    }
}
