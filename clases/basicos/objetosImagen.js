import Imagen from "./imagen.js";
import Transformar from "./transformar.js";
export default class extends Imagen {
  constructor(
    motor,
    x,
    y,
    ancho,
    alto,
    src,
    horizontal,
    vertical,
  ) {
    super(motor, x, y, ancho, alto, src);
    this.horizontal = horizontal;
    this.vertical = vertical;
  }
  cargoImagen() {
    const ancho = this.imagen.width / this.horizontal;
    const alto = this.imagen.height / this.vertical;
    this.objetos = new Transformar(this.motor, 0, 0, ancho, alto);
    this.puedeDibujar = true;
  }
  dibujar() {
    if (this.puedeDibujar == false) return;
    this.dibujarObjeto();
  }
  dibujarObjeto() {
    this.motor.contexto.imageSmoothingEnabled = false;
    const lienzo = this.pixeles();
    this.motor.contexto.drawImage(
      this.imagen,
      this.objetos.x,
      this.objetos.y,
      this.objetos.ancho,
      this.objetos.alto,
      lienzo.x,
      lienzo.y,
      lienzo.ancho,
      lienzo.alto
    );
  }
}