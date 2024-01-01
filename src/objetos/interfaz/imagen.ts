import { Motor } from "../../motor/motor.js"
import { NombresImagenes } from "../../motor/imagenes.js"
import {
  UbicacionCoordenada,
  UbicacionMedida
} from "./ubicacion.js"
import { InterfazUbicacion } from "./Interfazubicacion.js"

export class InterfazImagen {
  motor: Motor
  elemento: HTMLImageElement
  interfazUbicacion: InterfazUbicacion
  constructor(
    motor: Motor,
    interfazUbicacion: InterfazUbicacion,
    nombre: NombresImagenes,
  ) {
    this.motor = motor
    this.interfazUbicacion = interfazUbicacion
    this.elemento = this.motor.imagenes.coleccion[nombre]
  }
  dibujar() {
    const pixeles = this.interfazUbicacion.obtenerPixeles()
    this.motor.lienzo.contexto.imageSmoothingEnabled = false
    this.motor.lienzo.contexto.drawImage(
      this.elemento,
      pixeles.posicion.x,
      pixeles.posicion.y,
      pixeles.medida.ancho,
      pixeles.medida.alto,
    )
  }
}