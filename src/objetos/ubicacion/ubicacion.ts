import Coordenada from "./coordenada.js"
import Medida from "./medida.js"

export default class Ubicacion {
  coordenada: Coordenada
  medida: Medida
  constructor(
    coordenada: Coordenada,
    medida: Medida,
  ) {
    this.coordenada = coordenada
    this.medida = medida
  }
  coordenadaFinal(): Coordenada {
    return new Coordenada(
      this.coordenada.x + this.medida.ancho,
      this.coordenada.y + this.medida.alto,
    )
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