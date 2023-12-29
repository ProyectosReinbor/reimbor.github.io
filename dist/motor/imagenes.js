var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
        this.cargar();
    }
    cargar() {
        return __awaiter(this, void 0, void 0, function* () {
            const nombres = [
                "controlFlechas",
                "controlFondo",
                "mapaAnimations0",
                "mapaAnimations1",
                "mapaAnimations2",
                "mapaForest0",
                "mapaForest1",
                "mapaForest2",
                "pantallaAbrir",
                "pantallaSalir",
                "mago",
            ];
            for (const nombre of nombres) {
                yield this.asignar(nombre);
            }
        });
    }
    asignar(nombre) {
        return new Promise((respuesta) => {
            const imagen = this.coleccion[nombre];
            const fuente = Fuentes[nombre];
            imagen.src = fuente;
            imagen.addEventListener('load', () => respuesta(imagen));
        });
    }
}
