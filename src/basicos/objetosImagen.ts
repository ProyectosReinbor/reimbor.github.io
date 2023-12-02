import { Imagen } from "./imagen.js"
import { Transformar } from "./transformar.js"
import { Motor } from "../motor/motor.js"
export class ObjetosImagen extends Imagen {
  horizontal: number
  vertical: number
  objetos: Transformar
  constructor(
    motor: Motor,
    src: string,
    horizontal: number,
    vertical: number,
  ) {
    super(motor, src)
    this.horizontal = horizontal
    this.vertical = vertical
    this.objetos = new Transformar(this.motor)
  }
  cargoImagen() {
    this.objetos.ancho = this.imagen.width / this.horizontal
    this.objetos.alto = this.imagen.height / this.vertical
    this.puedeDibujar = true
  }
  dibujar(posicionLienzo: Transformar) {
    if (!this.puedeDibujar) return
    this.motor.contexto.imageSmoothingEnabled = false
    const { x, y, ancho, alto } = posicionLienzo.pixeles()
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