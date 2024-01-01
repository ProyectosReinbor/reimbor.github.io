import { Motor } from "../motor/motor.js";
import { UbicacionCoordenada } from "./ubicacion.js";
import { UbicacionMundo } from "./ubicacionMundo.js";

export class MovimientoMundo {
  motor: Motor
  ubicacionMundo: UbicacionMundo
  velocidad: number
  moverX: number
  moverY: number
  constructor(
    motor: Motor,
    ubicacionMundo: UbicacionMundo,
    velocidad: number,
  ) {
    this.motor = motor
    this.ubicacionMundo = ubicacionMundo
    this.velocidad = velocidad
    this.moverX = 0
    this.moverY = 0
  }
  mover() {
    const segundos = this.motor.controlCuadros.ultimoTiempoCuadro / 1000
    const velocidadSegundos = this.velocidad * segundos
    const nuevaX = velocidadSegundos * this.moverX
    const nuevaY = velocidadSegundos * this.moverY
    this.ubicacionMundo.posicion = new UbicacionCoordenada(nuevaX, nuevaY)
  }
}