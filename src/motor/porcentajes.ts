import {Motor} from './motor.js'
export class Porcentajes {
    motor:Motor
    anchoLienzo:number
    altoLienzo:number
    constructor(motor:Motor){
      this.motor = motor
      this.anchoLienzo = this.motor.anchoLienzo
      this.altoLienzo = this.motor.altoLienzo
    }
    ancho(valor:number, pixeles:boolean = true) {
      const unPorcentaje = this.anchoLienzo / 100
      const porcentaje = valor / unPorcentaje
      const ancho = valor * unPorcentaje
      if (pixeles) return ancho
      return porcentaje
    }
    alto(valor:number, pixeles:boolean = true) {
      const unPorcentaje:number = this.altoLienzo / 100
      const porcentaje:number = valor / unPorcentaje
      const alto:number = valor * unPorcentaje
      if (pixeles) return alto
      return porcentaje
    }
  }