export class Transformar {
    constructor(x, y, ancho, alto) {
        this.x = x;
        this.y = y;
        this.ancho = ancho;
        this.alto = alto;
    }
    adentro(x, y, ancho, alto) {
        const objetoLimites = {
            x: x + ancho,
            y: y + alto
        };
        const limites = {
            x: this.x + this.ancho,
            y: this.y + this.alto
        };
        return x >= this.x &&
            y >= this.y &&
            objetoLimites.x <= limites.x &&
            objetoLimites.y <= limites.y;
    }
}
