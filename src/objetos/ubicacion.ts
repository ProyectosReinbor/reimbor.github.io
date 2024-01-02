export class UbicacionCoordenada {
  x: number
  y: number
  constructor(
    x: number = 0,
    y: number = 0,
  ) {
    this.x = x
    this.y = y
  }
}
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
export class Ubicacion {
  posicion: UbicacionCoordenada
  medida: UbicacionMedida
  constructor(
    posicion: UbicacionCoordenada,
    medida: UbicacionMedida,
  ) {
    this.posicion = posicion
    this.medida = medida
  }
  posicionFinal(): UbicacionCoordenada {
    return {
      x: this.posicion.x + this.medida.ancho,
      y: this.posicion.y + this.medida.alto,
    }
  }
  adentro(
    ubicacion: Ubicacion
  ): boolean {
    const ubicacionPosicionFinal = ubicacion.posicionFinal()
    const posicionFinal = this.posicionFinal()
    return ubicacion.posicion.x >= this.posicion.x &&
      ubicacion.posicion.y >= this.posicion.y &&
      ubicacionPosicionFinal.x <= posicionFinal.x &&
      ubicacionPosicionFinal.y <= posicionFinal.y
  }
}