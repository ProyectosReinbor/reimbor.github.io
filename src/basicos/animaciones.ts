import {ObjetosImagen} from "./objetosImagen.js"
import {Motor} from '../motor/motor.js'

type Animacion = {
  indice:number
  objetos:number
}

export class Animaciones extends ObjetosImagen {
  animacion:Animacion
  contadorTiempo:number
  indiceImagen:number
  tiempoEntreImagen:number
  constructor(
    motor:Motor,
    x:number,
    y:number,
    ancho:number,
    alto:number,
    src:string,
    horizontal:number,
    vertical:number,
  ) {
    super(motor, x, y, ancho, alto, src, horizontal, vertical)
    this.animacion = {indice:-1, objetos:0}
    this.contadorTiempo = 0
    this.indiceImagen = 0
    this.tiempoEntreImagen = 0
  }
  reproducir(animacion:Animacion) {
    if (this.puedeDibujar == false) return
    if (this.animacion.indice == animacion.indice) return
    this.animacion = animacion
    this.indiceImagen = 0
    this.objetos.y = this.animacion.indice * this.objetos.alto
    this.tiempoEntreImagen = 1000 / this.animacion.objetos
  }
  siguienteCuadro() {
    if (this.puedeDibujar == false) return
    if (this.animacion.objetos == 0) return
    this.contadorTiempo += this.motor.ultimoTiempoEntreCuadro
    if (this.contadorTiempo < this.tiempoEntreImagen) return
    this.contadorTiempo = 0
    this.indiceImagen++
    if (this.indiceImagen >= this.animacion.objetos) this.indiceImagen = 0
    this.objetos.x = this.indiceImagen * this.objetos.ancho
  }
  dibujar() {
    if (this.puedeDibujar == false) return
    if (this.animacion.objetos == 0) return
    this.siguienteCuadro()
    this.dibujarObjeto()
  }
}