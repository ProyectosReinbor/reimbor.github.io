import { UbicacionCoordenada } from "./coordenada.js"
import { UbicacionMedida } from "./medida.js"

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