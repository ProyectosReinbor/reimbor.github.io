import { UbicacionCoordenada } from "./ubicacion.js";
export class MovimientoMundo {
    constructor(motor, ubicacionMundo, velocidad) {
        this.motor = motor;
        this.ubicacionMundo = ubicacionMundo;
        this.velocidad = velocidad;
        this.moverX = 0;
        this.moverY = 0;
    }
    mover() {
        const segundos = this.motor.controlCuadros.ultimoTiempoCuadro / 1000;
        const velocidadSegundos = this.velocidad * segundos;
        const nuevaX = velocidadSegundos * this.moverX;
        const nuevaY = velocidadSegundos * this.moverY;
        this.ubicacionMundo.ubicacion.posicion = new UbicacionCoordenada(nuevaX, nuevaY);
    }
}
