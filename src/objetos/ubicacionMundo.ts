import { Motor } from "../motor/motor.js"
import { Ubicacion, } from "./ubicacion.js"

export class UbicacionMundo {
  motor: Motor
  ubicacion: Ubicacion
  constructor(
    motor: Motor,
    ubicacion: Ubicacion,
  ) {
    this.motor = motor
    this.ubicacion = ubicacion
  }
  obtenerPixeles(): Ubicacion | undefined {
    if (this.motor.camara.visible(this.ubicacion) == false) return
    const interfazUbicacion = this.motor.camara.ubicacionLienzo(this.ubicacion)
    return interfazUbicacion.obtenerPixeles()
  }
}