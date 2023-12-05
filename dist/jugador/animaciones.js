import { Animaciones } from "../basicos/animaciones.js";
export class AnimacionesJugador extends Animaciones {
    constructor(motor, estados) {
        const { src, horizontal, vertical, posicionLienzo } = estados.animaciones;
        super(motor, src, posicionLienzo, horizontal, vertical);
        this.estados = estados;
    }
    actualizar() {
        if (!this.estados.animaciones.visible)
            return;
        this.posicionLienzo = this.estados.animaciones.posicionLienzo;
        this.reproducir(this.estados.animaciones);
        this.siguienteCuadro();
        this.dibujar();
    }
}
