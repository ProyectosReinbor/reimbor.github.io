import { PosicionInterfaz } from "./posicionInterfaz.js";
export class PosicionMundo {
    constructor(motor, posicion) {
        this.motor = motor;
        this.posicion = posicion;
        this.posicionInterfaz = new PosicionInterfaz(this.motor, this.posicion);
    }
    obtenerPixeles() {
        if (this.motor.camara.visible(this.posicion) == false)
            return false;
        this.posicionInterfaz.posicion = this.motor.camara.posicionLienzo(this.posicion);
        console.log(this.posicion);
        return this.posicionInterfaz.obtenerPixeles();
    }
    cambiarPosicion(x, y) {
        this.posicion.x = x;
        this.posicion.y = y;
    }
}
