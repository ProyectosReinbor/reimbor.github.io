import { Mago } from './mago/mago.js'
import { Motor } from './motor/motor.js'
export class Objetos {
  motor: Motor
  mago: Mago
  constructor() {
    const despuesActualizar = () => {
      this.actualizar()
    }
    this.motor = new Motor(despuesActualizar)
    this.mago = new Mago(this.motor)
  }
  actualizar() {
    this.mago.actualizar()
  }
}