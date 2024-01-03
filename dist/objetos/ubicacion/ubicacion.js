export class Ubicacion {
    constructor(coordenada, medida) {
        this.coordenada = coordenada;
        this.medida = medida;
    }
    coordenadaFinal() {
        return {
            x: this.coordenada.x + this.medida.ancho,
            y: this.coordenada.y + this.medida.alto,
        };
    }
    adentro(ubicacion) {
        const ubicacionCoordenadaFinal = ubicacion.coordenadaFinal();
        const coordenadaFinal = this.coordenadaFinal();
        return ubicacion.coordenada.x >= this.coordenada.x &&
            ubicacion.coordenada.y >= this.coordenada.y &&
            ubicacionCoordenadaFinal.x <= coordenadaFinal.x &&
            ubicacionCoordenadaFinal.y <= coordenadaFinal.y;
    }
}
