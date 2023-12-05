export class Transformar {
    constructor(motor, x = 0, y = 0, ancho = 0, alto = 0) {
        this.motor = motor;
        this.x = x;
        this.y = y;
        this.ancho = ancho;
        this.alto = alto;
    }
    pixeles() {
        const x = this.motor.porcentajes.pixelesAncho(this.x);
        const y = this.motor.porcentajes.pixelesAlto(this.y);
        const ancho = this.motor.porcentajes.pixelesAncho(this.ancho);
        const alto = this.motor.porcentajes.pixelesAlto(this.alto);
        return { x, y, ancho, alto };
    }
    adentro(x, y, ancho = 0, alto = 0) {
        const objetoXFinal = x + ancho;
        const objetoYFinal = y + alto;
        const xFinal = this.x + this.ancho;
        const yFinal = this.y + this.alto;
        return x >= this.x &&
            y >= this.y &&
            objetoXFinal <= xFinal &&
            objetoYFinal <= yFinal;
    }
}
