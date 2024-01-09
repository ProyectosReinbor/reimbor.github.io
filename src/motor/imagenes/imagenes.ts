import { MotorImagenesColeccion } from "./coleccion.js"
import { MotorImagenesFuentes } from "./fuentes.js"
import { MotorImagenesNombres } from "./nombres.js"

export default class Imagenes {
  coleccion: MotorImagenesColeccion
  constructor() {
    this.coleccion = {
      controlFlechas: new Image,
      controlFondo: new Image,
      mapaAnimations0: new Image,
      mapaAnimations1: new Image,
      mapaAnimations2: new Image,
      mapaForest0: new Image,
      mapaForest1: new Image,
      mapaForest2: new Image,
      botones: new Image,
      mago: new Image,
    }
    this.cargar()
  }
  private async cargar() {
    const nombres: MotorImagenesNombres[] = [
      MotorImagenesNombres.controlFlechas,
      MotorImagenesNombres.controlFondo,
      MotorImagenesNombres.mapaAnimations0,
      MotorImagenesNombres.mapaAnimations1,
      MotorImagenesNombres.mapaAnimations2,
      MotorImagenesNombres.mapaForest0,
      MotorImagenesNombres.mapaForest1,
      MotorImagenesNombres.mapaForest2,
      MotorImagenesNombres.mago,
    ]
    for (const nombre of nombres) {
      await this.asignar(nombre)
    }
  }
  private asignar(
    nombre: MotorImagenesNombres,
  ) {
    return new Promise((
      respuesta: (imagen: HTMLImageElement) => void,
    ) => {
      const imagen = this.coleccion[nombre]
      const fuente = MotorImagenesFuentes[nombre]
      imagen.src = fuente
      imagen.addEventListener('load', () => respuesta(imagen))
    })
  }
}