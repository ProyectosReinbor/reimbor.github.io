import { Imagen } from "../basico/imagen.js"
import { Transformar } from "../basico/transformar.js"
import { Motor } from "../motor/motor.js"
import { Estado, Acciones, Direcciones } from "./estado.js"

export class Control {
  motor: Motor
  estado: Estado
  controlFondo: Imagen
  controlFlechas: Imagen
  controlTouch: Transformar
  puedeMoverse: boolean
  controlArriba: Transformar
  controlAbajo: Transformar
  controlIzquierda: Transformar
  controlDerecha: Transformar
  constructor(motor: Motor, estado: Estado) {
    this.motor = motor
    this.estado = estado
    this.controlFondo = new Imagen(
      this.motor,
      "imagenes/control/fondo.png",
      new Transformar(this.motor, 8, 63, 30, 30),
    )
    this.controlFlechas = new Imagen(
      this.motor,
      "imagenes/control/flechas.png",
      new Transformar(this.motor, 0, 0, 15, 15),
    )
    this.controlTouch = new Transformar(
      this.motor, -10, 50, 60, 60,
    )
    this.controlArriba = new Transformar(
      this.motor,
      -10, 50, 60, 20
    )
    this.controlAbajo = new Transformar(
      this.motor,
      -10, 85, 60, 20
    )
    this.controlIzquierda = new Transformar(
      this.motor,
      -10, 50, 25, 60,
    )
    this.controlDerecha = new Transformar(
      this.motor,
      30, 50, 25, 60,
    )
    this.puedeMoverse = false
    this.quieto()
    this.motor.lienzo.addEventListener('touchstart', (evento: TouchEvent) => this.empezarMoverse(evento))
    this.motor.lienzo.addEventListener('touchmove', (evento: TouchEvent) => this.moverse(evento))
    this.motor.lienzo.addEventListener('touchend', () => this.quieto())
  }
  empezarMoverse(evento: TouchEvent) {
    for (const touch of evento.changedTouches) {
      const x = this.motor.porcentajes.porcentajeAnchoLienzo(touch.pageX)
      const y = this.motor.porcentajes.porcentajeAltoLienzo(touch.pageY)
      if (!this.controlFondo.posicionLienzo.adentro(x, y)) continue
      this.puedeMoverse = true
      return
    }
  }
  moverse(evento: TouchEvent) {
    if (!this.puedeMoverse) return
    for (const touch of evento.changedTouches) {
      const x = this.motor.porcentajes.porcentajeAnchoLienzo(touch.pageX)
      const y = this.motor.porcentajes.porcentajeAltoLienzo(touch.pageY)
      if (this.controlTouch.adentro(x, y) == false) continue
      this.controlFlechas.posicionLienzo.x = x - (this.controlFlechas.posicionLienzo.ancho / 2)
      this.controlFlechas.posicionLienzo.y = y - (this.controlFlechas.posicionLienzo.alto / 2)
      let moverX = 0
      let moverY = 0
      if (this.controlArriba.adentro(x, y)) {
        this.estado.direccion = Direcciones.arriba
        moverY = -1
      } else if (this.controlAbajo.adentro(x, y)) {
        this.estado.direccion = Direcciones.abajo
        moverY = 1
      }
      if (this.controlIzquierda.adentro(x, y)) {
        this.estado.direccion = Direcciones.izquierda
        moverX = -1
      } else if (this.controlDerecha.adentro(x, y)) {
        this.estado.direccion = Direcciones.derecha
        moverX = 1
      }
      if (moverX == 0 && moverY == 0) {
        this.estado.accion = Acciones.parado
      } else {
        this.estado.accion = Acciones.caminar
      }
      this.estado.movimiento.moverX = moverX
      this.estado.movimiento.moverY = moverY
      return
    }
  }
  quieto() {
    this.estado.accion = Acciones.parado
    this.estado.movimiento.moverX = 0
    this.estado.movimiento.moverY = 0
    this.puedeMoverse = false
    this.controlFlechas.posicionLienzo.x = this.controlFondo.posicionLienzo.x + (this.controlFlechas.posicionLienzo.ancho / 2)
    this.controlFlechas.posicionLienzo.y = this.controlFondo.posicionLienzo.y + (this.controlFlechas.posicionLienzo.alto / 2)
  }
  actualizar() {
    this.controlFondo.actualizar()
    this.controlFlechas.actualizar()
  }
}