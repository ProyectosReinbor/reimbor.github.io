export default class Medida {
  ancho: number
  alto: number
  constructor(
    ancho: number = 0,
    alto: number = 0,
  ) {
    this.ancho = ancho
    this.alto = alto
  }
  mitad(): Medida {
    return new Medida(
      this.ancho / 2,
      this.alto / 2,
    )
  }
}