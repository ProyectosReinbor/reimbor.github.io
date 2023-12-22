import { Transformar } from "../basico/transformar.js";
import { Motor } from "../motor/motor.js";
import { Estado } from "./estado.js";

export class AtraerCamara {
  motor: Motor
  estado: Estado
  posicionMundo: Transformar
  constructor(motor: Motor, estado: Estado) {
    this.motor = motor
    this.estado = estado
    this.posicionMundo = new Transformar(this.motor)
  }
  actualizar() {
    const posicionMundo = this.estado.posicionMundo
    if (
      this.posicionMundo.x == posicionMundo.x &&
      this.posicionMundo.y == posicionMundo.y
    ) return
    this.posicionMundo = new Transformar(
      this.motor,
      posicionMundo.x,
      posicionMundo.y,
      posicionMundo.ancho,
      posicionMundo.alto
    )
    const camara = this.motor.camara
    const mitadVision = {
      ancho: camara.vision.ancho / 2,
      alto: camara.vision.alto / 2,
    }
    const mitadPosicionMundo = {
      ancho: this.posicionMundo.ancho / 2,
      alto: this.posicionMundo.alto / 2
    }
    camara.vision = new Transformar(
      this.motor,
      this.posicionMundo.x - mitadVision.ancho + mitadPosicionMundo.ancho,
      this.posicionMundo.y - mitadVision.alto + mitadPosicionMundo.alto,
      camara.vision.ancho,
      camara.vision.alto,
    )
  }
}