export class View {
    constructor(seletor) {
        const elemento = document.querySelector(seletor);
        if (!elemento) {
            throw Error(`Não foi possível localizar o seletor: ${seletor}. Verifique!`);
        }
        this.elemento = elemento;
    }
    update(model) {
        let template = this.template(model);
        this.elemento.innerHTML = template;
    }
}
//# sourceMappingURL=view.js.map