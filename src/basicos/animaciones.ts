import { ObjetosImagen } from "./objetosImagen.js"
import { Motor } from '../motor/motor.js'
import { Transformar } from "./transformar.js"

type Animacion = {
  indice: number
  objetos: number
}

export class Animaciones extends ObjetosImagen {
  contadorTiempo: number
  indiceImagen: number
  tiempoEntreImagen: number
  animacion: Animacion
  constructor(
    motor: Motor,
    src: string,
    horizontal: number,
    vertical: number,
  ) {
    super(motor, src, horizontal, vertical)
    this.contadorTiempo = 0
    this.indiceImagen = 0
    this.tiempoEntreImagen = 0
    this.animacion = { indice: -1, objetos: 0 }
  }
  reproducir(indice: number, objetos: number) {
    if (!this.puedeDibujar) return
    this.animacion = { indice, objetos }
    this.indiceImagen = 0
    this.objetos.y = this.animacion.indice * this.objetos.alto
    this.tiempoEntreImagen = 1000 / this.animacion.objetos
  }
  siguienteCuadro() {
    this.contadorTiempo += this.motor.ultimoTiempoEntreCuadro
    if (this.contadorTiempo < this.tiempoEntreImagen) return
    this.contadorTiempo = 0
    this.indiceImagen++
    if (this.indiceImagen >= this.animacion.objetos) this.indiceImagen = 0
    this.objetos.x = this.indiceImagen * this.objetos.ancho
  }
  actualizar(posicionLienzo: Transformar) {
    if (!this.puedeDibujar) return
    if (this.animacion.indice == -1) return
    this.siguienteCuadro()
    this.dibujar(posicionLienzo)
  }
}