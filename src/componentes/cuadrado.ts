import { Motor } from '../motor/motor.js'
import { PosicionInterfaz } from './posicionInterfaz.js'
export class Cuadrado {
  private motor: Motor
  private posicion: PosicionInterfaz
  private color: string
  constructor(
    motor: Motor,
    posicion: PosicionInterfaz,
    color = "#fff",
  ) {
    this.motor = motor
    this.posicion = posicion
    this.color = color
  }
  dibujar() {
    this.motor.lienzo.contexto.fillStyle = this.color
    const pixeles = this.posicion.obtenerPixeles()
    this.motor.lienzo.contexto.fillRect(
      pixeles.x,
      pixeles.y,
      pixeles.ancho,
      pixeles.alto
    )
  }
}