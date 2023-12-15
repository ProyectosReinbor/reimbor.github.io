import { Engine } from './engine.js'
export class Percentages {
  engine: Engine
  constructor(engine: Engine) {
    this.engine = engine
  }
  aWidePercentage(){
    return this.engine.canvasWidth / 100
  }
  widthPercentage(valor: number) {
    return valor / this.aWidePercentage()
  }
  pixelsWidth(valor: number) {
    return valor * this.aWidePercentage()
  }
  aHighPercentage(){
return this.engine.highCanvas / 100
  }
  highPercentage(valor: number) {
    return valor / this.aHighPercentage()
  }
  pixelsHigh(valor: number) {
    return valor * this.aHighPercentage()
  }
}