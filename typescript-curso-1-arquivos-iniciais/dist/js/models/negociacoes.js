export class Negociacoes {
    constructor() {
        this.negociacoes = []; // = private negociacoes: Negociacao[] = [];
    }
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    lista() {
        return this.negociacoes;
    }
}
