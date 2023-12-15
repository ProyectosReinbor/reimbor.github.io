import { Engine } from "../engine/engine.js"
export class Transform {
  engine: Engine
  x: number
  y: number
  width: number
  height: number
  constructor(
    engine: Engine,
    x = 0,
    y = 0,
    width = 0,
    height = 0,
  ) {
    this.engine = engine
    this.x = x
    this.y = y
    this.width = width
    this.height = height
  }
  pixels() {
    const x = this.engine.porcentajes.pixelesAncho(this.x)
    const y = this.engine.porcentajes.pixelesAlto(this.y)
    const width = this.engine.porcentajes.pixelesAncho(this.width)
    const height = this.engine.porcentajes.pixelesAlto(this.height)
    return { x, y, width, height }
  }
  adentro(x: number, y: number, width = 0, height = 0) {
    const objetoXFinal = x + width
    const objetoYFinal = y + height
    const xFinal = this.x + this.width
    const yFinal = this.y + this.height
    return x >= this.x &&
      y >= this.y &&
      objetoXFinal <= xFinal &&
      objetoYFinal <= yFinal
  }
}