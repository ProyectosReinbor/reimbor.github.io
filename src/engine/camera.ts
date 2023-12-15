import { Transform } from "../basic/transform.js";
import { Engine } from "../engine/engine.js";

export class Camera {
    engine: Engine
    vision: Transform
    constructor(
        engine: Engine,
        vision: Transform
    ) {
        this.engine = engine
        this.vision = vision
    }
    aspecto() {
        const dividorAncho = this.engine.anchoLienzo / 100
        this.vision.ancho = this.engine.lienzo.width / dividorAncho
        this.vision.alto = 100
    }
    visible(posicion: Transform) {
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
    posicionLienzo(posicion: Transform) {
        if (!this.visible(posicion)) return false
        return new Transform(
            this.engine,
            posicion.x - this.vision.x,
            posicion.y - this.vision.y,
            posicion.ancho,
            posicion.alto
        )
    }
}