import { Animaciones } from "../objetos/animaciones.js";
export class AnimacionesMago {
    constructor(motor, estado) {
        this.motor = motor;
        this.estado = estado;
        this.animaciones = new Animaciones(this.motor, this.estado.animacion.nombre, this.estado.animacion.elementos);
    }
    dibujar() {
        const pixeles = this.estado.ubicacionMundo.obtenerPixeles();
        if (pixeles == undefined)
            return;
        this.animaciones.reproducir(this.estado.animacion.animacion);
        this.animaciones.elemento();
        this.animaciones.dibujar(pixeles);
    }
}
