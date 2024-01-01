import { NombresImagenes } from "../../motor/imagenes.js"
import { Motor } from "../../motor/motor.js"
import { InterfazImagen } from "./imagen.js"
import { Ubicacion, UbicacionCoordenada, UbicacionMedida } from "./ubicacion.js"

export class InterfazElementosImagen {
  motor: Motor
  interfazImagen: InterfazImagen
  elementos: Ubicacion
  constructor(
    motor: Motor,
    interfazImagen: InterfazImagen,
    elementos: Ubicacion,
  ) {
    this.motor = motor
    this.interfazImagen = interfazImagen
    this.elementos = elementos
  }
  elementosVertical(indice: number) {
    this.elementos.posicion.y = indice * this.elementos.medida.alto
  }
  elementosHorizontal(indice: number) {
    this.elementos.posicion.x = indice * this.elementos.medida.ancho
  }
  dibujar() {
    const pixeles = this.interfazImagen.interfazUbicacion.obtenerPixeles()
    this.motor.lienzo.contexto.imageSmoothingEnabled = false
    this.motor.lienzo.contexto.drawImage(
      this.interfazImagen.elemento,
      this.elementos.posicion.x,
      this.elementos.posicion.y,
      this.elementos.medida.ancho,
      this.elementos.medida.alto,
      pixeles.posicion.x,
      pixeles.posicion.y,
      pixeles.medida.ancho,
      pixeles.medida.alto,
    )
  }
}