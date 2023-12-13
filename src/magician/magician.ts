import { Engine } from '../engine/engine.js'
import { Transform } from "../basic/transform.js"
import { State } from "./state.js"
import { Joystick } from "./joystick.js"
import { Animations } from './animations.js'
export class Magician {
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