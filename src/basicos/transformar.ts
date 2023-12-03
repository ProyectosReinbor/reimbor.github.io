import { Motor } from "../motor/motor.js"
export class Transformar {
  motor: Motor
  x: number
  y: number
  ancho: number
  alto: number
  constructor(
    motor: Motor,
    x = 0,
    y = 0,
    ancho = 0,
    alto = 0,
  ) {
    this.motor = motor
    this.x = x
    this.y = y
    this.ancho = ancho
    this.alto = alto
  }
  pixeles() {
    const x = this.motor.porcentajes.ancho(this.x)
    const y = this.motor.porcentajes.alto(this.y)
    const ancho = this.motor.porcentajes.ancho(this.ancho)
    const alto = this.motor.porcentajes.alto(this.alto)
    return { x, y, ancho, alto }
  }
  adentro(x: number, y: number, ancho = 0, alto = 0) {
    const objetoXFinal = x + ancho
    const objetoYFinal = y + alto
    const xFinal = this.x + this.ancho
    const yFinal = this.y + this.alto
    if (x < this.x || objetoXFinal > xFinal) return false
    if (y < this.y || objetoYFinal > yFinal) return false
    return true
  }
}