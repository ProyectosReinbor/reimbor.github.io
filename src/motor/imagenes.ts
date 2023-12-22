type Coleccion = {
  controlFlechas: HTMLImageElement
  controlFondo: HTMLImageElement
  mapaAnimations0: HTMLImageElement
  mapaAnimations1: HTMLImageElement
  mapaAnimations2: HTMLImageElement
  mapaForest0: HTMLImageElement
  mapaForest1: HTMLImageElement
  mapaForest2: HTMLImageElement
  pantallaAbrir: HTMLImageElement
  pantallaSalir: HTMLImageElement
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
  pantallaAbrir = "pantallaAbrir",
  pantallaSalir = "pantallaSalir",
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
  pantallaAbrir: "imagenes/pantalla/abrir.svg",
  pantallaSalir: "imagenes/pantalla/salir.svg",
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
      pantallaAbrir: new Image,
      pantallaSalir: new Image,
      mago: new Image,
    }
  }
  obtener(
    nombre: NombresImagenes,
    respuesta: (imagen: HTMLImageElement) => void
  ) {
    const imagen = this.coleccion[nombre]
    const fuente = Fuentes[nombre]
    if (imagen.src == fuente)
      return respuesta(imagen)
    imagen.src = fuente
    imagen.addEventListener('load', () => respuesta(imagen))
  }
}