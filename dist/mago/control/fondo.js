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
        const posicionLienzo = this.posicionInterfaz.pixeles();
        if (posicionLienzo == false)
            return false;
        this.imagen.dibujar(posicionLienzo);
    }
}
