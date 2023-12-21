import { Transformar } from "../basico/transformar.js";
import { Motor } from "../motor/motor.js";
import { Estado } from "./estado.js";

export class AtraerCamara {
  motor: Motor
  estado: Estado
  posicionMundo: {
    x: number,
    y: number,
  }
  constructor(motor: Motor, estado: Estado) {
    this.motor = motor
    this.estado = estado
    this.posicionMundo = {
      x: 0,
      y: 0
    }
  }
  actualizar() {
    const mago = this.estado.posicionMundo
    if (this.posicionMundo.x != 0 && this.posicionMundo.y != 0) {
      if (
        this.posicionMundo.x == mago.x &&
        this.posicionMundo.y == mago.y
      ) return
    }
    this.posicionMundo = {
      x: mago.x,
      y: mago.y,
    }
    const camara = this.motor.camara
    const mitadVision = {
      ancho: camara.vision.ancho / 2,
      alto: camara.vision.alto / 2,
    }
    const mitadMago = {
      ancho: mago.ancho / 2,
      alto: mago.alto / 2
    }
    camara.vision = new Transformar(
      this.motor,
      mago.x - mitadVision.ancho,
      mago.y - mitadVision.alto,
      camara.vision.ancho,
      camara.vision.alto,
    )
  }
}