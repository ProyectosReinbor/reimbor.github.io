import { Motor } from "../motor/motor.js"
import { PosicionInterfaz } from "./posicionInterfaz.js"
import { Transformar } from "./transformar.js"

export class PosicionMundo {
  private motor: Motor
  private posicion: Transformar
  private posicionInterfaz: PosicionInterfaz
  constructor(
    motor: Motor,
    posicion: Transformar,
    posicionInterfaz: PosicionInterfaz,
  ) {
    this.motor = motor
    this.posicion = posicion
    this.posicionInterfaz = posicionInterfaz
  }
  obtenerPixeles() {
    if (this.motor.camara.visible(this.posicion) == false) return false
    this.posicionInterfaz.posicion = this.motor.camara.posicionLienzo(this.posicion)
    return this.posicionInterfaz.obtenerPixeles()
  }
}