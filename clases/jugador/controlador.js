import Imagen from "../motor/imagen.js";
export default class {
  constructor(motor) {
    this.motor = motor;
    this.imagenFondo = new Imagen(
      this.motor,
      "imagenes/controles/mandoFondo.png",
      this.motor.porcentajeAncho(5),
      this.motor.porcentajeAlto(65),
      this.motor.porcentajeAncho(30),
      this.motor.porcentajeAlto(30),
    );
    this.imagenFlechas = new Imagen(
      this.motor,
      "imagenes/controles/mandoFlechas.png",
      this.motor.porcentajeAncho(5),
      this.motor.porcentajeAlto(65),
      this.motor.porcentajeAncho(15),
      this.motor.porcentajeAlto(15),
    );
  }
  dibujar() {
    this.imagenFondo.dibujar();
    this.imagenFlechas.dibujar();
  }
}