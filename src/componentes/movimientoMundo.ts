import { Motor } from "../motor/motor.js";
import { PosicionMundo } from "./posicionMundo.js";

export class MovimientoMundo {
  motor: Motor
  posicionMundo: PosicionMundo
  velocidad: number
  moverX: number
  moverY: number
  constructor(
    motor: Motor,
    posicionMundo: PosicionMundo,
    velocidad: number,
  ) {
    this.motor = motor
    this.posicionMundo = posicionMundo
    this.velocidad = velocidad
    this.moverX = 0
    this.moverY = 0
  }
  mover() {
    const segundos = this.motor.controlCuadros.ultimoTiempoCuadro / 1000
    console.log(segundos)
    const velocidadSegundos = this.velocidad * segundos
    const nuevaX = velocidadSegundos * this.moverX
    const nuevaY = velocidadSegundos * this.moverY
    this.posicionMundo.cambiarPosicion(nuevaX, nuevaY)
  }
}