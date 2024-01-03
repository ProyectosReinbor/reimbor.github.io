import { Ubicacion, } from "./ubicacion/ubicacion.js";
export class UbicacionMundo extends Ubicacion {
    constructor(motor, posicion, medida) {
        super(posicion, medida);
        this.motor = motor;
    }
    obtenerPixeles() {
        if (this.motor.camara.visible(this) == false)
            return;
        const interfazUbicacion = this.motor.camara.ubicacionLienzo(this);
        return interfazUbicacion.obtenerPixeles();
    }
}
