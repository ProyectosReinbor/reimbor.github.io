import { Transformar } from "../../componentes/transformar.js"
import { Motor } from "../../motor/motor.js"
import { Estado } from "../estado.js"
import { Direcciones } from "./direcciones.js"
import { Flechas } from "./flechas.js"
import { Fondo } from "./fondo.js"

export class Control {
  motor: Motor
  estado: Estado
  fondo: Fondo
  flechas: Flechas
  touch: Transformar
  puedeMoverse: boolean
  direcciones: Direcciones
  constructor(motor: Motor, estado: Estado) {
    this.motor = motor
    this.estado = estado
    this.fondo = new Fondo(this.motor)
    this.flechas = new Flechas(this.motor, this.fondo)
    this.touch = new Transformar(-10, 50, 60, 60)
    this.direcciones = new Direcciones(this.estado, this.fondo)
    this.puedeMoverse = false
    this.quieto()
    this.motor.lienzo.etiqueta.addEventListener(
      'touchstart',
      (evento: TouchEvent) => this.empezarMoverse(evento)
    )
    this.motor.lienzo.etiqueta.addEventListener(
      'touchmove',
      (evento: TouchEvent) => this.moverse(evento)
    )
    this.motor.lienzo.etiqueta.addEventListener(
      'touchend',
      () => this.quieto()
    )
  }
  empezarMoverse(evento: TouchEvent) {
    for (const touch of evento.changedTouches) {
      const x = this.motor.lienzo.porcentajeAncho(touch.pageX)
      const y = this.motor.lienzo.porcentajeAlto(touch.pageY)
      if (this.fondo.adentro(x, y) == false) continue
      this.puedeMoverse = true
      return
    }
  }
  moverse(evento: TouchEvent) {
    if (this.puedeMoverse == false) return
    for (const touch of evento.changedTouches) {
      const x = this.motor.lienzo.porcentajeAncho(touch.pageX)
      const y = this.motor.lienzo.porcentajeAncho(touch.pageY)
      if (this.touch.adentro(x, y, 0, 0) == false) continue
      this.flechas.touch(x, y)
      this.direcciones.accion(x, y)
      this.direcciones.movimiento(x, y)
      return
    }
  }
  quieto() {
    this.puedeMoverse = false
    this.direcciones.quieto()
    this.flechas.quieto()
  }
  actualizar() {
    this.fondo.dibujar()
    this.flechas.dibujar()
  }
}