import Motor from '../motor/motor.js'
import Ubicacion from './ubicacion/ubicacion.js'
export class Cuadrado {
  private motor: Motor
  private color: string
  constructor(
    motor: Motor,
    color: string,
  ) {
    this.motor = motor
    this.color = color
  }
  dibujar(
    pixeles: Ubicacion
  ) {
    this.motor.lienzo.contexto.fillStyle = this.color
    this.motor.lienzo.contexto.fillRect(
      pixeles.coordenada.x,
      pixeles.coordenada.y,
      pixeles.medida.ancho,
      pixeles.medida.alto
    )
  }
}