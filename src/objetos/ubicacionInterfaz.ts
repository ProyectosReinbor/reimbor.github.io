import { Motor } from "../motor/motor.js"
import { UbicacionCoordenada } from "./ubicacion/coordenada.js"
import { UbicacionMedida } from "./ubicacion/medida.js"
import { Ubicacion } from "./ubicacion/ubicacion.js"

export class UbicacionInterfaz {
  motor: Motor
  ubicacion: Ubicacion
  constructor(
    motor: Motor,
    ubicacion: Ubicacion
  ) {
    this.ubicacion = ubicacion
    this.motor = motor
  }
  obtenerPixeles(): Ubicacion {
    return new Ubicacion(
      new UbicacionCoordenada(
        this.motor.lienzo.pixelesAncho(this.ubicacion.posicion.x),
        this.motor.lienzo.pixelesAlto(this.ubicacion.posicion.y),
      ),
      new UbicacionMedida(
        this.motor.lienzo.pixelesAncho(this.ubicacion.medida.ancho),
        this.motor.lienzo.pixelesAlto(this.ubicacion.medida.alto),
      ),
    )
  }
}