import { NombresImagenes } from '../motor/imagenes.js'
import { Motor } from '../motor/motor.js'
import { ElementosImagen } from "./elementosImagen.js"
import { Ubicacion } from './ubicacion.js'

export class Animacion {
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

export class Animaciones {
  private motor: Motor
  private elementosImagen: ElementosImagen
  private ultimoTiempoElemento: number
  private indiceHorizontal: number
  private tiempoElemento: number
  private animacion: Animacion
  constructor(
    motor: Motor,
    elementosImagen: ElementosImagen,
    nombre: NombresImagenes,
  ) {
    this.motor = motor
    this.elementosImagen = elementosImagen
    this.ultimoTiempoElemento = 0
    this.indiceHorizontal = 0
    this.tiempoElemento = 0
    this.animacion = new Animacion(-1, 0)
  }
  reproducir(animacion: Animacion) {
    if (animacion.indice == this.animacion.indice) return
    this.animacion = new Animacion(animacion.indice, animacion.cantidadElementos)
    this.indiceHorizontal = 0
    this.elementosImagen.vertical(this.animacion.indice)
    this.tiempoElemento = 1000 / this.animacion.cantidadElementos
  }
  elemento() {
    this.ultimoTiempoElemento += this.motor.controlCuadros.ultimoTiempoCuadro
    if (this.ultimoTiempoElemento < this.tiempoElemento) return
    this.ultimoTiempoElemento = 0
    this.indiceHorizontal++
    if (this.indiceHorizontal >= this.animacion.cantidadElementos)
      this.indiceHorizontal = 0
    this.elementosImagen.horizontal(this.indiceHorizontal)
  }
  dibujar(pixeles: Ubicacion) {
    this.elementosImagen.dibujar(pixeles)
  }
}