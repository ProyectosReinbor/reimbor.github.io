import { Animaciones } from "../basico/animaciones.js"
import { Motor } from "../motor/motor.js"
import { Estado } from "./estado.js"
export class AnimacionesMago extends Animaciones {
    estado: Estado
    constructor(
        motor: Motor,
        estado: Estado,
    ) {
        const { src, horizontal, vertical, posicionLienzo } = estado.parametrosAnimacion
        super(
            motor,
            src,
            posicionLienzo,
            horizontal,
            vertical,
        )
        this.estado = estado
    }
    actualizar() {
        if (!this.estado.parametrosAnimacion.visible) return
        this.posicionLienzo = this.estado.parametrosAnimacion.posicionLienzo
        this.reproducir(
            this.estado.parametrosAnimacion.indice,
            this.estado.parametrosAnimacion.objetos,
        )
        this.siguienteCuadro()
        this.dibujar()
    }
}