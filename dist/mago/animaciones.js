import { Animaciones } from "../componentes/animaciones.js";
import { ElementosImagen } from "../componentes/elementosImagen.js";
import { Imagen } from "../componentes/imagen.js";
export class AnimacionesMago {
    constructor(motor, estado) {
        this.motor = motor;
        this.estado = estado;
        this.animaciones = new Animaciones(this.motor, new ElementosImagen(new Imagen(this.motor, this.estado.animacion.nombre), this.estado.animacion.elementos, this.estado.animacion.horizontal, this.estado.animacion.vertical));
    }
    actualizar() {
        if (this.motor.camara.visible(this.estado.posicionMundo) == false)
            return false;
        const posicionLienzo = this.motor.camara.posicionLienzo(this.estado.posicionMundo);
        this.animaciones.reproducir(this.estado.animacion.animacion);
        this.animaciones.elemento();
        this.animaciones.actualizar(posicionLienzo);
    }
}
