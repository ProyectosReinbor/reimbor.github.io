import { Imagen } from "./imagen.js"
import { Transformar } from "./transformar.js"
import { Motor } from "../motor/motor.js"
import { NombresImagenes } from "../motor/imagenes.js"
export class ObjetosImagen extends Imagen {
  objetos: Transformar
  horizontal: number
  vertical: number
  constructor(
    motor: Motor,
    nombre: NombresImagenes,
    posicionLienzo: Transformar,
    ancho: number,
    alto: number,
    horizontal: number,
    vertical: number,
  ) {
    super(motor, nombre, posicionLienzo)
    this.objetos = new Transformar(this.motor, 0, 0, ancho, alto)
    this.horizontal = horizontal
    this.vertical = vertical
  }
  asignarHorizontal() {
    if (this.imagen == undefined) return
    if (this.horizontal == 0)
      this.horizontal = this.imagen.width / this.objetos.ancho
    else
      this.objetos.ancho = this.imagen.width / this.horizontal
  }
  asignarVertical() {
    if (this.imagen == undefined) return
    if (this.vertical == 0)
      this.vertical = this.imagen.height / this.objetos.alto
    else
      this.objetos.alto = this.imagen.height / this.vertical
  }
  asignarImagen(imagen: HTMLImageElement) {
    this.imagen = imagen
    this.asignarHorizontal()
    this.asignarVertical()
  }
  dibujar() {
    if (this.imagen == undefined) return
    this.motor.contexto.imageSmoothingEnabled = false
    const { x, y, ancho, alto } = this.posicionLienzo.pixeles()
    this.motor.contexto.drawImage(
      this.imagen,
      this.objetos.x,
      this.objetos.y,
      this.objetos.ancho,
      this.objetos.alto,
      x,
      y,
      ancho,
      alto
    )
  }
}