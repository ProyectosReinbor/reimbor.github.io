import { Transformar } from "../../componentes/transformar.js"
import { Fondo } from "./fondo.js"

export class Direcciones {
  fondo: Fondo
  direccion: Transformar
  izquierdaArriba: Transformar
  arriba: Transformar
  derechaArriba: Transformar
  izquierda: Transformar
  centro: Transformar
  derecha: Transformar
  izquierdaAbajo: Transformar
  abajo: Transformar
  derechaAbajo: Transformar
  constructor(
    fondo: Fondo,
  ) {
    this.fondo = fondo
    this.direccion = new Transformar(
      this.fondo.posicionInterfaz.posicion.x,
      this.fondo.posicionInterfaz.posicion.y,
      this.fondo.posicionInterfaz.posicion.ancho / 3,
      this.fondo.posicionInterfaz.posicion.alto / 3
    )
    this.izquierdaArriba = new Transformar(
      this.direccion.x,
      this.direccion.y,
      this.direccion.ancho,
      this.direccion.alto,
    )
    this.arriba = new Transformar(
      this.direccion.x + this.direccion.ancho,
      this.direccion.y,
      this.direccion.ancho,
      this.direccion.alto,
    )
    this.derechaArriba = new Transformar(
      this.direccion.x + (this.direccion.ancho * 2),
      this.direccion.y,
      this.direccion.ancho,
      this.direccion.alto,
    )
    this.izquierda = new Transformar(
      this.direccion.x,
      this.direccion.y + this.direccion.alto,
      this.direccion.ancho,
      this.direccion.alto,
    )
    this.centro = new Transformar(
      this.direccion.x + this.direccion.ancho,
      this.direccion.y + this.direccion.alto,
      this.direccion.ancho,
      this.direccion.alto,
    )
    this.derecha = new Transformar(
      this.direccion.x + (this.direccion.ancho * 2),
      this.direccion.y + this.direccion.alto,
      this.direccion.ancho,
      this.direccion.alto,
    )
    this.izquierdaAbajo = new Transformar(
      this.direccion.x,
      this.direccion.y + (this.direccion.alto * 2),
      this.direccion.ancho,
      this.direccion.alto,
    )
    this.abajo = new Transformar(
      this.direccion.x + this.direccion.ancho,
      this.direccion.y + (this.direccion.alto * 2),
      this.direccion.ancho,
      this.direccion.alto,
    )
    this.derechaAbajo = new Transformar(
      this.direccion.x + (this.direccion.ancho * 2),
      this.direccion.y + (this.direccion.alto * 2),
      this.direccion.ancho,
      this.direccion.alto,
    )
  }
}