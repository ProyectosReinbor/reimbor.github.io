export default class {
  constructor(
    motor,
    datosImagen,
    anchoImagen,
    altoImagen,
  ) {
    this.motor = motor;
    this.datosImagen = datosImagen;
    this.xSprite = 0;
    this.ySprite = 0;
    this.xImagen = 0;
    this.yImagen = 0;
    this.anchoImagen = anchoImagen;
    this.altoImagen = altoImagen;
    this.puedeDibujar = false;
    this.imagen = new Image();
    this.imagen.addEventListener("load", () => this.cargoImagen());
    this.imagen.src = this.datosImagen.src;
  }
  cargoImagen() {
    this.anchoSprite = this.imagen.width / this.datosImagen.spritesHorizontal;
    this.altoSprite = this.imagen.height / this.datosImagen.spritesVertical;
    this.puedeDibujar = true;
  }
  dibujar() {
    if (this.puedeDibujar == false) return;
    this.motor.contexto.imageSmoothingEnabled = false;
    this.motor.contexto.drawImage(
      this.imagen,
      this.xSprite,
      this.ySprite,
      this.anchoSprite,
      this.altoSprite,
      this.xImagen,
      this.yImagen,
      this.anchoImagen,
      this.altoImagen,
    );
  }
}