export default class {
  constructor(motor) {
    this.motor = motor;
    this.anchoLienzo = this.motor.anchoLienzo;
    this.altoLienzo = this.motor.altoLienzo;
  }
  ancho(valor, pixeles = true) {
    const unPorcentaje = this.anchoLienzo / 100;
    const porcentaje = valor / unPorcentaje;
    const ancho = valor * unPorcentaje;
    if (pixeles) return ancho;
    return porcentaje;
  }
  alto(valor, pixeles = true) {
    const unPorcentaje = this.altoLienzo / 100;
    const porcentaje = valor / unPorcentaje;
    const alto = valor * unPorcentaje;
    if (pixeles) return alto;
    return porcentaje;
  }
}