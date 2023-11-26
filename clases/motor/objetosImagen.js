import Imagen from "./imagen.js";
import Transformar from "./transformar.js";
export default class extends Imagen {
  constructor(
    motor,
    src,
    xImagen = 0,
    yImagen = 0,
    anchoImagen = 0,
    altoImagen = 0,
    objetosHorizontal = 0,
    objetosVertical = 0,
  ) {
    super(
      motor,
      src,
      xImagen,
      yImagen,
      anchoImagen,
      altoImagen,
    );
    this.objetosHorizontal = objetosHorizontal;
    this.objetosVertical = objetosVertical;
  }
  cargoImagen() {
    const anchoObjeto = this.imagen.width / this.objetosHorizontal;
    const altoObjeto = this.imagen.height / this.objetosVertical;
    this.objeto = new Transformar(
      0, 0, anchoObjeto, altoObjeto
    );
    this.puedeDibujar = true;
  }
  dibujar() {
    if (this.puedeDibujar == false) return;
    this.motor.contexto.imageSmoothingEnabled = false;
    this.motor.contexto.drawImage(
      this.imagen,
      this.objeto.x,
      this.objeto.y,
      this.objeto.ancho,
      this.objeto.alto,
      this.lienzo.x,
      this.lienzo.y,
      this.lienzo.ancho,
      this.lienzo.alto,
    );
  }
}