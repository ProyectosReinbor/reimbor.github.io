import { ElementosImagen } from "../objetos/elementosImagen.js";
import { Ubicacion } from "../objetos/ubicacion/ubicacion.js";
import { NombresImagenes } from "../motor/imagenes.js";
import { Motor } from "../motor/motor.js";
import { UbicacionMedida } from "../objetos/ubicacion/medida.js";
import { UbicacionCoordenada } from "../objetos/ubicacion/coordenada.js";
export class Mapa {
  motor: Motor
  animations0: ElementosImagen
  pixeles: Ubicacion
  constructor(motor: Motor) {
    this.motor = motor
    this.animations0 = new ElementosImagen(
      this.motor,
      NombresImagenes.mapaAnimations0,
      new Ubicacion(
        new UbicacionCoordenada(0, 0),
        new UbicacionMedida(48, 48),
      )
    )
    this.pixeles = new Ubicacion(
      new UbicacionCoordenada(0, 0),
      new UbicacionMedida(10, 10),
    )
  }
  actualizar() {
    this.animations0.dibujar(this.pixeles)
  }
}