import { Imagen } from "../../componentes/imagen.js"
import { PosicionInterfaz } from "../../componentes/posicionInterfaz.js"
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
    const pixeles = this.posicionInterfaz.obtenerPixeles()
    this.imagen.dibujar(pixeles)
  }
  touch(
    x: number,
    y: number,
  ) {
    this.posicionInterfaz.posicion.x = x - (this.posicionInterfaz.posicion.ancho / 2)
    this.posicionInterfaz.posicion.y = y - (this.posicionInterfaz.posicion.alto / 2)
  }
  quieto() {
    const posicion = this.posicionInterfaz.posicion
    const fondo = this.fondo.posicionInterfaz.posicion
    const x = fondo.x + (fondo.ancho / 2)
    const y = fondo.y + (fondo.alto / 2)
    posicion.x = x - (posicion.ancho / 2)
    posicion.y = y - (posicion.alto / 2)
  }
}