import {Imagen} from "./imagen.js"
import {Transformar} from "./transformar.js"
import { Motor } from "../motor/motor.js"
export class ObjetosImagen extends Imagen {
  horizontal:number
  vertical:number
  objetos:Transformar
  constructor(
    motor:Motor,
    x:number,
    y:number,
    ancho:number,
    alto:number,
    src:string,
    horizontal:number,
    vertical:number,
  ) {
    super(motor, x, y, ancho, alto, src)
    this.horizontal = horizontal
    this.vertical = vertical
    this.objetos = new Transformar(this.motor)
  }
  cargoImagen() {
    this.objetos.ancho = this.imagen.width / this.horizontal
    this.objetos.alto = this.imagen.height / this.vertical
    this.puedeDibujar = true
  }
  dibujar() {
    if (this.puedeDibujar == false) return
    this.dibujarObjeto()
  }
  dibujarObjeto() {
    this.motor.contexto.imageSmoothingEnabled = false
    const lienzo = this.pixeles()
    this.motor.contexto.drawImage(
      this.imagen,
      this.objetos.x,
      this.objetos.y,
      this.objetos.ancho,
      this.objetos.alto,
      lienzo.x,
      lienzo.y,
      lienzo.ancho,
      lienzo.alto
    )
  }
}