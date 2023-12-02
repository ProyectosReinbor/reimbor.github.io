import { Motor } from "../motor/motor.js"
import { Transformar } from "./transformar.js"
export class Imagen {
  motor: Motor
  src: string
  puedeDibujar: boolean
  imagen: HTMLImageElement
  constructor(
    motor: Motor,
    src: string,
  ) {
    this.motor = motor
    this.src = src
    this.puedeDibujar = false
    this.imagen = new Image()
    this.imagen.addEventListener("load", () => this.cargoImagen())
    this.imagen.src = this.src
  }
  cargoImagen() {
    this.puedeDibujar = true
  }
  actualizar(posicionLienzo: Transformar) {
    this.dibujar(posicionLienzo)
  }
  dibujar(posicionLienzo: Transformar) {
    if (!this.puedeDibujar) return
    this.motor.contexto.imageSmoothingEnabled = false
    const { x, y, ancho, alto } = posicionLienzo.pixeles()
    this.motor.contexto.drawImage(this.imagen, x, y, ancho, alto)

  }
}