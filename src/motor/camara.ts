import { Transformar } from "../componentes/transformar.js";
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
    aspecto() {
        const dividorAncho = this.motor.lienzo.ancho / 100
        this.vision.ancho = this.motor.lienzo.etiqueta.width / dividorAncho
        this.vision.alto = 100
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
        return new Transformar(
            posicion.x - this.vision.x,
            posicion.y - this.vision.y,
            posicion.ancho,
            posicion.alto,
        )
    }
}