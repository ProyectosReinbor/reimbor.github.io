import Motor from "../motor/motor.js";
import Coordenada from "./ubicacion/coordenada.js";
import Mundo from "./ubicacion/mundo.js";

export default class MovimientoMundo {
  motor: Motor
  ubicacionMundo: Mundo
  velocidad: number
  moverX: number
  moverY: number
  constructor(
    motor: Motor,
    ubicacionMundo: Mundo,
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
    this.ubicacionMundo.coordenada = new Coordenada(nuevaX, nuevaY)
  }
}