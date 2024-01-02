import { Ubicacion, UbicacionCoordenada, UbicacionMedida, } from "./ubicacion.js";
export class InterfazUbicacion {
    constructor(motor, ubicacion) {
        this.ubicacion = ubicacion;
        this.motor = motor;
    }
    obtenerPixeles() {
        return new Ubicacion(new UbicacionCoordenada(this.motor.lienzo.pixelesAncho(this.ubicacion.posicion.x), this.motor.lienzo.pixelesAlto(this.ubicacion.posicion.y)), new UbicacionMedida(this.motor.lienzo.pixelesAncho(this.ubicacion.medida.ancho), this.motor.lienzo.pixelesAlto(this.ubicacion.medida.alto)));
    }
}
