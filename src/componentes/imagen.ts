import { Motor } from "../motor/motor.js"
import { NombresImagenes } from "../motor/imagenes.js"
import { Transformar } from "./transformar.js"

export class Imagen {
  private motor: Motor
  private elemento: HTMLImageElement
  constructor(
    motor: Motor,
    nombre: NombresImagenes,
  ) {
    this.motor = motor
    this.elemento = this.motor.imagenes.coleccion[nombre]
  }
  medidas() {
    return {
      ancho: this.elemento.width,
      alto: this.elemento.height,
    }
  }
  dibujarElemento(
    elementoImagen: Transformar,
    posicionLienzo: Transformar
  ) {
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
  dibujar(
    posicionLienzo: Transformar
  ) {
    this.motor.lienzo.contexto.imageSmoothingEnabled = false
    this.motor.lienzo.contexto.drawImage(
      this.elemento,
      posicionLienzo.x,
      posicionLienzo.y,
      posicionLienzo.ancho,
      posicionLienzo.alto,
    )
  }
}