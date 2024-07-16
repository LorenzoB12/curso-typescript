export abstract class View<T> {
    protected elemento: HTMLElement;
    private escapar: boolean = false;

    constructor(seletor: string, escapar?: boolean){
        const elemento = document.querySelector(seletor);
        if(!elemento){
            throw Error(`Não foi possível localizar o seletor: ${seletor}. Verifique!`);
        }
        this.elemento = elemento as HTMLElement;
        if(escapar) this.escapar = escapar;
    }

    update(model: T): void{
        let template = this.template(model);
        if(this.escapar) {
            template = template.replace(/<script>[\s\S]*?<script>/, "");
        }
        this.elemento.innerHTML = template;
    }

    protected abstract template(model: T): string
}