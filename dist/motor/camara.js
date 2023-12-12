import { Transformar } from "../basicos/transformar.js";
export class Camara {
    constructor(motor, vision) {
        this.motor = motor;
        this.vision = vision;
    }
    aspecto() {
        const dividorAncho = this.motor.anchoLienzo / 100;
        this.vision.ancho = this.motor.lienzo.width / dividorAncho;
        this.vision.alto = 100;
    }
    visible(posicion) {
        const vision = {
            x: {
                inicial: this.vision.x - posicion.ancho,
                final: this.vision.x + this.vision.ancho + posicion.ancho,
            },
            y: {
                inicial: this.vision.y - posicion.alto,
                final: this.vision.y + this.vision.alto + posicion.alto,
            },
        };
        const objeto = {
            xFinal: posicion.x + posicion.ancho,
            yFinal: posicion.y + posicion.alto,
        };
        return vision.x.inicial <= posicion.x &&
            vision.y.inicial <= posicion.y &&
            objeto.xFinal <= vision.x.final &&
            objeto.yFinal <= vision.y.final;
    }
    posicionLienzo(posicion) {
        if (!this.visible(posicion))
            return false;
        return new Transformar(this.motor, posicion.x - this.vision.x, posicion.y - this.vision.y, posicion.ancho, posicion.alto);
    }
}
