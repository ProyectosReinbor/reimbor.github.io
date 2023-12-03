import { Animaciones } from "../basicos/animaciones.js";
import { Transformar } from "../basicos/transformar.js";
export class AnimacionesJugador extends Animaciones {
    constructor(motor, estados) {
        const { src, horizontal, vertical } = estados.animaciones;
        super(motor, src, new Transformar(motor), horizontal, vertical);
        this.estados = estados;
        this.posicionMundo = new Transformar(this.motor);
    }
    asignarPosicionMundo() {
        if (this.estados.posicionMundo == this.posicionMundo)
            return;
        this.posicionMundo = this.estados.posicionMundo;
        this.posicionLienzo = this.motor.camara.posicionLienzo(this.posicionMundo);
    }
    actualizar() {
        this.asignarPosicionMundo();
        this.reproducir(this.estados.animaciones);
        this.siguienteCuadro();
        this.dibujar();
    }
}
