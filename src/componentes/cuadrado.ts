import { Motor } from '../motor/motor.js'
import { PosicionInterfaz } from './posicionInterfaz.js'
export class Cuadrado {
  motor: Motor
  posicion: PosicionInterfaz
  color: string
  constructor(
    motor: Motor,
    posicion: PosicionInterfaz,
    color = "#fff",
  ) {
    this.motor = motor
    this.posicion = posicion
    this.color = color
  }
  actualizar() {
    this.dibujar()
  }
  dibujar() {
    this.motor.contexto.fillStyle = this.color
    const { x, y, ancho, alto } = this.posicion.pixeles
    this.motor.contexto.fillRect(x, y, ancho, alto)
  }
}