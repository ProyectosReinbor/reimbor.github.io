import { Mago } from '../mago/mago.js';
import { Mapa } from '../mapa/mapa.js';
export class Objetos {
    constructor(motor) {
        this.motor = motor;
        this.mapa = new Mapa(this.motor);
        this.mago = new Mago(this.motor);
    }
    actualizar() {
        this.mapa.actualizar();
        this.mago.actualizar();
    }
}
