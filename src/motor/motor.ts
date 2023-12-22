import { Lienzo } from './lienzo.js'
import { Pantalla } from './pantalla.js'
import { Camara } from "./camara.js"
import { Transformar } from "../basico/transformar.js"
import { Imagenes } from './imagenes.js'
export class Motor {
  despuesActualizar: () => void
  ultimoTiempo: number
  ultimoTiempoEntreCuadro: number
  fps: number
  tiempoEntreCuadro: number
  lienzo: Lienzo
  contexto: CanvasRenderingContext2D
  camara: Camara
  pantalla: Pantalla
  imagenes: Imagenes
  constructor(despuesActualizar: () => void) {
    this.despuesActualizar = despuesActualizar
    this.ultimoTiempo = 0
    this.ultimoTiempoEntreCuadro = 0
    this.fps = 24
    this.tiempoEntreCuadro = 1000 / this.fps
    this.lienzo = new Lienzo(this)
    this.contexto = this.lienzo.etiqueta.getContext('2d') as CanvasRenderingContext2D
    this.camara = new Camara(this, new Transformar(this))
    this.pantalla = new Pantalla()
    this.imagenes = new Imagenes()
    requestAnimationFrame((tiempo) => this.actualizar(tiempo))
  }
  actualizar(tiempo: number) {
    const tiempoEntreCuadro = tiempo - this.ultimoTiempo
    if (tiempoEntreCuadro < this.tiempoEntreCuadro) {
      requestAnimationFrame((tiempo) => this.actualizar(tiempo))
      return
    }
    this.ultimoTiempoEntreCuadro = tiempoEntreCuadro
    this.ultimoTiempo = tiempo
    this.contexto.clearRect(0, 0, this.lienzo.etiqueta.width, this.lienzo.etiqueta.height)
    this.despuesActualizar()
    requestAnimationFrame((tiempo) => this.actualizar(tiempo))
  }
}