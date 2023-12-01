import {Motor} from './motor.js'
import {Estados} from './estados'
import {Animaciones} from './animaciones'
export class Jugador {
    motor:Motor
    estados:Estados
    animaciones:Animaciones
    constructor(motor:Motor) {
        this.motor = motor
        this.estados = new Estados()
        this.animaciones = new Animaciones(
          this.motor,
          0,
          0,
          20,
          20,
          this.estados.animaciones.SRC,
          this.estados.animaciones.HORIZONTAL,
          this.estados.animaciones.VERTICAL,
        )
        this.mando = new Mando(this.motor, this.estados)
        this.velocidad = 10
      }
}