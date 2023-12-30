import { Transformar } from "../componentes/transformar.js";
export class AtraerCamara {
    constructor(motor, estado) {
        this.motor = motor;
        this.estado = estado;
        this.ultimaPosicionMundo = new Transformar(0, 0, 0, 0);
    }
    actualizar() {
        if (this.ultimaPosicionMundo.x == this.estado.posicionMundo.posicion.x &&
            this.ultimaPosicionMundo.y == this.estado.posicionMundo.posicion.y)
            return;
        this.ultimaPosicionMundo = new Transformar(this.estado.posicionMundo.posicion.x, this.estado.posicionMundo.posicion.y, this.estado.posicionMundo.posicion.ancho, this.estado.posicionMundo.posicion.alto);
        const mitadVision = this.motor.camara.vision.mitad();
        const mitadPosicionMundo = this.estado.posicionMundo.posicion.mitad();
        this.motor.camara.vision = new Transformar(this.estado.posicionMundo.posicion.x - mitadVision.ancho + mitadPosicionMundo.ancho, this.estado.posicionMundo.posicion.y - mitadVision.alto + mitadPosicionMundo.alto, this.motor.camara.vision.ancho, this.motor.camara.vision.alto);
    }
}
