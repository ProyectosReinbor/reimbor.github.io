import { ElementosImagen } from "../../objetos/elementosImagen.js";
import { UbicacionCoordenada } from "../../objetos/ubicacion/coordenada.js";
import { UbicacionMedida } from "../../objetos/ubicacion/medida.js";
import { Ubicacion } from "../../objetos/ubicacion/ubicacion.js";
export class Pausa {
    constructor(motor) {
        this.motor = motor;
        this.elementosImagen = new ElementosImagen(this.motor, "botones", new Ubicacion(new UbicacionCoordenada(0, 0), new UbicacionMedida(16, 16)));
        this.pixeles = new Ubicacion(new UbicacionCoordenada(0, 0), new UbicacionMedida(16, 16));
    }
    dibujar() {
        this.elementosImagen.dibujar(this.pixeles);
    }
}
