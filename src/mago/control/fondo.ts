import { Imagen } from "../../componentes/imagen.js";
import { PosicionInterfaz } from "../../componentes/posicionInterfaz.js";
import { Transformar } from "../../componentes/transformar.js";
import { NombresImagenes } from "../../motor/imagenes.js";
import { Motor } from "../../motor/motor.js";
export class Fondo {
  motor: Motor
  imagen: Imagen
  posicionInterfaz: PosicionInterfaz
  constructor(
    motor: Motor,
  ) {
    this.motor = motor
    this.imagen = new Imagen(
      this.motor,
      NombresImagenes.controlFondo,
    )
    this.posicionInterfaz = new PosicionInterfaz(
      this.motor,
      new Transformar(
        0, 50, 50, 50
      ),
    )
  }
  dibujar() {
    const pixeles = this.posicionInterfaz.obtenerPixeles()
    this.imagen.dibujar(pixeles)
  }
  adentro(
    x: number,
    y: number,
  ) {
    return this.posicionInterfaz.adentro(x, y, 0, 0)
  }
}