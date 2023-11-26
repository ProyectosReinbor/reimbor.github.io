export default class {
  constructor(objetos) {
    this.objetos = objetos;
    this.ultimoTiempo = 0;
    this.fps = 10;
    this.tiempoEntreCuadro = 1000 / this.fps;
    this.ultimoTiempoEntreCuadro = 0;
    window.addEventListener('load', () => this.iniciar());
  }
  iniciar() {
    const relacion = 720 / 1280;
    this.anchoLienzo = window.innerWidth;
    this.altoLienzo = this.anchoLienzo * relacion;
    console.log(this.anchoLienzo, this.altoLienzo);
    this.lienzo = document.getElementById('lienzo');
    this.lienzo.width = this.anchoLienzo;
    this.lienzo.height = this.altoLienzo;
    this.contexto = this.lienzo.getContext('2d');
    this.lienzo.addEventListener('mousemove', (evento) => {
      const dividirAncho = this.anchoLienzo / 100;
      const dividirAlto = this.altoLienzo / 100;
      const x = evento.layerX / dividirAncho;
      const y = evento.layerY / dividirAlto;
      console.log(x, y);
    });
    this.objetos.iniciar();
    requestAnimationFrame((tiempo) => this.dibujar(tiempo));
  }
  porcentajeAncho(multiplicador) {
    const multiplicando = this.anchoLienzo / 100;
    return multiplicando * multiplicador;
  }
  porcentajeAlto(multiplicador) {
    const multiplicando = this.altoLienzo / 100;
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