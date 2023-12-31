import { ElementosImagen } from "../../componentes/elementosImagen.js";
import { NombresImagenes } from "../imagenes.js";
import { Motor } from "../motor.js";

export class Pausa {
  motor: Motor
  imagen: ElementosImagen
  constructor(
    motor: Motor
  ) {
    this.motor = motor
    this.imagen = new ElementosImagen(
      this.motor,
      NombresImagenes.botones,
    )

  }
  dibujar() {
    this.imagen.dibujarElemento()
  }
}