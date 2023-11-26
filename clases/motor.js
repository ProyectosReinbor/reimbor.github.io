import Objetos from "./objetos.js";
export default class {
  constructor() {
    this.anchoLienzo = 480;
    this.altoLienzo = this.anchoLienzo;
    this.ultimoTiempo = 0;
    this.fps = 10;
    this.tiempoEntreCuadro = 1000 / this.fps;
    this.ultimoTiempoEntreCuadro = 0;
    window.addEventListener('load', () => this.iniciar());
  }
  iniciar() {
    this.lienzo = document.getElementById('lienzo');
    this.lienzo.width = this.anchoLienzo;
    this.lienzo.height = this.altoLienzo;
    this.contexto = this.lienzo.getContext('2d');
    this.objetos = new Objetos(this);
    requestAnimationFrame((tiempo) => this.dibujar(tiempo));
  }
  porcentaje(multiplicador) {
    const multiplicando = this.anchoLienzo / 100;
    return multiplicando * multiplicador;
  }
  dibujar(tiempo) {
    const tiempoEntreCuadro = tiempo - this.ultimoTiempo;
    if (tiempoEntreCuadro < this.tiempoEntreCuadro) {
      requestAnimationFrame((tiempo) => this.dibujar(tiempo));
      return;
    }
    this.ultimoTiempoEntreCuadro = tiempoEntreCuadro;
    this.ultimoTiempo = tiempo;
    this.contexto.clearRect(0, 0, this.anchoLienzo, this.altoLienzo);
    this.objetos.dibujar();
    requestAnimationFrame((tiempo) => this.dibujar(tiempo));
  }
}