import { Imagen } from "../../componentes/imagen.js";
import { PosicionInterfaz } from "../../componentes/posicionInterfaz.js";
import { Transformar } from "../../componentes/transformar.js";
export class Fondo {
    constructor(motor) {
        this.motor = motor;
        this.imagen = new Imagen(this.motor, "controlFondo");
        this.posicionInterfaz = new PosicionInterfaz(this.motor, new Transformar(0, 50, 50, 50));
    }
    dibujar() {
        const pixeles = this.posicionInterfaz.obtenerPixeles();
        this.imagen.dibujar(pixeles);
    }
    adentro(x, y) {
        return this.posicionInterfaz.adentro(x, y, 0, 0);
    }
}
