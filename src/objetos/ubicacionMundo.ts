import { Motor } from "../motor/motor.js"
import { UbicacionCoordenada } from "./ubicacion/coordenada.js"
import { UbicacionMedida } from "./ubicacion/medida.js"
import { Ubicacion, } from "./ubicacion/ubicacion.js"

export class UbicacionMundo extends Ubicacion {
  motor: Motor
  constructor(
    motor: Motor,
    posicion: UbicacionCoordenada,
    medida: UbicacionMedida,
  ) {
    super(posicion, medida)
    this.motor = motor
  }
  obtenerPixeles(): Ubicacion | undefined {
    if (this.motor.camara.visible(this) == false) return
    const interfazUbicacion = this.motor.camara.ubicacionLienzo(this)
    return interfazUbicacion.obtenerPixeles()
  }
}