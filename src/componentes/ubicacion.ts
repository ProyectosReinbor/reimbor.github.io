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
  coordenada: UbicacionCoordenada
  medida: UbicacionMedida
  constructor(
    coordenada: UbicacionCoordenada,
    medida: UbicacionMedida,
  ) {
    this.coordenada = coordenada
    this.medida = medida
  }
  coordenadaFinal(): UbicacionCoordenada {
    return {
      x: this.coordenada.x + this.medida.ancho,
      y: this.coordenada.y + this.medida.alto,
    }
  }
  adentro(
    ubicacion: Ubicacion
  ): boolean {
    const ubicacionCoordenadaFinal = ubicacion.coordenadaFinal()
    const coordenadaFinal = this.coordenadaFinal()
    return ubicacion.coordenada.x >= this.coordenada.x &&
      ubicacion.coordenada.y >= this.coordenada.y &&
      ubicacionCoordenadaFinal.x <= coordenadaFinal.x &&
      ubicacionCoordenadaFinal.y <= coordenadaFinal.y
  }
}