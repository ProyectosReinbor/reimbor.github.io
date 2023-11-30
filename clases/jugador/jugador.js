import datos from "./datos.js";
import Animaciones from "../basicos/animaciones.js";
import Mando from "./mando.js";
export default class {
  constructor(motor) {
    this.motor = motor;
    this.animaciones = new Animaciones(
      this.motor,
      0,
      0,
      20,
      20,
      datos.src,
      datos.horizontal,
      datos.vertical,
      datos.animaciones,
    );
    this.mando = new Mando(this.motor);
    this.velocidad = 10;
  }
  moverse() {
    const segundos = this.motor.ultimoTiempoEntreCuadro / 1000;
    const velocidad = this.velocidad * segundos;
    const distanciaX = velocidad * this.mando.moverseX;
    const distanciaY = velocidad * this.mando.moverseY;
    this.animaciones.x += distanciaX;
    this.animaciones.y += distanciaY;
  }
  dibujar() {
    this.animaciones.reproducir("quietoAbajo");
    this.animaciones.dibujar();
    this.mando.dibujar();
    this.moverse();
  }
}