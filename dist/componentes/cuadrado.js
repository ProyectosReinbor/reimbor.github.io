export class Cuadrado {
    constructor(motor, posicion, color = "#fff") {
        this.motor = motor;
        this.posicion = posicion;
        this.color = color;
    }
    dibujar() {
        this.motor.lienzo.contexto.fillStyle = this.color;
        const pixeles = this.posicion.obtenerPixeles();
        this.motor.lienzo.contexto.fillRect(pixeles.x, pixeles.y, pixeles.ancho, pixeles.alto);
    }
}
