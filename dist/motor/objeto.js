export class Objeto {
    constructor() {
        this.componentes = [];
    }
    actualizar() {
        this.componentes.forEach(componente => {
            componente.actualizar();
        });
    }
}
