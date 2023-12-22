import { Motor } from "../motor/motor.js"
import { Objeto } from "../motor/objeto.js"
import { PosicionInterfaz } from "./posicionInterfaz.js"
import { Transformar } from "./transformar.js"

export class TransformarObjeto extends PosicionInterfaz {
  posicionMundo: Transformar
  constructor(
    motor: Motor,
    padre: Objeto,
    posicionMundo: Transformar
  ) {
    super(motor, padre, new Transformar)
    this.posicionMundo = posicionMundo
  }
  actualizar() {
    this.posicion = this.motor.camara.posicionLienzo(this.posicionMundo)
    this.asignarPixeles()
  }
}