export class Negociacao {
    constructor(_data, quantidade, valor) {
        this._data = _data;
        this.quantidade = quantidade;
        this.valor = valor;
    }
    get volume() {
        return (this.quantidade * this.valor);
    }
    get data() {
        return new Date(this._data.getTime());
    }
    paraTexto() {
        return `
            Data: ${this.data}
            Quantidade: ${this.quantidade}
            Valor: ${this.valor}
        `;
    }
    ehIgual(negociacao) {
        return this.data.getDate() === negociacao.data.getDate()
            && this.data.getMonth() === negociacao.data.getMonth()
            && this.data.getFullYear() === negociacao.data.getFullYear();
    }
}
Negociacao.criaDe = (dataStr, quantidadeStr, valorStr) => {
    return new Negociacao(new Date(dataStr.replace(/-/g, ",")), parseInt(quantidadeStr), parseFloat(valorStr));
};
//# sourceMappingURL=negociacao.js.map