import Jugador from "./jugador.js";
export default class {
  constructor(motor) {
    this.motor = motor;
    this.jugador = new Jugador(this.motor);
  }
  dibujar() {
    this.jugador.dibujar();
  }
}