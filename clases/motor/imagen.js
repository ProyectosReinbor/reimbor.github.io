import Transformar from "./transformar.js";
export default class {
  constructor(
    motor,
    src,
    xImagen = 0,
    yImagen = 0,
    anchoImagen = 0,
    altoImagen = 0,
  ) {
    this.motor = motor;
    this.src = src;
    this.lienzo = new Transformar(
      xImagen, yImagen, anchoImagen, altoImagen
    );
    this.puedeDibujar = false;
    this.imagen = new Image();
    this.imagen.addEventListener("load", () => this.cargoImagen());
    this.imagen.src = this.src;
  }
  cargoImagen() {
    this.puedeDibujar = true;
  }
  dibujar() {
    if (this.puedeDibujar == false) return;
    this.motor.contexto.imageSmoothingEnabled = false;
    this.motor.contexto.drawImage(
      this.imagen,
      this.lienzo.x,
      this.lienzo.y,
      this.lienzo.ancho,
      this.lienzo.alto,
    );
  }
}