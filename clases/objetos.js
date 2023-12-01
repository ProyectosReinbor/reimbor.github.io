import Jugador from "./jugador/jugador.js"
import Motor from "./motor/motor.js"
export default class {
  constructor() {
    this.motor = new Motor(this)
  }
  iniciar() {
    this.jugador = new Jugador(this.motor)
  }
  dibujar() {
    this.jugador.dibujar()
  }
}