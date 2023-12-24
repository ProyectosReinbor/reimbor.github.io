import { Motor } from './motor.js'
export class Lienzo {
  motor: Motor
  etiqueta: HTMLCanvasElement
  contexto: CanvasRenderingContext2D
  alto!: number
  ancho!: number
  unPorcientoAncho!: number
  unPorcientoAlto!: number
  constructor(motor: Motor) {
    this.motor = motor
    this.etiqueta = document.getElementById('lienzo') as HTMLCanvasElement
    this.contexto = this.etiqueta.getContext('2d') as CanvasRenderingContext2D
    this.aspecto()
    window.addEventListener('resize', () => {
      this.aspecto()
    })
  }
  aspecto() {
    const relacion = 1280 / 720
    this.alto = window.innerHeight
    this.ancho = this.alto * relacion
    this.etiqueta.width = window.innerWidth
    this.etiqueta.height = window.innerHeight
    this.unPorcientoAncho = this.ancho / 100
    this.unPorcientoAlto = this.alto / 100
  }
  porcentajeAncho(valor: number) {
    return valor / this.unPorcientoAncho
  }
  pixelesAncho(valor: number) {
    return valor * this.unPorcientoAncho
  }
  porcentajeAlto(valor: number) {
    return valor / this.unPorcientoAlto
  }
  pixelesAlto(valor: number) {
    return valor * this.unPorcientoAlto
  }
  actualizar() {
    this.contexto.clearRect(
      0,
      0,
      this.etiqueta.width,
      this.etiqueta.height
    )
  }
}