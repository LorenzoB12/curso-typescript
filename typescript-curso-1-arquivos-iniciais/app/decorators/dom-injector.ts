export function domInjector(seletor: string){
    return function(target: any, propertyKey: string){
        let elemento: HTMLElement;
        const getter = function(){
            if(!elemento){
                console.log(`Buscando elemento do DOM com o seletor ${seletor} para injetar em ${propertyKey}`)
                elemento = <HTMLElement>document.querySelector(seletor);
            }
            return elemento;
        }

        Object.defineProperty(
            target, 
            propertyKey, 
            {get: getter}
        );
    }
}