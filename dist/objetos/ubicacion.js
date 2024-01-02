export class UbicacionCoordenada {
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }
}
export class UbicacionMedida {
    constructor(ancho = 0, alto = 0) {
        this.ancho = ancho;
        this.alto = alto;
    }
    mitad() {
        return new UbicacionMedida(this.ancho / 2, this.alto / 2);
    }
}
export class Ubicacion {
    constructor(posicion, medida) {
        this.posicion = posicion;
        this.medida = medida;
    }
    posicionFinal() {
        return {
            x: this.posicion.x + this.medida.ancho,
            y: this.posicion.y + this.medida.alto,
        };
    }
    adentro(ubicacion) {
        const ubicacionPosicionFinal = ubicacion.posicionFinal();
        const posicionFinal = this.posicionFinal();
        return ubicacion.posicion.x >= this.posicion.x &&
            ubicacion.posicion.y >= this.posicion.y &&
            ubicacionPosicionFinal.x <= posicionFinal.x &&
            ubicacionPosicionFinal.y <= posicionFinal.y;
    }
}
