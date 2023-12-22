import { Motor } from "../motor/motor.js"
import { Objeto } from "../motor/objeto.js"
export class Componente {
  motor: Motor
  padre: Objeto
  constructor(motor: Motor, padre: Objeto) {
    this.motor = motor
    this.padre = padre
  }
  actualizar() {

  }
}