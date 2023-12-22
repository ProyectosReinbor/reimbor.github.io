import { ObjetosImagen } from "../basico/objetosImagen.js";
import { Transformar } from "../basico/transformar.js";
export class Mapa {
    constructor(motor) {
        this.motor = motor;
        this.animations0 = new ObjetosImagen(this.motor, "mapaAnimations0", new Transformar(this.motor, 0, 0, 10, 10), 48, 48, 0, 0);
    }
    actualizar() {
        this.animations0.actualizar();
    }
}
