import { Transformar } from "./transformar.js";
export class PosicionInterfaz {
    constructor(motor, posicion) {
        this.motor = motor;
        this.posicion = posicion;
        this.pixeles = new Transformar(0, 0, 0, 0);
    }
    obtenerPixeles() {
        this.pixeles.x = this.motor.lienzo.pixelesAncho(this.posicion.x);
        this.pixeles.y = this.motor.lienzo.pixelesAlto(this.posicion.y);
        this.pixeles.ancho = this.motor.lienzo.pixelesAncho(this.posicion.ancho);
        this.pixeles.alto = this.motor.lienzo.pixelesAlto(this.posicion.alto);
        return this.pixeles;
    }
    adentro(x, y, ancho, alto) {
        return this.posicion.adentro(x, y, ancho, alto);
    }
}
