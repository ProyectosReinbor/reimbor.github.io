import { ImagenEstatica } from "../basicos/imagenEstatica.js"
import { Transformar } from "../basicos/transformar.js"
import { Motor } from "../motor/motor.js"
import { Estados, Acciones, Direciones } from "./estados.js"

export class Mando {
  motor: Motor
  estados: Estados
  mandoFondo: ImagenEstatica
  mandoFlechas: ImagenEstatica
  mandoTouch: Transformar
  puedeMoverse: boolean
  constructor(motor: Motor, estados: Estados) {
    this.motor = motor
    this.estados = estados
    this.mandoFondo = new ImagenEstatica(
      this.motor,
      "imagenes/mando/fondo.png",
      new Transformar(this.motor, 8, 63, 30, 30),
    )
    this.mandoFlechas = new ImagenEstatica(
      this.motor,
      "imagenes/mando/flechas.png",
      new Transformar(this.motor, 0, 0, 15, 15),
    )
    this.mandoTouch = new Transformar(
      this.motor, -10, 50, 60, 60,
    )
    this.puedeMoverse = false
    this.quieto()
    this.motor.lienzo.addEventListener('touchstart', (evento: TouchEvent) => this.empezarMoverse(evento))
    this.motor.lienzo.addEventListener('touchmove', (evento: TouchEvent) => this.moverse(evento))
    this.motor.lienzo.addEventListener('touchend', () => this.quieto())
  }
  empezarMoverse(evento: TouchEvent) {
    for (const touch of evento.changedTouches) {
      const x = this.motor.porcentajes.ancho(touch.pageX, false)
      const y = this.motor.porcentajes.alto(touch.pageY, false)
      if (this.mandoFondo.posicionLienzo.adentro(x, y) == false) continue
      this.puedeMoverse = true
      return
    }
  }
  moverse(evento: TouchEvent) {
    if (!this.puedeMoverse) return
    let touchAdentroMando = false
    for (const touch of evento.changedTouches) {
      const x = this.motor.porcentajes.ancho(touch.pageX, false)
      const y = this.motor.porcentajes.alto(touch.pageY, false)
      if (this.mandoTouch.adentro(x, y) == false) continue
      touchAdentroMando = true
      this.mandoFlechas.posicionLienzo.x = x - (this.mandoFlechas.posicionLienzo.ancho / 2)
      this.mandoFlechas.posicionLienzo.y = y - (this.mandoFlechas.posicionLienzo.alto / 2)
      const mitadX = this.mandoFondo.posicionLienzo.x + (this.mandoFondo.posicionLienzo.ancho / 2)
      const mitadY = this.mandoFondo.posicionLienzo.y + (this.mandoFondo.posicionLienzo.alto / 2)
      let moverY = false
      let moverX = false
      if (y < mitadY) {
        this.estados.direccion = Direciones.ARRIBA
        moverY = true
      } else if (y > mitadY) {
        this.estados.direccion = Direciones.ABAJO
        moverY = true
      }
      if (x < mitadX) {
        this.estados.direccion = Direciones.IZQUIERDA
        moverX = true
      } else if (x > mitadX) {
        this.estados.direccion = Direciones.DERECHA
        moverX = true
      }
      if (!moverX && !moverY) {
        this.estados.accion = Acciones.QUIETO
      } else {
        this.estados.accion = Acciones.CAMINAR
      }
    }
    if (!touchAdentroMando) this.quieto()
  }
  quieto() {
    this.estados.accion = Acciones.QUIETO
    this.puedeMoverse = false
    this.mandoFlechas.posicionLienzo.x = this.mandoFondo.posicionLienzo.x + (this.mandoFlechas.posicionLienzo.ancho / 2)
    this.mandoFlechas.posicionLienzo.y = this.mandoFondo.posicionLienzo.y + (this.mandoFlechas.posicionLienzo.alto / 2)
  }
  actualizar() {
    this.mandoFondo.actualizar()
    this.mandoFlechas.actualizar()
  }
}