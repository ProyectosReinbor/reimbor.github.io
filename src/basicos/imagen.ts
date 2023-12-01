import {Transformar} from "./transformar.js"
import { Motor } from "../motor/motor.js"
export class Imagen extends Transformar {
  src:string
  puedeDibujar:boolean
  imagen:HTMLImageElement
  constructor(
    motor:Motor,
    x:number,
    y:number,
    ancho:number,
    alto:number,
    src:string,
  ) {
    super(motor, x, y, ancho, alto)
    this.src = src
    this.puedeDibujar = false
    this.imagen = new Image()
    this.imagen.addEventListener("load", () => this.cargoImagen())
    this.imagen.src = this.src
  }
  cargoImagen() {
    this.puedeDibujar = true
  }
  dibujar() {
    if (this.puedeDibujar == false) return
    this.motor.contexto.imageSmoothingEnabled = false
    const { x, y, ancho, alto } = this.pixeles()
    this.motor.contexto.drawImage(this.imagen, x, y, ancho, alto)
  }
}