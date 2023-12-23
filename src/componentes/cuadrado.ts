import { Transformar } from './transformar.js'
import { Motor } from '../motor/motor.js'
import { Componente } from './componente.js'
import { Objeto } from '../motor/objeto.js'
export class Cuadrado extends Componente {
  color: string
  constructor(
    motor: Motor,
    padre: Objeto,
    color = "#fff",
  ) {
    super(motor, padre)
    this.padre.transformar =
      this.color = color
  }
  actualizar() {
    this.dibujar()
  }
  dibujar() {
    this.motor.contexto.fillStyle = this.color
    const { x, y, ancho, alto } = this.padre.transformar.()
    this.motor.contexto.fillRect(x, y, ancho, alto)
  }
}