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
    const mago = this.estado.posicionMundo
    if (
      this.posicionMundo.x == mago.x &&
      this.posicionMundo.y == mago.y
    ) return
    this.posicionMundo = mago
    const camara = this.motor.camara
    const mitadVision = {
      ancho: camara.vision.ancho / 2,
      alto: camara.vision.alto / 2,
    }
    const mitadMago = {
      ancho: this.posicionMundo.ancho / 2,
      alto: this.posicionMundo.alto / 2
    }
    camara.vision = new Transformar(
      this.motor,
      this.posicionMundo.x - mitadVision.ancho - mitadMago.ancho,
      this.posicionMundo.y - mitadVision.alto - mitadMago.alto,
      camara.vision.ancho,
      camara.vision.alto,
    )
  }
}