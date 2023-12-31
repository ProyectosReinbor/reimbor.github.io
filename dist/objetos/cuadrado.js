export class Cuadrado {
    constructor(motor, color) {
        this.motor = motor;
        this.color = color;
    }
    dibujar(pixeles) {
        this.motor.lienzo.contexto.fillStyle = this.color;
        this.motor.lienzo.contexto.fillRect(pixeles.coordenada.x, pixeles.coordenada.y, pixeles.medida.ancho, pixeles.medida.alto);
    }
}
