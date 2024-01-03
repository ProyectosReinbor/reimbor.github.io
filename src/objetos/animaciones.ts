import { NombresImagenes } from '../motor/imagenes.js'
import { Motor } from '../motor/motor.js'
import { ElementosImagen } from "./elementosImagen.js"
import { Ubicacion } from './ubicacion/ubicacion.js'

export class AnimacionesAnimacion {
  indice: number
  cantidadElementos: number
  constructor(
    indice: number,
    cantidadElementos: number,
  ) {
    this.indice = indice
    this.cantidadElementos = cantidadElementos
  }
}

export class Animaciones extends ElementosImagen {
  private ultimoTiempoElemento: number
  private indiceHorizontal: number
  private tiempoElemento: number
  private animacion: AnimacionesAnimacion
  constructor(
    motor: Motor,
    nombre: NombresImagenes,
    elementos: Ubicacion,
  ) {
    super(motor, nombre, elementos)
    this.ultimoTiempoElemento = 0
    this.indiceHorizontal = 0
    this.tiempoElemento = 0
    this.animacion = new AnimacionesAnimacion(-1, 0)
  }
  reproducir(animacion: AnimacionesAnimacion) {
    if (animacion.indice == this.animacion.indice) return
    this.animacion = new AnimacionesAnimacion(animacion.indice, animacion.cantidadElementos)
    this.indiceHorizontal = 0
    this.vertical(this.animacion.indice)
    this.tiempoElemento = 1000 / this.animacion.cantidadElementos
  }
  elemento() {
    this.ultimoTiempoElemento += this.motor.controlCuadros.ultimoTiempoCuadro
    if (this.ultimoTiempoElemento < this.tiempoElemento) return
    this.ultimoTiempoElemento = 0
    this.indiceHorizontal++
    if (this.indiceHorizontal >= this.animacion.cantidadElementos)
      this.indiceHorizontal = 0
    this.horizontal(this.indiceHorizontal)
  }
}