import {Imagen} from "../basicos/imagen.js"
import {Transformar} from "../basicos/transformar.js"
import {Motor} from "../motor/motor.js"
import {Estados} from "./estados.js"
export class Mando {
  constructor(motor:Motor, estados:Estados) {
    this.motor = motor
    this.estados = estados
    this.mandoFondo = new Imagen(
      this.motor, 8, 63, 30, 30,
      "imagenes/mando/fondo.png",
    )
    this.mandoFlechas = new Imagen(
      this.motor, 0, 0, 15, 15,
      "imagenes/mando/flechas.png",
    )
    this.mandoTouch = new Transformar(
      this.motor, -10, 50, 60, 60,
    )
    this.puedeMoverse = false
    this.quieto()
    this.consola = document.getElementById("consola")
    this.motor.lienzo.addEventListener('touchstart', (evento) => this.empezarMoverse(evento))
    this.motor.lienzo.addEventListener('touchmove', (evento) => this.moverse(evento))
    this.motor.lienzo.addEventListener('touchend', (evento) => this.quieto(evento))
  }
  empezarMoverse(evento) {
    this.indiceTouch = false
    for (const touch of evento.changedTouches) {
      const x = this.motor.porcentajes.ancho(touch.pageX, false)
      const y = this.motor.porcentajes.alto(touch.pageY, false)
      if (this.mandoFondo.adentro(x, y) == false) continue
      this.puedeMoverse = true
      return
    }
  }
  moverse(evento) {
    if (this.puedeMoverse == false) return
    let moviendose = false
    for (const touch of evento.changedTouches) {
      const x = this.motor.porcentajes.ancho(touch.pageX, false)
      const y = this.motor.porcentajes.alto(touch.pageY, false)
      if (this.mandoTouch.adentro(x, y) == false) continue
      moviendose = true
      this.mandoFlechas.x = x - (this.mandoFlechas.ancho / 2)
      this.mandoFlechas.y = y - (this.mandoFlechas.alto / 2)
      const mitadX = this.mandoFondo.x + (this.mandoFondo.ancho / 2)
      const mitadY = this.mandoFondo.y + (this.mandoFondo.alto / 2)
      if (y < mitadY) this.moverseY = -1
      else if (y > mitadY) this.moverseY = 1
      else this.moverseY = 0
      if (x < mitadX) this.moverseX = -1
      else if (x > mitadX) this.moverseX = 1
      else this.moverseX = 0
    }
    if (moviendose == false) this.quieto()
  }
  quieto() {
    this.estados.accion = this.estados.acciones.QUIETO
    this.puedeMoverse = false
    this.moverseX = 0
    this.moverseY = 0
    this.mandoFlechas.x = this.mandoFondo.x + (this.mandoFlechas.ancho / 2)
    this.mandoFlechas.y = this.mandoFondo.y + (this.mandoFlechas.alto / 2)
  }
  dibujar() {
    this.mandoFondo.dibujar()
    this.mandoFlechas.dibujar()
  }
}