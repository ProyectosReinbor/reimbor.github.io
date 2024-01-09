import Motor from "../../motor/motor.js"
import Coordenada from "./coordenada.js"
import Medida from "./medida.js"
import Ubicacion from "./ubicacion.js"

export default class Interfaz extends Ubicacion {
  motor: Motor
  constructor(
    coordenada: Coordenada,
    medida: Medida,
    motor: Motor,
  ) {
    super(coordenada, medida)
    this.motor = motor
  }
  obtenerPixeles(): Ubicacion {
    return new Ubicacion(
      new Coordenada(
        this.motor.lienzo.pixelesAncho(this.coordenada.x),
        this.motor.lienzo.pixelesAlto(this.coordenada.y),
      ),
      new Medida(
        this.motor.lienzo.pixelesAncho(this.medida.ancho),
        this.motor.lienzo.pixelesAlto(this.medida.alto),
      ),
    )
  }
}