import { Animaciones } from "../basicos/animaciones.js"
import { Motor } from "../motor/motor.js"
import { Estados } from "./estados.js"
export class AnimacionesJugador extends Animaciones {
    estados: Estados
    constructor(
        motor: Motor,
        estados: Estados,
    ) {
        const { src, horizontal, vertical, posicionLienzo } = estados.animaciones
        super(
            motor,
            src,
            posicionLienzo,
            horizontal,
            vertical,
        )
        this.estados = estados
    }
    actualizar() {
        if (!this.estados.animaciones.visible) return
        this.posicionLienzo = this.estados.animaciones.posicionLienzo
        this.reproducir(
            this.estados.animaciones.indice,
            this.estados.animaciones.objetos,
        )
        this.siguienteCuadro()
        this.dibujar()
    }
}