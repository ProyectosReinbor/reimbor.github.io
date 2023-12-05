import { Transformar } from './transformar.js';
export class Cuadro extends Transformar {
    constructor(motor, x, y, ancho, alto, color = "#fff") {
        super(motor, x, y, ancho, alto);
        this.color = color;
    }
    actualizar() {
        this.dibujar();
    }
    dibujar() {
        this.motor.contexto.fillStyle = this.color;
        const { x, y, ancho, alto } = this.pixeles();
        this.motor.contexto.fillRect(x, y, ancho, alto);
    }
}
