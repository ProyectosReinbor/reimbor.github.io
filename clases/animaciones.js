import Imagen from "./imagen.js";
export default class {
  constructor(
    motor,
    datosImagen,
    anchoImagen,
    altoImagen,
  ) {
    this.motor = motor;
    this.datosImagen = datosImagen;
    this.imagen = new Imagen(
      motor,
      datosImagen,
      anchoImagen,
      altoImagen,
    );
    this.ultimoNombreAnimacion = false;
    this.ultimoTiempoEntreSprite = 0;
    this.indiceSprite = 0;
  }
  reproducir(nombreAnimacion) {
    if (this.imagen.puedeDibujar == false) return;
    if (this.ultimoNombreAnimacion == nombreAnimacion) return;
    this.ultimoNombreAnimacion = nombreAnimacion;
    const animacion = this.datosImagen.animaciones[nombreAnimacion];
    this.imagen.ySprite = animacion.indice * this.imagen.altoSprite;
    this.tiempoEntreSprite = 1000 / animacion.sprites;
  }
  siguienteCuadro() {
    if (this.ultimoNombreAnimacion == false) return;
    this.ultimoTiempoEntreSprite += this.motor.ultimoTiempoEntreCuadro;
    if (this.ultimoTiempoEntreSprite < this.tiempoEntreSprite) return;
    this.ultimoTiempoEntreSprite = 0;
    this.indiceSprite++;
    const animacion = this.datosImagen.animaciones[this.ultimoNombreAnimacion];
    if (this.indiceSprite >= animacion.sprites) this.indiceSprite = 0;
    this.imagen.xSprite = this.indiceSprite * this.imagen.anchoSprite;
  }
  dibujar() {
    if (this.ultimaAnimacion == false) return;
    this.siguienteCuadro();
    this.imagen.dibujar();
  }
}