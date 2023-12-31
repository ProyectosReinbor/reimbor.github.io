import { Motor } from "../motor/motor.js"
import { NombresImagenes } from "../motor/imagenes.js"
import { Ubicacion } from "./ubicacion/ubicacion.js"

export class Imagen {
  motor: Motor
  imagen: HTMLImageElement
  constructor(
    motor: Motor,
    nombre: NombresImagenes,
  ) {
    this.motor = motor
    this.imagen = this.motor.imagenes.coleccion[nombre]
  }
  dibujar(pixeles: Ubicacion) {
    this.motor.lienzo.contexto.imageSmoothingEnabled = false
    this.motor.lienzo.contexto.drawImage(
      this.imagen,
      pixeles.coordenada.x,
      pixeles.coordenada.y,
      pixeles.medida.ancho,
      pixeles.medida.alto,
    )
  }
  actualizar(pixeles: Ubicacion) {
    this.dibujar(pixeles)
  }
}