import { Mago } from '../mago/mago.js'
import { Mapa } from '../mapa/mapa.js'
import { Motor } from './motor.js'
export class Objetos {
  motor: Motor
  mago: Mago
  mapa: Mapa
  constructor(motor: Motor) {
    this.motor = motor
    this.mapa = new Mapa(this.motor)
    this.mago = new Mago(this.motor)
  }
  actualizar() {
    this.mapa.actualizar()
    this.mago.actualizar()
  }
}