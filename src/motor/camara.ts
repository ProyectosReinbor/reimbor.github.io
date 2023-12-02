import { Transformar } from "../basicos/transformar.js";
import { Motor } from "../motor/motor.js";

export class Camara {
    motor: Motor
    xMundo: number
    yMundo: number
    visionAncho: number
    visionAlto: number
    constructor(
        motor: Motor,
        xMundo: number,
        yMundo: number,
    ) {
        this.motor = motor
        this.xMundo = xMundo
        this.yMundo = yMundo
        this.visionAncho = 100
        this.visionAlto = 100
    }
    visible(posicionMundoObjeto: Transformar) {
        const xObjetoFinal = posicionMundoObjeto.x + posicionMundoObjeto.ancho
        const yObjetoFinal = posicionMundoObjeto.y + posicionMundoObjeto.alto
        const xVisionFinal = this.xMundo + this.visionAncho
        const yVisionFinal = this.yMundo + this.visionAlto
        return this.xMundo >= posicionMundoObjeto.x &&
            this.yMundo >= posicionMundoObjeto.y &&
            xObjetoFinal <= xVisionFinal &&
            yObjetoFinal <= yVisionFinal
    }
    posicionLienzo(posicionMundoObjeto: Transformar) {
        if (!this.visible(posicionMundoObjeto)) return false
        return new Transformar(
            this.motor,
            posicionMundoObjeto.x - this.xMundo,
            posicionMundoObjeto.y - this.yMundo,
            posicionMundoObjeto.ancho,
            posicionMundoObjeto.alto
        )
    }
}