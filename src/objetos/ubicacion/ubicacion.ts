import { UbicacionCoordenada } from "./coordenada.js"
import { UbicacionMedida } from "./medida.js"

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