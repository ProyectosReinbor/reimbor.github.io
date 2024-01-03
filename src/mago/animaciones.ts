import { Animaciones } from "../objetos/animaciones.js"
import { ElementosImagen } from "../objetos/elementosImagen.js"
import { Imagen } from "../objetos/imagen.js"
import { Motor } from "../motor/motor.js"
import { Estado } from "./estado.js"
export class AnimacionesMago {
    motor: Motor
    estado: Estado
    animaciones: Animaciones
    constructor(
        motor: Motor,
        estado: Estado,
    ) {
        this.motor = motor
        this.estado = estado
        this.animaciones = new Animaciones(
            this.motor,
            new ElementosImagen(
                this.motor,
                new Imagen(this.motor, this.estado.animacion.nombre),
                this.estado.animacion.elementos,
            ),
        )
    }
    dibujar() {
        const pixeles = this.estado.ubicacionMundo.obtenerPixeles()
        if (pixeles == undefined) return
        this.animaciones.reproducir(this.estado.animacion.animacion)
        this.animaciones.elemento()
        this.animaciones.dibujar(pixeles)
    }
}