import { Animaciones } from "../basico/animaciones.js"
import { Motor } from "../motor/motor.js"
import { Estado } from "./estado.js"
export class AnimacionesMago extends Animaciones {
    estado: Estado
    constructor(
        motor: Motor,
        estado: Estado,
    ) {
        const {
            nombre,
            posicionLienzo,
            ancho,
            alto,
            horizontal,
            vertical,
        } = estado.parametrosAnimacion
        super(
            motor,
            nombre,
            posicionLienzo,
            ancho,
            alto,
            horizontal,
            vertical,
        )
        this.estado = estado
    }
    actualizar() {
        if (!this.estado.parametrosAnimacion.visible) return
        this.posicion = this.estado.parametrosAnimacion.posicionLienzo
        this.reproducir(
            this.estado.parametrosAnimacion.indice,
            this.estado.parametrosAnimacion.objetos,
        )
        this.cuadro()
        this.dibujar()
    }
}