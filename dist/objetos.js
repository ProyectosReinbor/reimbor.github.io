import { Jugador } from './jugador/jugador.js';
import { Motor } from './motor/motor.js';
export class Objetos {
    constructor() {
        this.motor = new Motor(this);
        this.jugador = new Jugador(this.motor);
    }
    iniciar() {
        this.jugador = new Jugador(this.motor);
    }
    actualizar() {
        this.jugador.actualizar();
    }
}
