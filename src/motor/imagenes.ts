type Coleccion = {
  controlFlechas: HTMLImageElement
  controlFondo: HTMLImageElement
  mapaAnimations0: HTMLImageElement
  mapaAnimations1: HTMLImageElement
  mapaAnimations2: HTMLImageElement
  mapaForest0: HTMLImageElement
  mapaForest1: HTMLImageElement
  mapaForest2: HTMLImageElement
  botones: HTMLImageElement
  mago: HTMLImageElement
}
export const enum NombresImagenes {
  controlFlechas = "controlFlechas",
  controlFondo = "controlFondo",
  mapaAnimations0 = "mapaAnimations0",
  mapaAnimations1 = "mapaAnimations1",
  mapaAnimations2 = "mapaAnimations2",
  mapaForest0 = "mapaForest0",
  mapaForest1 = "mapaForest1",
  mapaForest2 = "mapaForest2",
  botones = "botones",
  mago = "mago",
}
const Fuentes = {
  controlFlechas: "imagenes/control/flechas.png",
  controlFondo: "imagenes/control/fondo.png",
  mapaAnimations0: "imagenes/mapa/animations0.png",
  mapaAnimations1: "imagenes/mapa/animations1.png",
  mapaAnimations2: "imagenes/mapa/animations2.png",
  mapaForest0: "imagenes/mapa/forest0.png",
  mapaForest1: "imagenes/mapa/forest1.png",
  mapaForest2: "imagenes/mapa/forest2.png",
  botones: "imagenes/botones.png",
  mago: "imagenes/mago.png",
}
export class Imagenes {
  coleccion: Coleccion
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
    const nombres: NombresImagenes[] = [
      NombresImagenes.controlFlechas,
      NombresImagenes.controlFondo,
      NombresImagenes.mapaAnimations0,
      NombresImagenes.mapaAnimations1,
      NombresImagenes.mapaAnimations2,
      NombresImagenes.mapaForest0,
      NombresImagenes.mapaForest1,
      NombresImagenes.mapaForest2,
      NombresImagenes.mago,
    ]
    for (const nombre of nombres) {
      await this.asignar(nombre)
    }
  }
  private asignar(
    nombre: NombresImagenes,
  ) {
    return new Promise((
      respuesta: (imagen: HTMLImageElement) => void,
    ) => {
      const imagen = this.coleccion[nombre]
      const fuente = Fuentes[nombre]
      imagen.src = fuente
      imagen.addEventListener('load', () => respuesta(imagen))
    })
  }
}