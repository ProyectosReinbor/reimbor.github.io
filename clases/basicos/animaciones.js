import ObjetosImagen from "./objetosImagen.js";
export default class extends ObjetosImagen {
  constructor(
    motor,
    x,
    y,
    ancho,
    alto,
    src,
    horizontal,
    vertical,
    animaciones, // { nombreAnimacion:{indice:0, objetos:0}, }
  ) {
    super(motor, x, y, ancho, alto, src, horizontal, vertical);
    this.animaciones = animaciones;
    this.nombreAnimacion = false;
    this.contadorTiempo = 0;
  }
  reproducir(nombreAnimacion) {
    if (this.puedeDibujar == false) return;
    if (this.nombreAnimacion == nombreAnimacion) return;
    this.objetos.indice = 0;
    this.nombreAnimacion = nombreAnimacion;
    const animacion = this.animaciones[this.nombreAnimacion];
    this.objetos.y = animacion.indice * this.objetos.alto;
    this.tiempoEntreObjetos = 1000 / animacion.objetos;
  }
  siguienteCuadro() {
    if (this.puedeDibujar == false) return;
    if (this.nombreAnimacion == false) return;
    this.contadorTiempo += this.motor.ultimoTiempoEntreCuadro;
    if (this.contadorTiempo < this.tiempoEntreObjetos) return;
    this.contadorTiempo = 0;
    this.objetos.indice++;
    const animacion = this.animaciones[this.nombreAnimacion];
    if (this.objetos.indice >= animacion.objetos) this.objetos.indice = 0;
    this.objetos.x = this.objetos.indice * this.objetos.ancho;
  }
  dibujar() {
    if (this.puedeDibujar == false) return;
    if (this.nombreAnimacion == false) return;
    this.siguienteCuadro();
    this.dibujarObjeto();
  }
}