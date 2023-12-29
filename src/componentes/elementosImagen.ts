import { NombresImagenes } from "../motor/imagenes.js"
import { Imagen } from "./imagen.js"
import { Transformar } from "./transformar.js"

export class ElementosImagen {
  private imagen: Imagen
  private elementos: Transformar
  private horizontal: number
  private vertical: number
  constructor(
    imagen: Imagen,
    elementos: Transformar,
    horizontal: number,
    vertical: number,
  ) {
    this.imagen = imagen
    this.elementos = elementos
    this.horizontal = horizontal
    this.vertical = vertical
  }
  asignarImagen() {
    const medidas = this.imagen.medidas()
    this.asignarHorizontal(medidas.ancho)
    this.asignarVertical(medidas.alto)
  }
  asignarHorizontal(anchoElemento: number) {
    if (this.horizontal == 0)
      this.horizontal = anchoElemento / this.elementos.ancho
    else
      this.elementos.ancho = anchoElemento / this.horizontal
  }
  asignarVertical(altoElemento: number) {
    if (this.vertical == 0)
      this.vertical = altoElemento / this.elementos.alto
    else
      this.elementos.alto = altoElemento / this.vertical
  }
  dibujar(
    posicionLienzo: Transformar
  ) {
    this.imagen.dibujarElemento(
      this.elementos,
      posicionLienzo,
    )
  }
  elementosVertical(indice: number) {
    this.elementos.y = indice * this.elementos.alto
  }
  elementosHorizontal(indice: number) {
    this.elementos.x = indice * this.elementos.ancho
  }
}