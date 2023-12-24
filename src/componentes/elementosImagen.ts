import { NombresImagenes } from "../motor/imagenes.js"
import { Imagen } from "./imagen.js"
import { Transformar } from "./transformar.js"

export class ElementosImagen {
  imagen: Imagen
  elementos: Transformar
  horizontal: number
  vertical: number
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
  asignarImage(nombre: NombresImagenes) {
    this.imagen.asignarImagen(nombre)
    if (this.imagen.elemento == undefined) return
    this.asignarHorizontal(this.imagen.elemento.width)
    this.asignarVertical(this.imagen.elemento.height)
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
  actualizar(
    posicionLienzo: Transformar
  ) {
    this.imagen.dibujar(
      this.elementos,
      posicionLienzo,
    )
  }
}