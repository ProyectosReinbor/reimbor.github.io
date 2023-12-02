import { Animaciones } from "../basicos/animaciones.js";
import { Mando } from "./mando.js";
import { Estados } from './estados.js';
import { Moverse } from "./moverse.js";
export class Jugador {
    constructor(motor) {
        this.motor = motor;
        this.estados = new Estados(this.motor);
        this.animaciones = new Animaciones(this.motor, 0, 0, 20, 20, this.estados.animaciones.SRC, this.estados.animaciones.HORIZONTAL, this.estados.animaciones.VERTICAL);
        this.mando = new Mando(this.motor, this.estados);
        this.moverse = new Moverse(this.motor, this.estados);
    }
    dibujar() {
        this.mando.dibujar();
        this.moverse.dibujar();
        this.animaciones.reproducir(this.estados.animacion());
        this.animaciones.dibujar();
    }
}
