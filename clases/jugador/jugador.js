import Animaciones from "../basicos/animaciones.js";
import Mando from "./mando.js";
import Estados from './estados.js';
export default class {
  constructor(motor) {
    this.motor = motor;
    this.estados = new Estados();
    this.animaciones = new Animaciones(
      this.motor,
      0,
      0,
      20,
      20,
      this.estados.animaciones.SRC,
      this.estados.animaciones.HORIZONTAL,
      this.estados.animaciones.VERTICAL,
    );
    this.mando = new Mando(this.motor, this.estados);
    this.velocidad = 10;
  }
  moverse() {
    const segundos = this.motor.ultimoTiempoEntreCuadro / 1000;
    const velocidad = this.velocidad * segundos;
    const distanciaX = velocidad * this.mando.moverseX;
    const distanciaY = velocidad * this.mando.moverseY;
    if (this.mando.moverseX == -1) this.animacion = ""
    this.animaciones.x += distanciaX;
    this.animaciones.y += distanciaY;
  }
  dibujar() {
    this.animaciones.reproducir(this.estados.animacion);
    this.animaciones.dibujar();
    this.mando.dibujar();
    this.moverse();
  }
}