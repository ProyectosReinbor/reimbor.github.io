import { Motor } from "../motor/motor.js"
import { NombresImagenes } from "../motor/imagenes.js"
import { Transformar } from "./transformar.js"

export class Imagen {
  motor: Motor
  elemento?: HTMLImageElement
  constructor(
    motor: Motor,
    nombre: NombresImagenes,
  ) {
    this.motor = motor
    this.asignarImagen(nombre)
  }
  async asignarImagen(nombre: NombresImagenes) {
    this.elemento = await this.motor.imagenes.obtener(
      nombre,
    )
  }
  actualizar(
    elementoImagen: Transformar,
    posicionLienzo: Transformar
  ) {
    this.dibujar(
      elementoImagen,
      posicionLienzo,
    )
  }
  dibujar(
    elementoImagen: Transformar,
    posicionLienzo: Transformar
  ) {
    if (this.elemento == undefined) return
    this.motor.lienzo.contexto.imageSmoothingEnabled = false
    this.motor.lienzo.contexto.drawImage(
      this.elemento,
      elementoImagen.x,
      elementoImagen.y,
      elementoImagen.ancho,
      elementoImagen.alto,
      posicionLienzo.x,
      posicionLienzo.y,
      posicionLienzo.ancho,
      posicionLienzo.alto,
    )
  }
}