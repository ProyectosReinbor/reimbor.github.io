import Imagen from "../basicos/imagen.js";
import Transformar from "../basicos/transformar.js";
export default class {
  constructor(motor) {
    this.motor = motor;
    this.mandoFondo = new Imagen(
      this.motor, 5, 65, 30, 30,
      "imagenes/mando/fondo.png",
    );
    this.mandoFlechas = new Imagen(
      this.motor, 0, 0, 15, 15,
      "imagenes/mando/flechas.png",
    );
    this.quieto();
    this.mandoArriba = new Transformar(this.motor, 5, 65, 30, 8);
    this.mandoAbajo = new Transformar(this.motor, 5, 87, 30, 8);
    this.mandoIzquierda = new Transformar(this.motor, 5, 65, 8, 30);
    this.mandoDerecha = new Transformar(this.motor, 27, 65, 8, 30);
    this.consola = document.getElementById("consola");
    this.motor.lienzo.addEventListener('touchstart', (evento) => this.moverse(evento));
    this.motor.lienzo.addEventListener('touchmove', (evento) => this.moverse(evento));
    this.motor.lienzo.addEventListener('touchend', (evento) => this.quieto(evento));
  }
  moverse(evento) {
    this.arriba = false;
    this.abajo = false;
    this.izquierda = false;
    this.derecha = false;
    for (const touch of evento.changedTouches) {
      const x = this.motor.porcentajes.ancho(touch.pageX, false);
      const y = this.motor.porcentajes.alto(touch.pageY, false);
      if (this.mandoFondo.adentro(x, y) == false) continue;
      if (this.mandoArriba.adentro(x, y)) this.arriba = true;
      else if (this.mandoAbajo.adentro(x, y)) this.abajo = true;
      if (this.mandoIzquierda.adentro(x, y)) this.izquierda = true;
      else if (this.mandoDerecha.adentro(x, y)) this.derecha = true;
      this.mandoFlechas.x = x - (this.mandoFlechas.ancho / 2);
      this.mandoFlechas.y = y - (this.mandoFlechas.alto / 2);
    }
  }
  quieto() {
    this.arriba = false;
    this.abajo = false;
    this.izquierda = false;
    this.derecha = false;
    this.mandoFlechas.x = this.mandoFondo.x + (this.mandoFlechas.ancho / 2);
    this.mandoFlechas.y = this.mandoFondo.y + (this.mandoFlechas.alto / 2);
  }
  dibujar() {
    this.mandoFondo.dibujar();
    this.mandoFlechas.dibujar();
  }
}