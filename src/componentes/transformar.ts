export class Transformar {
  x: number
  y: number
  ancho: number
  alto: number
  constructor(
    x: number,
    y: number,
    ancho: number,
    alto: number,
  ) {
    this.x = x
    this.y = y
    this.ancho = ancho
    this.alto = alto
  }
  adentro(
    x: number,
    y: number,
    ancho: number,
    alto: number,
  ) {
    const objetoLimites = {
      x: x + ancho,
      y: y + alto
    }
    const limites = {
      x: this.x + this.ancho,
      y: this.y + this.alto
    }
    return x >= this.x &&
      y >= this.y &&
      objetoLimites.x <= limites.x &&
      objetoLimites.y <= limites.y
  }
}