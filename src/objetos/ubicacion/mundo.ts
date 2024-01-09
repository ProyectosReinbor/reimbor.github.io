import Motor from "../../motor/motor.js"
import Coordenada from "./coordenada.js"
import Medida from "./medida.js"
import Ubicacion from "./ubicacion.js"

export default class Mundo extends Ubicacion {
  motor: Motor
  constructor(
    motor: Motor,
    posicion: Coordenada,
    medida: Medida,
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