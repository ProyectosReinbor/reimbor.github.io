import { Animaciones } from "../basico/animaciones.js";
export class AnimacionesMago extends Animaciones {
    constructor(motor, estado) {
        const { src, horizontal, vertical, posicionLienzo } = estado.parametrosAnimacion;
        super(motor, src, posicionLienzo, horizontal, vertical);
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
