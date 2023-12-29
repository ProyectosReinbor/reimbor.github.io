import { Motor } from "../motor/motor.js"
import { Transformar } from "./transformar.js"
export class PosicionInterfaz {
  private motor: Motor
  posicion: Transformar
  private pixeles: Transformar
  constructor(
    motor: Motor,
    posicion: Transformar
  ) {
    this.motor = motor
    this.posicion = posicion
    this.pixeles = new Transformar(0, 0, 0, 0)
  }
  obtenerPixeles() {
    this.pixeles.x = this.motor.lienzo.pixelesAncho(this.posicion.x)
    this.pixeles.y = this.motor.lienzo.pixelesAlto(this.posicion.y)
    this.pixeles.ancho = this.motor.lienzo.pixelesAncho(this.posicion.ancho)
    this.pixeles.alto = this.motor.lienzo.pixelesAlto(this.posicion.alto)
    return this.pixeles
  }
  adentro(
    x: number,
    y: number,
    ancho: number,
    alto: number,
  ) {
    return this.posicion.adentro(x, y, ancho, alto)
  }
}