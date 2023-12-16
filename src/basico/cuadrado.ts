import { Transformar } from './transformar.js'
import { Motor } from '../motor/motor.js'
export class Cuadrado extends Transformar {
  color: string
  constructor(
    motor: Motor,
    x: number,
    y: number,
    ancho: number,
    alto: number,
    color = "#fff",
  ) {
    super(motor, x, y, ancho, alto)
    this.color = color
  }
  actualizar() {
    this.dibujar()
  }
  dibujar() {
    this.motor.contexto.fillStyle = this.color
    const { x, y, ancho, alto } = this.pixeles()
    this.motor.contexto.fillRect(x, y, ancho, alto)
  }
}