import { NombresImagenes } from "../motor/imagenes.js"
import { Motor } from "../motor/motor.js"
import { Imagen } from "./imagen.js"
import { Ubicacion } from "./ubicacion/ubicacion.js"

export class ElementosImagen extends Imagen {
  elementos: Ubicacion
  constructor(
    motor: Motor,
    nombre: NombresImagenes,
    elementos: Ubicacion,
  ) {
    super(motor, nombre)
    this.elementos = elementos
  }
  horizontal(indice: number) {
    this.elementos.coordenada.x = this.elementos.medida.ancho * indice
  }
  vertical(indice: number) {
    this.elementos.coordenada.y = this.elementos.medida.alto * indice
  }
  dibujar(pixeles: Ubicacion) {
    this.motor.lienzo.contexto.imageSmoothingEnabled = false
    this.motor.lienzo.contexto.drawImage(
      this.imagen,
      this.elementos.coordenada.x,
      this.elementos.coordenada.y,
      this.elementos.medida.ancho,
      this.elementos.medida.alto,
      pixeles.coordenada.x,
      pixeles.coordenada.y,
      pixeles.medida.ancho,
      pixeles.medida.alto,
    )
  }
}