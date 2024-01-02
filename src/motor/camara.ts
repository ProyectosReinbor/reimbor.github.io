import { Ubicacion, UbicacionCoordenada, UbicacionMedida } from "../objetos/ubicacion.js";
import { InterfazUbicacion } from "../objetos/interfazUbicacion.js";
import { Motor } from "../motor/motor.js";

export class Camara {
    motor: Motor
    vision: Ubicacion
    constructor(
        motor: Motor,
        vision: Ubicacion
    ) {
        this.motor = motor
        this.vision = vision
    }
    aspecto() {
        const dividorAncho = this.motor.lienzo.ancho / 100
        this.vision.medida.ancho = this.motor.lienzo.etiqueta.width / dividorAncho
        this.vision.medida.alto = 100
    }
    visible(
        ubicacion: Ubicacion
    ) {
        const visionPosicionFinal = this.vision.posicionFinal()
        const vision = {
            x: {
                inicial: this.vision.posicion.x - ubicacion.medida.ancho,
                final: visionPosicionFinal.x + ubicacion.medida.ancho,
            },
            y: {
                inicial: this.vision.posicion.y - ubicacion.medida.alto,
                final: visionPosicionFinal.y + ubicacion.medida.alto,
            },
        }
        const ubicacionPosicionFinal = ubicacion.posicionFinal()
        return vision.x.inicial <= ubicacion.posicion.x &&
            vision.y.inicial <= ubicacion.posicion.y &&
            ubicacionPosicionFinal.x <= vision.x.final &&
            ubicacionPosicionFinal.y <= vision.y.final
    }
    ubicacionLienzo(
        ubicacion: Ubicacion
    ) {
        return new InterfazUbicacion(
            this.motor,
            new Ubicacion(
                new UbicacionCoordenada(
                    ubicacion.posicion.x - this.vision.posicion.x,
                    ubicacion.posicion.y - this.vision.posicion.y,
                ),
                new UbicacionMedida(
                    ubicacion.medida.ancho,
                    ubicacion.medida.alto,
                ),
            )
        )
    }
}