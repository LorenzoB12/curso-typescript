export class View {
    constructor(seletor, escapar) {
        this.escapar = false;
        const elemento = document.querySelector(seletor);
        if (!elemento) {
            throw Error(`Não foi possível localizar o seletor: ${seletor}. Verifique!`);
        }
        this.elemento = elemento;
        if (escapar)
            this.escapar = escapar;
    }
    update(model) {
        let template = this.template(model);
        if (this.escapar) {
            template = template.replace(/<script>[\s\S]*?<script>/, "");
        }
        this.elemento.innerHTML = template;
    }
}
