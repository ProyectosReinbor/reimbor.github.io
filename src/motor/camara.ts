import { Ubicacion } from "../objetos/ubicacion/ubicacion.js";
import { UbicacionInterfaz } from "../objetos/ubicacionInterfaz.js";
import { Motor } from "../motor/motor.js";
import { UbicacionCoordenada } from "../objetos/ubicacion/coordenada.js";
import { UbicacionMedida } from "../objetos/ubicacion/medida.js";

export class Camara extends Ubicacion {
    motor: Motor
    constructor(
        motor: Motor,
        coordenada: UbicacionCoordenada,
        medida: UbicacionMedida,
    ) {
        super(coordenada, medida)
        this.motor = motor
    }
    aspecto() {
        const dividorAncho = this.motor.lienzo.ancho / 100
        this.medida.ancho = this.motor.lienzo.etiqueta.width / dividorAncho
        this.medida.alto = 100
    }
    visible(
        ubicacion: Ubicacion
    ) {
        const visionPosicionFinal = this.coordenadaFinal()
        const vision = {
            x: {
                inicial: this.coordenada.x - ubicacion.medida.ancho,
                final: visionPosicionFinal.x + ubicacion.medida.ancho,
            },
            y: {
                inicial: this.coordenada.y - ubicacion.medida.alto,
                final: visionPosicionFinal.y + ubicacion.medida.alto,
            },
        }
        const ubicacionPosicionFinal = ubicacion.coordenadaFinal()
        return vision.x.inicial <= ubicacion.coordenada.x &&
            vision.y.inicial <= ubicacion.coordenada.y &&
            ubicacionPosicionFinal.x <= vision.x.final &&
            ubicacionPosicionFinal.y <= vision.y.final
    }
    ubicacionLienzo(
        ubicacion: Ubicacion
    ) {
        return new UbicacionInterfaz(
            new UbicacionCoordenada(
                ubicacion.coordenada.x - this.coordenada.x,
                ubicacion.coordenada.y - this.coordenada.y,
            ),
            new UbicacionMedida(
                ubicacion.medida.ancho,
                ubicacion.medida.alto,
            ),
            this.motor,
        )
    }
}