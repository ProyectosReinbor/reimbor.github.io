import { Estados } from "./estados";
import { Motor } from "../motor/motor";

export class Moverse {
    estados: Estados
    motor: Motor
    moverseX: number
    moverseY: number
    constructor(
        motor: Motor,
        estados: Estados
    ) {
        this.motor = motor
        this.estados = estados
        this.moverseX = 0
        this.moverseY = 0
    }
    actualizar() {
        const segundos = this.motor.ultimoTiempoEntreCuadro / 1000
        const velocidad = this.estados.velocidad * segundos
        const distanciaX = velocidad * this.moverseX
        const distanciaY = velocidad * this.moverseY
        this.estados.posicionMundo.x += distanciaX
        this.estados.posicionMundo.y += distanciaY
    }
}