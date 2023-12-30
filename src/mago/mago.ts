import { Motor } from '../motor/motor.js'
import { Estado } from "./estado.js"
import { Control } from "./control/control.js"
import { AnimacionesMago } from './animaciones.js'
import { AtraerCamara } from './atraerCamara.js'
import { PosicionMundo } from '../componentes/posicionMundo.js'
import { Transformar } from '../componentes/transformar.js'
import { PosicionInterfaz } from '../componentes/posicionInterfaz.js'
export class Mago {
  motor: Motor
  estado: Estado
  control: Control
  animaciones: AnimacionesMago
  atraerCamara: AtraerCamara
  constructor(motor: Motor) {
    this.motor = motor
    this.estado = new Estado(this.motor)
    this.control = new Control(this.motor, this.estado)
    this.animaciones = new AnimacionesMago(this.motor, this.estado)
    this.atraerCamara = new AtraerCamara(this.motor, this.estado)
  }
  actualizar() {
    this.control.actualizar()
    this.estado.mover()
    this.estado.animar()
    this.animaciones.dibujar()
    this.atraerCamara.actualizar()
  }
}