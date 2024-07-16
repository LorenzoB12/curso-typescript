import { DiasDaSemana } from "../enums/dias-da-semana.js";
import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { MensagemView } from "../views/mensagem-view.js";
import { NegociacoesView } from "../views/negociacoes-view.js";
export class NegociacaoController {
    constructor() {
        this.negociacoes = new Negociacoes();
        this.negociacoesView = new NegociacoesView("#negociacoesView", true);
        this.mensagemView = new MensagemView("#mensagemView");
        this.adiciona = () => {
            const negociacao = this.criaNegociacao();
            if (!this.isDiaUtil(negociacao.data)) {
                this.mensagemView.update("Apenas negociações em dias úteis são aceitas!");
                return;
            }
            this.negociacoes.adiciona(negociacao);
            this.limparFormulario();
            this.atualizaView();
        };
        this.criaNegociacao = () => {
            return Negociacao.criaDe(this.inputData.value, this.inputQuantidade.value, this.inputValor.value);
        };
        this.limparFormulario = () => {
            this.inputData.value = '';
            this.inputQuantidade.value = '';
            this.inputValor.value = '';
            this.inputData.focus();
        };
        this.atualizaView = () => {
            this.negociacoesView.update(this.negociacoes);
            this.mensagemView.update("Negociação adicionada com sucesso!");
        };
        this.isDiaUtil = (data) => {
            return data.getDay() > DiasDaSemana.DOMINGO && data.getDay() < DiasDaSemana.SABADO;
        };
        this.inputData = document.querySelector("#data");
        this.inputQuantidade = document.querySelector("#quantidade");
        this.inputValor = document.querySelector("#valor");
        this.negociacoesView.update(this.negociacoes);
    }
}
