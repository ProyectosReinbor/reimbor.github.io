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
};
export class Imagenes {
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
        };
    }
    obtener(nombre) {
        return new Promise((respuesta) => {
            const imagen = this.coleccion[nombre];
            const fuente = Fuentes[nombre];
            if (imagen.src == fuente)
                return respuesta(imagen);
            imagen.src = fuente;
            imagen.addEventListener('load', () => respuesta(imagen));
        });
    }
}
