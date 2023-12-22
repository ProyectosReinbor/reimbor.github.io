import { ObjetosImagen } from "../basico/objetosImagen.js";
import { Transformar } from "../basico/transformar.js";
import { NombresImagenes } from "../motor/imagenes.js";
import { Motor } from "../motor/motor.js";
export class Mapa {
  motor: Motor
  animations0: ObjetosImagen
  constructor(motor: Motor) {
    this.motor = motor
    this.animations0 = new ObjetosImagen(
      this.motor,
      NombresImagenes.mapaAnimations0,
      new Transformar(this.motor, 0, 0, 10, 10),
      48,
      48,
      0,
      0,
    )
  }
  actualizar() {
    this.animations0.actualizar()
  }
}