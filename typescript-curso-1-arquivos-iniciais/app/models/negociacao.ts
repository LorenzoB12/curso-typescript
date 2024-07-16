export class Negociacao {
    constructor(
        private _data: Date, 
        public readonly quantidade: number, 
        public readonly valor: number
    ){}

    get volume(): number {
        return (this.quantidade * this.valor);
    }

    get data(): Date {
        return new Date(this._data.getTime());
    }

    public static criaDe = (dataStr: string, quantidadeStr: string, valorStr: string): Negociacao => {
        return new Negociacao(
            new Date(dataStr.replace(/-/g, ",")),
            parseInt(quantidadeStr),
            parseFloat(valorStr)
        );
    }
}