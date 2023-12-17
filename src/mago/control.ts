import { Cuadrado } from "../basico/cuadrado.js"
import { Imagen } from "../basico/imagen.js"
import { Transformar } from "../basico/transformar.js"
import { Motor } from "../motor/motor.js"
import { Estado, Acciones, Direcciones } from "./estado.js"

type DireccionesControl = {
  arribaIzquierda: Cuadrado,
  arriba: Cuadrado,
  arribaDerecha: Cuadrado,
  izquierda: Cuadrado,
  centro: Cuadrado,
  derecha: Cuadrado,
  abajoIzquierda: Cuadrado,
  abajo: Cuadrado,
  abajoDerecha: Cuadrado,
}

export class Control {
  motor: Motor
  estado: Estado
  controlFondo: Imagen
  controlFlechas: Imagen
  controlTouch: Transformar
  puedeMoverse: boolean
  direcciones: DireccionesControl
  constructor(motor: Motor, estado: Estado) {
    this.motor = motor
    this.estado = estado
    this.controlFondo = new Imagen(
      this.motor,
      "imagenes/control/fondo.png",
      new Transformar(this.motor, 0, 50, 50, 50),
    )
    this.controlFlechas = new Imagen(
      this.motor,
      "imagenes/control/flechas.png",
      new Transformar(this.motor, 0, 0, 16, 16),
    )
    this.controlTouch = new Transformar(
      this.motor, -10, 50, 60, 60,
    )
    this.direcciones = {
      arribaIzquierda: new Cuadrado(
        this.motor,
        -10, 50, 26, 16,
        "rgba(255, 0, 132, 0.1)"
      ),
      arriba: new Cuadrado(
        this.motor,
        16, 50, 16, 16,
        "rgba(255, 0, 0, 0.1)"
      ),
      arribaDerecha: new Cuadrado(
        this.motor,
        32, 50, 16, 16,
        "rgba(255, 0, 242, 0.1)"
      ),
      izquierda: new Cuadrado(
        this.motor,
        -10, 66, 26, 16,
        "rgba(130, 0, 255, 0.13)"
      ),
      centro: new Cuadrado(
        this.motor,
        16, 66, 16, 16,
        "rgba(0, 82, 255, 0.13)"
      ),
      derecha: new Cuadrado(
        this.motor,
        32, 66, 16, 16,
        "rgba(130, 0, 255, 0.13)"
      ),
      abajoIzquierda: new Cuadrado(
        this.motor,
        -10, 86, 26, 26,
        "rgba(0, 82, 255, 0.13)"
      ),
      abajo: new Cuadrado(
        this.motor,
        16, 86, 16, 26,
        "#0ff"
      ),
      abajoDerecha: new Cuadrado(
        this.motor,
        32, 86, 16, 26,
        "#f0f"
      ),
    }
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
      if (this.direcciones.arriba.adentro(x, y)) {
        this.estado.direccion = Direcciones.arriba
        moverY = -1
      } else if (this.direcciones.abajo.adentro(x, y)) {
        this.estado.direccion = Direcciones.abajo
        moverY = 1
      }
      if (this.direcciones.izquierda.adentro(x, y)) {
        this.estado.direccion = Direcciones.izquierda
        moverX = -1
      } else if (this.direcciones.derecha.adentro(x, y)) {
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
    console.log(this.controlFlechas.posicionLienzo.alto / 2)
    this.controlFlechas.posicionLienzo.x = this.controlFondo.posicionLienzo.x + (this.controlFlechas.posicionLienzo.ancho / 2)
    this.controlFlechas.posicionLienzo.y = this.controlFondo.posicionLienzo.y + (this.controlFlechas.posicionLienzo.alto / 2)
  }
  actualizar() {
    this.controlFondo.actualizar()
    this.controlFlechas.actualizar()
    this.direcciones.arribaIzquierda.actualizar()
    // this.direcciones.arriba.actualizar()
    this.direcciones.arribaDerecha.actualizar()
    this.direcciones.izquierda.actualizar()
    this.direcciones.centro.actualizar()
    this.direcciones.derecha.actualizar()
    this.direcciones.abajoIzquierda.actualizar()
    this.direcciones.abajo.actualizar()
    this.direcciones.abajoDerecha.actualizar()
  }
}