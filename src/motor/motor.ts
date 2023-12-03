import { Objetos } from "../objetos.js"
import { Porcentajes } from './porcentajes.js'
import { Pantalla } from './pantalla.js'
import { Camara } from "./camara.js"
export class Motor {
  objetos: Objetos
  ultimoTiempo: number
  fps: number
  tiempoEntreCuadro: number
  ultimoTiempoEntreCuadro: number
  altoLienzo: number
  anchoLienzo: number
  lienzo: HTMLCanvasElement
  porcentajes: Porcentajes
  contexto: CanvasRenderingContext2D
  pantalla: Pantalla
  camara: Camara
  constructor(objetos: Objetos) {
    this.objetos = objetos
    this.ultimoTiempo = 0
    this.fps = 24
    this.tiempoEntreCuadro = 1000 / this.fps
    this.ultimoTiempoEntreCuadro = 0
    this.altoLienzo = 0
    this.anchoLienzo = 0
    this.lienzo = document.getElementById('lienzo') as HTMLCanvasElement
    this.contexto = this.lienzo.getContext('2d') as CanvasRenderingContext2D
    this.porcentajes = new Porcentajes(this)
    this.pantalla = new Pantalla()
    this.camara = new Camara(this, 0, 0)
    window.addEventListener('load', () => this.iniciar())
    window.addEventListener('resize', () => {
      this.aspecto()
    })
  }
  aspecto() {
    const relacion = 1280 / 720
    this.altoLienzo = window.innerHeight
    this.anchoLienzo = this.altoLienzo * relacion
    this.lienzo.width = window.innerWidth
    this.lienzo.height = this.altoLienzo
    this.porcentajes = new Porcentajes(this)
  }
  iniciar() {
    this.aspecto()
    this.objetos.iniciar()
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
    this.contexto.clearRect(0, 0, this.lienzo.width, this.lienzo.height)
    this.objetos.actualizar()
    requestAnimationFrame((tiempo) => this.actualizar(tiempo))
  }
}