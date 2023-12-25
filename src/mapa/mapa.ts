import { ElementosImagen } from "../componentes/elementosImagen.js";
import { Imagen } from "../componentes/imagen.js";
import { Transformar } from "../componentes/transformar.js";
import { NombresImagenes } from "../motor/imagenes.js";
import { Motor } from "../motor/motor.js";
export class Mapa {
  motor: Motor
  animations0: ElementosImagen
  constructor(motor: Motor) {
    this.motor = motor
    const imagen = new Imagen(this.motor)
    imagen.asignarImagen(NombresImagenes.mapaAnimations0)
    this.animations0 = new ElementosImagen(
      imagen,
      new Transformar(0, 0, 48, 48),
      0,
      0,
    )
  }
  actualizar() {
    this.animations0.actualizar(
      new Transformar(0, 0, 10, 10),
    )
  }
}