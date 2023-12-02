export class Moverse {
    constructor(motor, estados) {
        this.motor = motor;
        this.estados = estados;
        this.moverseX = 0;
        this.moverseY = 0;
    }
    dibujar() {
        const segundos = this.motor.ultimoTiempoEntreCuadro / 1000;
        const velocidad = this.estados.velocidad * segundos;
        const distanciaX = velocidad * this.moverseX;
        const distanciaY = velocidad * this.moverseY;
        this.estados.posicionMundo.x += distanciaX;
        this.estados.posicionMundo.y += distanciaY;
    }
}
