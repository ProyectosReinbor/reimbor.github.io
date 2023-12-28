import { Transformar } from "./transformar.js";
export class PosicionInterfaz {
    constructor(motor, posicion) {
        this.motor = motor;
        this.posicion = posicion;
        this.ultimaPosicion = new Transformar(0, 0, 0, 0);
    }
    pixeles() {
        if (this.posicion.x == this.ultimaPosicion.x &&
            this.posicion.y == this.ultimaPosicion.y)
            return false;
        console.log("posicionInterfaz");
        this.ultimaPosicion = new Transformar(this.posicion.x, this.posicion.y, this.posicion.ancho, this.posicion.alto);
        return new Transformar(this.motor.lienzo.pixelesAncho(this.posicion.x), this.motor.lienzo.pixelesAlto(this.posicion.y), this.motor.lienzo.pixelesAncho(this.posicion.ancho), this.motor.lienzo.pixelesAlto(this.posicion.alto));
    }
    adentro(x, y, ancho, alto) {
        return this.posicion.adentro(x, y, ancho, alto);
    }
}
