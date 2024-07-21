import { Modelo } from "../interfaces/modelo.js";
import { Negociacao } from "./negociacao.js";

export class Negociacoes implements Modelo<Negociacoes>{
    private negociacoes: Array<Negociacao> = []; // = private negociacoes: Negociacao[] = [];

    adiciona(negociacao: Negociacao){
        this.negociacoes.push(negociacao);
    }

    lista(): ReadonlyArray<Negociacao> /* = readonly Negociacao[] */ {
        return this.negociacoes;
    }

    public paraTexto(): string {
        return JSON.stringify(this.negociacoes, null, 2);
    }

    public ehIgual(negociacoes: Negociacoes): boolean{
        return JSON.stringify(this.lista()) === JSON.stringify(negociacoes.lista());
    }
}
