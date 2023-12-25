import { Cuadrado } from "../componentes/cuadrado.js"
import { Imagen } from "../componentes/imagen.js"
import { Transformar } from "../componentes/transformar.js"
import { NombresImagenes } from "../motor/imagenes.js"
import { Motor } from "../motor/motor.js"
import { Estado, Direcciones, Acciones } from "./estado.js"
type DireccionesControl = {
  izquierdaArriba: Transformar,
  izquierda: Transformar,
  izquierdaAbajo: Transformar,
  arriba: Transformar,
  centro: Transformar,
  abajo: Transformar,
  derecha: Transformar,
  derechaAbajo: Transformar,
  derechaArriba: Transformar,
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
      NombresImagenes.controlFondo,
      new Transformar(this.motor, 0, 50, 50, 50),
    )
    this.controlFlechas = new Imagen(
      this.motor,
      NombresImagenes.controlFlechas,
      new Transformar(
        this.motor,
        0,
        0,
        this.controlFondo.posicionLienzo.ancho / 3,
        this.controlFondo.posicionLienzo.alto / 3
      ),
    )
    this.controlTouch = new Transformar(
      this.motor, -10, 50, 60, 60,
    )
    const direccion = new Transformar(
      this.motor,
      this.controlFondo.posicionLienzo.x,
      this.controlFondo.posicionLienzo.y,
      this.controlFondo.posicionLienzo.ancho / 3,
      this.controlFondo.posicionLienzo.alto / 3
    )
    this.direcciones = {
      izquierdaArriba: new Transformar(
        this.motor,
        direccion.x,
        direccion.y,
        direccion.ancho,
        direccion.alto,
      ),
      arriba: new Transformar(
        this.motor,
        direccion.x + direccion.ancho,
        direccion.y,
        direccion.ancho,
        direccion.alto,
      ),
      derechaArriba: new Transformar(
        this.motor,
        direccion.x + (direccion.ancho * 2),
        direccion.y,
        direccion.ancho,
        direccion.alto,
      ),
      izquierda: new Transformar(
        this.motor,
        direccion.x,
        direccion.y + direccion.alto,
        direccion.ancho,
        direccion.alto,
      ),
      centro: new Transformar(
        this.motor,
        direccion.x + direccion.ancho,
        direccion.y + direccion.alto,
        direccion.ancho,
        direccion.alto,
      ),
      derecha: new Transformar(
        this.motor,
        direccion.x + (direccion.ancho * 2),
        direccion.y + direccion.alto,
        direccion.ancho,
        direccion.alto,
      ),
      izquierdaAbajo: new Transformar(
        this.motor,
        direccion.x,
        direccion.y + (direccion.alto * 2),
        direccion.ancho,
        direccion.alto,
      ),
      abajo: new Transformar(
        this.motor,
        direccion.x + direccion.ancho,
        direccion.y + (direccion.alto * 2),
        direccion.ancho,
        direccion.alto,
      ),
      derechaAbajo: new Transformar(
        this.motor,
        direccion.x + (direccion.ancho * 2),
        direccion.y + (direccion.alto * 2),
        direccion.ancho,
        direccion.alto,
      ),
    }
    this.puedeMoverse = false
    this.quieto()
    this.motor.lienzo.etiqueta.addEventListener('touchstart', (evento: TouchEvent) => this.empezarMoverse(evento))
    this.motor.lienzo.etiqueta.addEventListener('touchmove', (evento: TouchEvent) => this.moverse(evento))
    this.motor.lienzo.etiqueta.addEventListener('touchend', () => this.quieto())
  }
  empezarMoverse(evento: TouchEvent) {
    for (const touch of evento.changedTouches) {
      const x = this.motor.lienzo.porcentajeAncho(touch.pageX)
      const y = this.motor.lienzo.porcentajeAlto(touch.pageY)
      if (!this.controlFondo.posicionLienzo.adentro(x, y)) continue
      this.puedeMoverse = true
      return
    }
  }
  moverse(evento: TouchEvent) {
    if (!this.puedeMoverse) return
    for (const touch of evento.changedTouches) {
      const x = this.motor.lienzo.porcentajeAncho(touch.pageX)
      const y = this.motor.lienzo.porcentajeAncho(touch.pageY)
      if (this.controlTouch.adentro(x, y) == false) continue
      const controlFlechas = this.controlFlechas.posicionLienzo
      controlFlechas.x = x - (controlFlechas.ancho / 2)
      controlFlechas.y = y - (controlFlechas.alto / 2)
      const movimiento = this.estado.movimiento
      if (this.direcciones.centro.adentro(x, y)) {
        this.estado.accion = Acciones.parado
        movimiento.moverX = 0
        movimiento.moverY = 0
      } else {
        this.estado.accion = Acciones.caminar
      }

      if (this.direcciones.izquierda.adentro(x, y)) {
        this.estado.direccion = Direcciones.izquierda
        movimiento.moverX = -1
        movimiento.moverY = 0
      }
      else if (this.direcciones.izquierdaAbajo.adentro(x, y)) {
        this.estado.direccion = Direcciones.izquierdaAbajo
        movimiento.moverX = -1
        movimiento.moverY = 1
      }
      else if (this.direcciones.izquierdaArriba.adentro(x, y)) {
        this.estado.direccion = Direcciones.izquierdaArriba
        movimiento.moverX = -1
        movimiento.moverY = -1
      }
      else if (this.direcciones.arriba.adentro(x, y)) {
        this.estado.direccion = Direcciones.arriba
        movimiento.moverX = 0
        movimiento.moverY = -1
      }
      else if (this.direcciones.abajo.adentro(x, y)) {
        this.estado.direccion = Direcciones.abajo
        movimiento.moverX = 0
        movimiento.moverY = 1
      }
      else if (this.direcciones.derecha.adentro(x, y)) {
        this.estado.direccion = Direcciones.derecha
        movimiento.moverX = 1
        movimiento.moverY = 0
      }
      else if (this.direcciones.derechaAbajo.adentro(x, y)) {
        this.estado.direccion = Direcciones.derechaAbajo
        movimiento.moverX = 1
        movimiento.moverY = 1
      }
      else if (this.direcciones.derechaArriba.adentro(x, y)) {
        this.estado.direccion = Direcciones.derechaArriba
        movimiento.moverX = 1
        movimiento.moverY = -1
      }
      return
    }
  }
  quieto() {
    this.estado.accion = Acciones.parado
    this.estado.movimiento.moverX = 0
    this.estado.movimiento.moverY = 0
    this.puedeMoverse = false
    const controlFondo = this.controlFondo.posicionLienzo
    const controlFlechas = this.controlFlechas.posicionLienzo
    const controlFondoXFinal = controlFondo.x + (controlFondo.ancho / 2)
    const controlFondoYFinal = controlFondo.y + (controlFondo.alto / 2)
    controlFlechas.x = controlFondoXFinal - (controlFlechas.ancho / 2)
    controlFlechas.y = controlFondoYFinal - (controlFlechas.alto / 2)
  }
  actualizar() {
    this.controlFondo.actualizar()
    this.controlFlechas.actualizar()
  }
}