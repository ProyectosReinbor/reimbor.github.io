import { ElementosAnimaciones } from "../objetos/elementosAnimaciones/elementosAnimaciones.js"
import { Motor } from "../motor/motor.js"
import { Estado } from "./estado.js"
export class AnimacionesMago {
    motor: Motor
    estado: Estado
    elementosAnimaciones: ElementosAnimaciones
    constructor(
        motor: Motor,
        estado: Estado,
    ) {
        this.motor = motor
        this.estado = estado
        this.elementosAnimaciones = new ElementosAnimaciones(
            this.motor,
            this.estado.animacion.nombre,
            this.estado.animacion.elementos,
        )
    }
    dibujar() {
        const pixeles = this.estado.ubicacionMundo.obtenerPixeles()
        if (pixeles == undefined) return
        this.elementosAnimaciones.animar(this.estado.animacion.animacion)
        this.elementosAnimaciones.reproducir()
        this.elementosAnimaciones.elemento()
        this.elementosAnimaciones.dibujar(pixeles)
    }
    actualizar() {
        this.dibujar()
    }
}