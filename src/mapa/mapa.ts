import { ElementosImagen } from "../objetos/elementosImagen.js";
import { Imagen } from "../objetos/imagen.js";
import { Transformar } from "../objetos/transformar.js";
import { NombresImagenes } from "../motor/imagenes.js";
import { Motor } from "../motor/motor.js";
export class Mapa {
  motor: Motor
  animations0: ElementosImagen
  constructor(motor: Motor) {
    this.motor = motor
    this.animations0 = new ElementosImagen(
      new Imagen(this.motor, NombresImagenes.mapaAnimations0),
      new Transformar(0, 0, 48, 48),
      0,
      0,
    )
  }
  actualizar() {
    this.animations0.dibujar(
      new Transformar(0, 0, 10, 10),
    )
  }
}