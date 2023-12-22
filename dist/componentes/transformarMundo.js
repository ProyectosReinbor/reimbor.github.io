import { PosicionInterfaz } from "./posicionInterfaz.js";
import { Transformar } from "./transformar.js";
export class TransformarObjeto extends PosicionInterfaz {
    constructor(motor, padre, posicionMundo) {
        super(motor, padre, new Transformar);
        this.posicionMundo = posicionMundo;
    }
    actualizar() {
        this.posicion = this.motor.camara.posicionLienzo(this.posicionMundo);
        this.asignarPixeles();
    }
}
