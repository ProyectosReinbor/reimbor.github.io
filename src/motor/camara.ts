import { Transformar } from "../basicos/transformar.js";
import { Motor } from "../motor/motor.js";

export class Camara {
    motor: Motor
    vision: Transformar
    constructor(
        motor: Motor,
        vision: Transformar
    ) {
        this.motor = motor
        this.vision = vision
    }
    visible(posicion: Transformar) {
        const vision = {
            x: {
                inicial: this.vision.x - posicion.ancho,
                final: this.vision.x + this.vision.ancho + posicion.ancho,
            },
            y: {
                inicial: this.vision.y - posicion.alto,
                final: this.vision.y + this.vision.alto + posicion.alto,
            },
        }
        const objeto = {
            xFinal: posicion.x + posicion.ancho,
            yFinal: posicion.y + posicion.alto,
        }
        return vision.x.inicial <= posicion.x &&
            vision.y.inicial <= posicion.y &&
            objeto.xFinal <= vision.x.final &&
            objeto.yFinal <= vision.y.final
    }
    posicionLienzo(posicion: Transformar) {
        if (!this.visible(posicion)) return false
        return new Transformar(
            this.motor,
            posicion.x - this.vision.x,
            posicion.y - this.vision.x,
            posicion.ancho,
            posicion.alto
        )
    }
}