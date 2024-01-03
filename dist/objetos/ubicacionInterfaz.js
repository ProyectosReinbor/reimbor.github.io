import { UbicacionCoordenada } from "./ubicacion/coordenada.js";
import { UbicacionMedida } from "./ubicacion/medida.js";
import { Ubicacion } from "./ubicacion/ubicacion.js";
export class UbicacionInterfaz extends Ubicacion {
    constructor(coordenada, medida, motor) {
        super(coordenada, medida);
        this.motor = motor;
    }
    obtenerPixeles() {
        return new Ubicacion(new UbicacionCoordenada(this.motor.lienzo.pixelesAncho(this.coordenada.x), this.motor.lienzo.pixelesAlto(this.coordenada.y)), new UbicacionMedida(this.motor.lienzo.pixelesAncho(this.medida.ancho), this.motor.lienzo.pixelesAlto(this.medida.alto)));
    }
}
