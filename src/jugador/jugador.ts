import { Motor } from '../motor/motor.js'
import { Transformar } from "../basicos/transformar.js"
import { Estados } from "./estados.js"
import { Mando } from "./mando.js"
import { Moverse } from "./moverse.js"
import { Animaciones } from '../basicos/animaciones.js'
export class Jugador {
  motor: Motor
  estados: Estados
  mando: Mando
  moverse: Moverse
  animaciones: Animaciones
  constructor(motor: Motor) {
    this.motor = motor
    this.estados = new Estados(
      this.motor,
      new Transformar(motor, 0, 0, 20, 20),
      3
    )
    this.mando = new Mando(this.motor, this.estados)
    this.moverse = new Moverse(this.motor, this.estados)
    this.animaciones = new Animaciones(
      motor,
      this.estados.animaciones.SRC,
      this.estados.animaciones.HORIZONTAL,
      this.estados.animaciones.VERTICAL
    )
  }
  actualizar() {
    this.mando.actualizar()
    this.moverse.actualizar()
    const indice = this.estados.animaciones.INDICE
    const objetos = this.estados.animaciones.OBJETOS[indice]
    this.animaciones.reproducir(indice, objetos)
    const posicionLienzo = this.motor.camara.posicionLienzo(this.estados.posicionMundo) as Transformar
    this.animaciones.actualizar(posicionLienzo)
  }
}