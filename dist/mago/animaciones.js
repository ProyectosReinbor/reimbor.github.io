import { Animaciones } from "../basico/animaciones.js";
export class AnimacionesMago extends Animaciones {
    constructor(motor, estado) {
        const { nombre, posicionLienzo, ancho, alto, horizontal, vertical, } = estado.parametrosAnimacion;
        super(motor, nombre, posicionLienzo, ancho, alto, horizontal, vertical);
        this.estado = estado;
    }
    actualizar() {
        if (!this.estado.parametrosAnimacion.visible)
            return;
        this.posicionLienzo = this.estado.parametrosAnimacion.posicionLienzo;
        this.reproducir(this.estado.parametrosAnimacion.indice, this.estado.parametrosAnimacion.objetos);
        this.siguienteCuadro();
        this.dibujar();
    }
}
