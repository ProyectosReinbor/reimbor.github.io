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
  ) {
    super(motor, x, y, ancho, alto, src, horizontal, vertical);
    this.animacion = false;
    this.contadorTiempo = 0;
  }
  reproducir(animacion) {
    if (this.puedeDibujar == false) return;
    if (this.animacion == animacion) return;
    this.animacion = animacion;
    this.objetos.indice = 0;
    this.objetos.y = this.animacion.indice * this.objetos.alto;
    this.tiempoEntreObjetos = 1000 / this.animacion.objetos;
  }
  siguienteCuadro() {
    if (this.puedeDibujar == false) return;
    if (this.animacion == false) return;
    this.contadorTiempo += this.motor.ultimoTiempoEntreCuadro;
    if (this.contadorTiempo < this.tiempoEntreObjetos) return;
    this.contadorTiempo = 0;
    this.objetos.indice++;
    if (this.objetos.indice >= this.animacion.objetos) this.objetos.indice = 0;
    this.objetos.x = this.objetos.indice * this.objetos.ancho;
  }
  dibujar() {
    if (this.puedeDibujar == false) return;
    if (this.animacion == false) return;
    this.siguienteCuadro();
    this.dibujarObjeto();
  }
}