import { Imagen } from "../../objetos/imagen.js";
import { UbicacionInterfaz } from "../../objetos/ubicacionInterfaz.js";
import { Ubicacion } from "../../objetos/ubicacion/ubicacion.js";
import { NombresImagenes } from "../../motor/imagenes.js";
import { Motor } from "../../motor/motor.js";
import { UbicacionCoordenada } from "../../objetos/ubicacion/coordenada.js";
import { UbicacionMedida } from "../../objetos/ubicacion/medida.js";
export class Fondo extends UbicacionInterfaz {
  imagen: Imagen
  constructor(
    motor: Motor,
  ) {
    super(
      new UbicacionCoordenada(0, 50),
      new UbicacionMedida(50, 50),
      motor,
    )
    this.imagen = new Imagen(
      this.motor,
      NombresImagenes.controlFondo,
    )
  }
  dibujar() {
    const pixeles = this.obtenerPixeles()
    this.imagen.dibujar(pixeles)
  }
}