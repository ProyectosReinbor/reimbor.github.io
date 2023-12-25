import { Motor } from "../motor/motor.js"
import { PosicionInterfaz } from "./posicionInterfaz.js"
import { Transformar } from "./transformar.js"

export class PosicionMundo {
  motor: Motor
  posicion: Transformar
  posicionInterfaz: PosicionInterfaz
  constructor(
    motor: Motor,
    posicion: Transformar,
    posicionInterfaz: PosicionInterfaz,
  ) {
    this.motor = motor
    this.posicion = posicion
    this.posicionInterfaz = posicionInterfaz
  }
  actualizar() {
    if (this.motor.camara.visible(this.posicion) == false) return false
    this.posicionInterfaz.posicion = this.motor.camara.posicionLienzo(this.posicion)
    this.posicionInterfaz.actualizar()
  }
}