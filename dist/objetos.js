import { Mago } from './mago/mago.js';
import { Mapa } from './mapa/mapa.js';
import { Motor } from './motor/motor.js';
export class Objetos {
    constructor() {
        const despuesActualizar = () => {
            this.actualizar();
        };
        this.motor = new Motor(despuesActualizar);
        this.mago = new Mago(this.motor);
        this.mapa = new Mapa(this.motor);
    }
    actualizar() {
        this.mapa.actualizar();
        this.mago.actualizar();
    }
}
