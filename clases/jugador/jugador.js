import datos from "./datos.js";
import Controlador from "./controlador.js";
import Animaciones from "../motor/animaciones.js";
export default class {
  constructor(motor) {
    this.motor = motor;
    this.animaciones = new Animaciones(
      this.motor,
      datos.src,
      0,
      0,
      this.motor.porcentajeAncho(20),
      this.motor.porcentajeAlto(20),
      datos.objetosHorizontal,
      datos.objetosVertical,
      datos.animaciones,
    );
    this.controlador = new Controlador(this.motor);
  }
  dibujar() {
    this.animaciones.reproducir("quietoAbajo");
    this.animaciones.dibujar();
    this.controlador.dibujar();
  }
}