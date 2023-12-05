import { Motor } from '../motor/motor.js'
import { Transformar } from "../basicos/transformar.js"
import { Estados } from "./estados.js"
import { Mando } from "./mando.js"
import { AnimacionesJugador } from './animaciones.js'
export class Jugador {
  motor: Motor
  estados: Estados
  mando: Mando
  animaciones: AnimacionesJugador
  constructor(motor: Motor) {
    this.motor = motor
    this.estados = new Estados(
      this.motor,
      new Transformar(motor, 0, 0, 20, 20)
    )
    this.mando = new Mando(this.motor, this.estados)
    this.animaciones = new AnimacionesJugador(this.motor, this.estados)
  }
  actualizar() {
    this.mando.actualizar()
    this.animaciones.actualizar()
    this.estados.actualizar()
  }
}