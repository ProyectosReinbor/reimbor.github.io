import { Imagen } from "../../componentes/imagen.js"
import { PosicionInterfaz } from "../../componentes/posicionInterfaz"
import { Transformar } from "../../componentes/transformar.js"
import { NombresImagenes } from "../../motor/imagenes.js"
import { Motor } from "../../motor/motor.js"
import { Fondo } from "./fondo.js"

export class Flechas {
  motor: Motor
  imagen: Imagen
  posicionInterfaz: PosicionInterfaz
  fondo: Fondo
  constructor(
    motor: Motor,
    fondo: Fondo,
  ) {
    this.motor = motor
    this.fondo = fondo
    this.imagen = new Imagen(
      this.motor,
      NombresImagenes.controlFlechas,
    )
    this.posicionInterfaz = new PosicionInterfaz(
      this.motor,
      new Transformar(
        0,
        0,
        this.fondo.posicionInterfaz.posicion.ancho / 3,
        this.fondo.posicionInterfaz.posicion.alto / 3
      ),
    )
  }
  dibujar() {
    const posicionLienzo = this.posicionInterfaz.pixeles()
    if (posicionLienzo == false) return false
    this.imagen.dibujar(posicionLienzo)
  }
}