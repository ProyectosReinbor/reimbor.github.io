export class MovimientoMundo {
    constructor(motor, posicionMundo, velocidad) {
        this.motor = motor;
        this.posicionMundo = posicionMundo;
        this.velocidad = velocidad;
        this.moverX = 0;
        this.moverY = 0;
    }
    mover() {
        const segundos = this.motor.controlCuadros.ultimoTiempoCuadro / 1000;
        const velocidadSegundos = this.velocidad * segundos;
        const nuevaX = velocidadSegundos * this.moverX;
        const nuevaY = velocidadSegundos * this.moverY;
        this.posicionMundo.cambiarPosicion(nuevaX, nuevaY);
    }
}
