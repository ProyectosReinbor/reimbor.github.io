import { Motor } from '../motor/motor.js'
import { PosicionInterfaz } from './posicionInterfaz.js'
import { Transformar } from './transformar.js'
export class Cuadrado {
  private motor: Motor
  private posicionInterfaz: PosicionInterfaz
  private color: string
  constructor(
    motor: Motor,
    posicion: Transformar,
    color: string,
  ) {
    this.motor = motor
    this.posicionInterfaz = new PosicionInterfaz(
      this.motor,
      posicion,
    )
    this.color = color
  }
  dibujar() {
    this.motor.lienzo.contexto.fillStyle = this.color
    const pixeles = this.posicionInterfaz.obtenerPixeles()
    this.motor.lienzo.contexto.fillRect(
      pixeles.x,
      pixeles.y,
      pixeles.ancho,
      pixeles.alto
    )
  }
}