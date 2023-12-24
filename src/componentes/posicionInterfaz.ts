import { Motor } from "../motor/motor.js"
import { Transformar } from "./transformar.js"
export class PosicionInterfaz {
  motor: Motor
  posicion: Transformar
  pixeles: Transformar
  ultimaPosicion: Transformar
  constructor(
    motor: Motor,
    posicion: Transformar
  ) {
    this.motor = motor
    this.posicion = posicion
    this.pixeles = new Transformar
    this.ultimaPosicion = new Transformar
  }
  asignarPixeles() {
    if (
      this.posicion.x == this.ultimaPosicion.x &&
      this.posicion.y == this.ultimaPosicion.y
    ) return
    console.log("posicionInterfaz")
    this.ultimaPosicion = new Transformar(
      this.posicion.x,
      this.posicion.y,
      this.posicion.ancho,
      this.posicion.alto,
    )
    this.pixeles = {
      x: this.motor.lienzo.pixelesAncho(this.posicion.x),
      y: this.motor.lienzo.pixelesAlto(this.posicion.y),
      ancho: this.motor.lienzo.pixelesAncho(this.posicion.ancho),
      alto: this.motor.lienzo.pixelesAlto(this.posicion.alto),
    }
  }
  actualizar() {
    this.asignarPixeles()
  }
  adentro(
    x: number,
    y: number,
    ancho = 0,
    alto = 0,
  ) {
    const objetoLimites = {
      x: x + ancho,
      y: y + alto
    }
    const posicionLimites = {
      x: this.posicion.x + this.posicion.ancho,
      y: this.posicion.y + this.posicion.alto
    }
    return x >= this.posicion.x &&
      y >= this.posicion.y &&
      objetoLimites.x <= posicionLimites.x &&
      objetoLimites.y <= posicionLimites.y
  }
}