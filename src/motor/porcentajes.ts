import { Motor } from './motor.js'
export class Porcentajes {
  motor: Motor
  constructor(motor: Motor) {
    this.motor = motor
  }
  unPorcentajeAnchoLienzo() {
    return this.motor.anchoLienzo / 100
  }
  porcentajeAnchoLienzo(valor: number) {
    return valor / this.unPorcentajeAnchoLienzo()
  }
  pixelesPorcentajeAnchoLienzo(valor: number) {
    return valor * this.unPorcentajeAnchoLienzo()
  }
  unPorcentajeAltoLienzo() {
    return this.motor.altoLienzo / 100
  }
  porcentajeAltoLienzo(valor: number) {
    return valor / this.unPorcentajeAltoLienzo()
  }
  pixelesPorcentajeAltoLienzo(valor: number) {
    return valor * this.unPorcentajeAltoLienzo()
  }
}