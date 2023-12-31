import { Ubicacion, UbicacionCoordenada, UbicacionMedida } from "../componentes/ubicacion.js";
import { UbicacionInterfaz } from "../componentes/ubicacionInterfaz.js";
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
        posicion: Ubicacion
    ) {
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
    ubicacionLienzo(
        ubicacion: Ubicacion
    ) {
        return new UbicacionInterfaz(
            this.motor,
            new UbicacionCoordenada(
                ubicacion.coordenada.x - this.vision.coordenada.x,
                ubicacion.coordenada.y - this.vision.coordenada.y,
            ),
            new UbicacionMedida(
                ubicacion.medida.ancho,
                ubicacion.medida.alto,
            )
        )
    }
}