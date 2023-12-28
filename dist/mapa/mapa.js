import { ElementosImagen } from "../componentes/elementosImagen.js";
import { Imagen } from "../componentes/imagen.js";
import { Transformar } from "../componentes/transformar.js";
export class Mapa {
    constructor(motor) {
        this.motor = motor;
        const imagen = new Imagen(this.motor);
        imagen.asignarImagen("mapaAnimations0");
        this.animations0 = new ElementosImagen(imagen, new Transformar(0, 0, 48, 48), 0, 0);
    }
    actualizar() {
        this.animations0.actualizar(new Transformar(0, 0, 10, 10));
    }
}
