import { Porcentajes } from './porcentajes.js'
import { Pantalla } from './pantalla.js'
import { Camara } from "./camara.js"
import { Transformar } from "../basicos/transformar.js"
export class Motor {
  despuesActualizar: () => void
  ultimoTiempo: number
  ultimoTiempoEntreCuadro: number
  fps: number
  tiempoEntreCuadro: number
  altoLienzo!: number
  anchoLienzo!: number
  lienzo: HTMLCanvasElement
  contexto: CanvasRenderingContext2D
  porcentajes: Porcentajes
  camara: Camara
  pantalla: Pantalla
  constructor(despuesActualizar: () => void) {
    this.despuesActualizar = despuesActualizar
    this.ultimoTiempo = 0
    this.ultimoTiempoEntreCuadro = 0
    this.fps = 24
    this.tiempoEntreCuadro = 1000 / this.fps
    this.lienzo = document.getElementById('lienzo') as HTMLCanvasElement
    this.contexto = this.lienzo.getContext('2d') as CanvasRenderingContext2D
    this.porcentajes = new Porcentajes(this)
    this.camara = new Camara(this, new Transformar(this))
    this.pantalla = new Pantalla()
    this.aspecto()
    requestAnimationFrame((tiempo) => this.actualizar(tiempo))
    window.addEventListener('resize', () => {
      this.aspecto()
    })
  }
  aspecto() {
    const relacion = 1280 / 720
    this.altoLienzo = window.innerHeight
    this.anchoLienzo = this.altoLienzo * relacion
    this.lienzo.width = window.innerWidth
    this.lienzo.height = window.innerHeight
    this.camara.aspecto()
  }
  actualizar(tiempo: number) {
    const tiempoEntreCuadro = tiempo - this.ultimoTiempo
    if (tiempoEntreCuadro < this.tiempoEntreCuadro) {
      requestAnimationFrame((tiempo) => this.actualizar(tiempo))
      return
    }
    this.ultimoTiempoEntreCuadro = tiempoEntreCuadro
    this.ultimoTiempo = tiempo
    this.contexto.clearRect(0, 0, this.lienzo.width, this.lienzo.height)
    this.despuesActualizar()
    requestAnimationFrame((tiempo) => this.actualizar(tiempo))
  }
}