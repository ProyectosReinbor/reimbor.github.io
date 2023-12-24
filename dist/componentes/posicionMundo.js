import { PosicionInterfaz } from "./posicionInterfaz.js";
import { Transformar } from "./transformar.js";
export class PosicionMundo extends PosicionInterfaz {
    constructor(motor, posicionMundo) {
        super(motor, new Transformar);
        this.posicionMundo = posicionMundo;
    }
    actualizar() {
        this.posicion = this.motor.camara.posicionLienzo(this.posicionMundo);
        this.asignarPixeles();
    }
}
