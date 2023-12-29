import { Transformar } from "../componentes/transformar.js";
export class AtraerCamara {
    constructor(motor, estado) {
        this.motor = motor;
        this.estado = estado;
        this.ultimaPosicionMundo = new Transformar(0, 0, 0, 0);
    }
    actualizar() {
        if (this.ultimaPosicionMundo.x == this.estado.posicionMundo.x &&
            this.ultimaPosicionMundo.y == this.estado.posicionMundo.y)
            return;
        this.ultimaPosicionMundo = new Transformar(this.estado.posicionMundo.x, this.estado.posicionMundo.y, this.estado.posicionMundo.ancho, this.estado.posicionMundo.alto);
        const mitadVision = this.motor.camara.vision.mitad();
        const mitadPosicionMundo = this.estado.posicionMundo.mitad();
        this.motor.camara.vision = new Transformar(this.estado.posicionMundo.x - mitadVision.ancho + mitadPosicionMundo.ancho, this.estado.posicionMundo.y - mitadVision.alto + mitadPosicionMundo.alto, this.motor.camara.vision.ancho, this.motor.camara.vision.alto);
    }
}
