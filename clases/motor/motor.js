import Porcentajes from './porcentajes.js';
import Pantalla from './pantalla.js';
export default class {
  constructor(objetos) {
    this.objetos = objetos;
    this.ultimoTiempo = 0;
    this.fps = 30;
    this.tiempoEntreCuadro = 1000 / this.fps;
    this.ultimoTiempoEntreCuadro = 0;
    window.addEventListener('load', () => this.iniciar());
    window.addEventListener('resize', () => {
      this.aspecto();
    });
  }
  aspecto() {
    const relacion = 1280 / 720;
    this.altoLienzo = window.innerHeight;
    this.anchoLienzo = this.altoLienzo * relacion;
    this.lienzo.width = window.innerWidth;
    this.lienzo.height = this.altoLienzo;
    this.porcentajes = new Porcentajes(this);
  }
  iniciar() {
    this.lienzo = document.getElementById('lienzo');
    this.contexto = this.lienzo.getContext('2d');
    this.pantalla = new Pantalla(this);
    this.aspecto();
    this.objetos.iniciar();
    requestAnimationFrame((tiempo) => this.dibujar(tiempo));
  }
  dibujar(tiempo) {
    const tiempoEntreCuadro = tiempo - this.ultimoTiempo;
    if (tiempoEntreCuadro < this.tiempoEntreCuadro) {
      requestAnimationFrame((tiempo) => this.dibujar(tiempo));
      return;
    }
    this.ultimoTiempoEntreCuadro = tiempoEntreCuadro;
    this.ultimoTiempo = tiempo;
    this.contexto.clearRect(0, 0, this.lienzo.width, this.lienzo.height);
    this.objetos.dibujar();
    requestAnimationFrame((tiempo) => this.dibujar(tiempo));
  }
}