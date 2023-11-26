import ObjetosImagen from "./objetosImagen.js";
export default class {
  constructor(
    motor,
    src,
    xImagen,
    yImagen,
    anchoImagen,
    altoImagen,
    objetosHorizontal,
    objetosVertical,
    animaciones, // { nombreAnimacion:{indice:0, objetos:0}, }
  ) {
    this.motor = motor;
    this.objetosImagen = new ObjetosImagen(
      motor,
      src,
      xImagen,
      yImagen,
      anchoImagen,
      altoImagen,
      objetosHorizontal,
      objetosVertical,
    );
    this.animaciones = animaciones;
    this.ultimoNombreAnimacion = false;
    this.ultimoTiempoEntreObjeto = 0;
    this.indiceObjeto = 0;
  }
  reproducir(nombreAnimacion) {
    if (this.objetosImagen.puedeDibujar == false) return;
    if (this.ultimoNombreAnimacion == nombreAnimacion) return;
    this.ultimoNombreAnimacion = nombreAnimacion;
    const animacion = this.animaciones[nombreAnimacion];
    this.objetosImagen.objeto.y = animacion.indice * this.objetosImagen.objeto.alto;
    this.tiempoEntreObjeto = 1000 / animacion.objetos;
  }
  siguienteCuadro() {
    if (this.ultimoNombreAnimacion == false) return;
    this.ultimoTiempoEntreObjeto += this.motor.ultimoTiempoEntreCuadro;
    if (this.ultimoTiempoEntreObjeto < this.tiempoEntreObjeto) return;
    this.ultimoTiempoEntreObjeto = 0;
    this.indiceObjeto++;
    const animacion = this.animaciones[this.ultimoNombreAnimacion];
    if (this.indiceObjeto >= animacion.objetos) this.indiceObjeto = 0;
    this.objetosImagen.objeto.x = this.indiceObjeto * this.objetosImagen.objeto.ancho;
  }
  dibujar() {
    if (this.ultimoNombreAnimacion == false) return;
    this.siguienteCuadro();
    this.objetosImagen.dibujar();
  }
}