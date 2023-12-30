import { Animaciones } from "../componentes/animaciones.js"
import { ElementosImagen } from "../componentes/elementosImagen.js"
import { Imagen } from "../componentes/imagen.js"
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
                new Imagen(this.motor, this.estado.animacion.nombre),
                this.estado.animacion.elementos,
                this.estado.animacion.horizontal,
                this.estado.animacion.vertical
            )
        )
    }
    dibujar() {
        const pixeles = this.estado.posicionMundo.obtenerPixeles()
        if (pixeles == false) return false
        this.animaciones.reproducir(this.estado.animacion.animacion)
        this.animaciones.elemento()
        this.animaciones.dibujar(pixeles)
    }
}