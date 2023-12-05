import { Motor } from './motor.js'
export class Porcentajes {
  motor: Motor
  constructor(motor: Motor) {
    this.motor = motor
  }
  porcentajeAncho(valor: number) {
    const unPorcentaje = this.motor.anchoLienzo / 100
    return valor / unPorcentaje
  }
  pixelesAncho(valor: number) {
    const unPorcentaje = this.motor.anchoLienzo / 100
    return valor * unPorcentaje
  }
  porcentajeAlto(valor: number) {
    const unPorcentaje = this.motor.altoLienzo / 100
    return valor / unPorcentaje
  }
  pixelesAlto(valor: number) {
    const unPorcentaje = this.motor.altoLienzo / 100
    return valor * unPorcentaje
  }
}