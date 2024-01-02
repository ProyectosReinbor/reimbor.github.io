import { ElementosImagen } from "../../objetos/elementosImagen.js";
export class Pausa {
    constructor(motor) {
        this.motor = motor;
        this.imagen = new ElementosImagen(this.motor, "botones");
    }
    dibujar() {
        this.imagen.dibujarElemento();
    }
}
