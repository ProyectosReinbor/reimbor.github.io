import Animaciones from "./animaciones.js";
import datosJugador from "./jugador/datos.js";
export default class {
  constructor(motor) {
    this.motor = motor;
    this.animaciones = new Animaciones(
      this.motor,
      datosJugador,
      this.motor.porcentaje(20),
      this.motor.porcentaje(20),
    );
  }
  dibujar() {
    this.animaciones.reproducir("quietoAbajo");
    this.animaciones.dibujar();
  }
}