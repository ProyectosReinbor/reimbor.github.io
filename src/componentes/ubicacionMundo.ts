import { Motor } from "../motor/motor.js"
import { UbicacionInterfaz } from "./ubicacionInterfaz.js"
import { Ubicacion, UbicacionCoordenada, UbicacionMedida } from "./ubicacion.js"

export class UbicacionMundo extends UbicacionInterfaz {
  constructor(
    motor: Motor,
    posicion: UbicacionCoordenada,
    medida: UbicacionMedida,
  ) {
    super(motor, posicion, medida)
  }
  obtenerUbicacionInterfaz(): UbicacionInterfaz |
    undefined {
    if (this.motor.camara.visible(this) == false) return
    return this.motor.camara.ubicacionLienzo(this)
  }
}