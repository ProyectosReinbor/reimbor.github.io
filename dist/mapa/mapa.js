import { ElementosImagen } from "../objetos/elementosImagen.js";
import { Imagen } from "../objetos/imagen.js";
import { Transformar } from "../objetos/transformar.js";
export class Mapa {
    constructor(motor) {
        this.motor = motor;
        this.animations0 = new ElementosImagen(new Imagen(this.motor, "mapaAnimations0"), new Transformar(0, 0, 48, 48), 0, 0);
    }
    actualizar() {
        this.animations0.dibujar(new Transformar(0, 0, 10, 10));
    }
}
