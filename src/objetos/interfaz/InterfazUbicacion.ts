import { Motor } from "../../motor/motor.js"
import {
  Ubicacion,
  UbicacionCoordenada,
  UbicacionMedida,
} from "./ubicacion.js"

export class InterfazUbicacion {
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