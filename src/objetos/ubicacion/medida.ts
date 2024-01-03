export class UbicacionMedida {
  ancho: number
  alto: number
  constructor(
    ancho: number = 0,
    alto: number = 0,
  ) {
    this.ancho = ancho
    this.alto = alto
  }
  mitad(): UbicacionMedida {
    return new UbicacionMedida(
      this.ancho / 2,
      this.alto / 2,
    )
  }
}