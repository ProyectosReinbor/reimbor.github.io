import { Transformar } from "../basicos/transformar.js";
import { Estados } from "./estados.js";
import { Mando } from "./mando.js";
import { AnimacionesJugador } from './animaciones.js';
export class Jugador {
    constructor(motor) {
        this.motor = motor;
        this.estados = new Estados(this.motor, new Transformar(motor, 0, 0, 20, 20), 3);
        this.mando = new Mando(this.motor, this.estados);
        this.animaciones = new AnimacionesJugador(this.motor, this.estados);
    }
    actualizar() {
        this.mando.actualizar();
        this.animaciones.actualizar();
        this.estados.actualizar();
    }
}
