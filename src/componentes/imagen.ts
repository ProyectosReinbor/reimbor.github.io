import { Motor } from "../motor/motor.js"
import { Transformar } from "./transformar.js"
import { NombresImagenes } from "../motor/imagenes.js"
export class Imagen {
  motor: Motor
  posicionLienzo: Transformar
  imagen?: HTMLImageElement
  constructor(
    motor: Motor,
    nombre: NombresImagenes,
    posicionLienzo: Transformar
  ) {
    this.motor = motor
    this.posicionLienzo = posicionLienzo
    this.motor.imagenes.obtener(nombre, (imagen) => this.asignarImagen(imagen))
  }
  asignarImagen(imagen: HTMLImageElement) {
    this.imagen = imagen
  }
  actualizar() {
    this.dibujar()
  }
  dibujar() {
    if (this.imagen == undefined) return
    this.motor.contexto.imageSmoothingEnabled = false
    const { x, y, ancho, alto } = this.posicionLienzo.pixeles()
    this.motor.contexto.drawImage(this.imagen, x, y, ancho, alto)
  }
}