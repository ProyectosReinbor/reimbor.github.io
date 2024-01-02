import { Motor } from "../motor/motor.js"
import { Imagen } from "./imagen.js"
import { Ubicacion } from "./ubicacion.js"

export class ElementosImagen {
  motor: Motor
  imagen: Imagen
  elementos: Ubicacion
  constructor(
    motor: Motor,
    imagen: Imagen,
    elementos: Ubicacion,
  ) {
    this.motor = motor
    this.imagen = imagen
    this.elementos = elementos
  }
  horizontal(indice: number) {
    this.elementos.posicion.x = this.elementos.medida.ancho * indice
  }
  vertical(indice: number) {
    this.elementos.posicion.y = this.elementos.medida.alto * indice
  }
  dibujar(pixeles: Ubicacion) {
    this.motor.lienzo.contexto.imageSmoothingEnabled = false
    this.motor.lienzo.contexto.drawImage(
      this.imagen.imagen,
      this.elementos.posicion.x,
      this.elementos.posicion.y,
      this.elementos.medida.ancho,
      this.elementos.medida.alto,
      pixeles.posicion.x,
      pixeles.posicion.y,
      pixeles.medida.ancho,
      pixeles.medida.alto,
    )
  }
}