import { Animaciones } from "../basicos/animaciones.js"
import { Transformar } from "../basicos/transformar.js"
import { Motor } from "../motor/motor.js"
import { Estados } from "./estados.js"
export class AnimacionesJugador extends Animaciones {
    estados: Estados
    posicionMundo: Transformar
    constructor(
        motor: Motor,
        estados: Estados,
    ) {
        const { src, horizontal, vertical } = estados.animaciones
        super(
            motor,
            src,
            new Transformar(motor),
            horizontal,
            vertical,
        )
        this.estados = estados
        this.posicionMundo = new Transformar(this.motor)
    }
    asignarPosicionMundo() {
        if (this.estados.posicionMundo == this.posicionMundo) return
        this.posicionMundo = this.estados.posicionMundo
        this.posicionLienzo = this.motor.camara.posicionLienzo(this.posicionMundo) as Transformar
    }
    actualizar() {
        this.asignarPosicionMundo()
        this.reproducir(this.estados.animaciones)
        this.siguienteCuadro()
        this.dibujar()
    }
}