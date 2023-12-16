import { Motor } from "../motor/motor.js"
import { Transformar } from "./transformar.js"
export class Imagen {
  motor: Motor
  src: string
  puedeDibujar: boolean
  posicionLienzo: Transformar
  imagen: HTMLImageElement
  constructor(
    motor: Motor,
    src: string,
    posicionLienzo: Transformar
  ) {
    this.motor = motor
    this.src = src
    this.puedeDibujar = false
    this.posicionLienzo = posicionLienzo
    this.imagen = new Image()
    this.imagen.addEventListener("load", () => this.cargoImagen())
    this.imagen.src = this.src
  }
  cargoImagen() {
    this.puedeDibujar = true
  }
  actualizar() {
    this.dibujar()
  }
  dibujar() {
    if (!this.puedeDibujar) return
    this.motor.contexto.imageSmoothingEnabled = false
    const { x, y, ancho, alto } = this.posicionLienzo.pixeles()
    this.motor.contexto.drawImage(this.imagen, x, y, ancho, alto)
  }
}