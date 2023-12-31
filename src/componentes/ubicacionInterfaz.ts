import { Motor } from "../motor/motor.js"
import {
  Ubicacion,
  UbicacionCoordenada,
  UbicacionMedida
} from "./ubicacion.js"
export class UbicacionInterfaz extends Ubicacion {
  protected motor: Motor
  constructor(
    motor: Motor,
    posicion: UbicacionCoordenada,
    medida: UbicacionMedida,
  ) {
    super(posicion, medida)
    this.motor = motor
  }
  obtenerPixeles(): Ubicacion {
    return new Ubicacion(
      new UbicacionCoordenada(
        this.motor.lienzo.pixelesAncho(this.coordenada.x),
        this.motor.lienzo.pixelesAlto(this.coordenada.y),
      ),
      new UbicacionMedida(
        this.motor.lienzo.pixelesAncho(this.medida.ancho),
        this.motor.lienzo.pixelesAlto(this.medida.alto),
      )
    )
  }
}