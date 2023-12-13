import { Magician } from './magician/magician.js'
import { Engine } from './engine/engine.js'
export class Objects {
  motor: Motor
  jugador: Jugador
  constructor() {
    const despuesActualizar = () => {
      this.actualizar()
    }
    this.motor = new Motor(despuesActualizar)
    this.jugador = new Jugador(this.motor)
  }
  actualizar() {
    this.jugador.actualizar()
  }
}