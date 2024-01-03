import { Imagen } from "../../objetos/imagen.js";
import { UbicacionInterfaz } from "../../objetos/ubicacionInterfaz.js";
import { UbicacionCoordenada } from "../../objetos/ubicacion/coordenada.js";
import { UbicacionMedida } from "../../objetos/ubicacion/medida.js";
export class Flechas extends UbicacionInterfaz {
    constructor(motor, fondo) {
        super(new UbicacionCoordenada(0, 0), new UbicacionMedida(fondo.medida.ancho / 3, fondo.medida.alto / 3), motor);
        this.motor = motor;
        this.fondo = fondo;
        this.imagen = new Imagen(this.motor, "controlFlechas");
    }
    dibujar() {
        const pixeles = this.obtenerPixeles();
        this.imagen.dibujar(pixeles);
    }
    touch(coordenada) {
        this.coordenada.x = coordenada.x - (this.medida.ancho / 2);
        this.coordenada.y = coordenada.y - (this.medida.alto / 2);
    }
    quieto() {
        const x = this.fondo.coordenada.x + (this.fondo.medida.ancho / 2);
        const y = this.fondo.coordenada.y + (this.fondo.medida.alto / 2);
        this.coordenada.x = x - (this.medida.ancho / 2);
        this.coordenada.y = y - (this.medida.alto / 2);
    }
}
