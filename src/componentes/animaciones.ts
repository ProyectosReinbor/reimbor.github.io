import { NombresImagenes } from '../motor/imagenes.js'
import { Motor } from '../motor/motor.js'
import { ElementosImagen } from "./elementosImagen.js"
import { Transformar } from './transformar.js'

type Animacion = {
  indice: number
  elementos: number
}

export class Animaciones {
  private motor: Motor
  private elementosImagen: ElementosImagen
  private contador: number
  private indice: number
  private retraso: number
  private animacion: Animacion
  constructor(
    motor: Motor,
    nombre: NombresImagenes,
    elementos: Transformar,
    horizontal: number,
    vertical: number,
  ) {
    this.motor = motor
    this.elementosImagen = new ElementosImagen(
      this.motor,
      nombre,
      elementos,
      horizontal,
      vertical,
    )
    this.contador = 0
    this.indice = 0
    this.retraso = 0
    this.animacion = { indice: -1, elementos: 0 }
  }
  reproducir({ indice, elementos }: Animacion) {
    if (indice == this.animacion.indice) return
    this.animacion.indice = indice
    this.animacion.elementos = elementos
    this.indice = 0
    this.elementosImagen.elementosVertical(this.animacion.indice)
    this.retraso = 1000 / this.animacion.elementos
  }
  elemento() {
    this.contador += this.motor.controlCuadros.ultimoTiempoCuadro
    if (this.contador < this.retraso) return
    this.contador = 0
    this.indice++
    if (this.indice >= this.animacion.elementos) this.indice = 0
    this.elementosImagen.elementosHorizontal(this.indice)
  }
  dibujar(posicionLienzo: Transformar) {
    this.elementosImagen.dibujar(
      posicionLienzo
    )
  }
}