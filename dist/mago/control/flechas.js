import { Imagen } from "../../componentes/imagen.js";
import { PosicionInterfaz } from "../../componentes/posicionInterfaz.js";
import { Transformar } from "../../componentes/transformar.js";
export class Flechas {
    constructor(motor, fondo) {
        this.motor = motor;
        this.fondo = fondo;
        this.imagen = new Imagen(this.motor, "controlFlechas");
        this.posicionInterfaz = new PosicionInterfaz(this.motor, new Transformar(0, 0, this.fondo.posicionInterfaz.posicion.ancho / 3, this.fondo.posicionInterfaz.posicion.alto / 3));
    }
    dibujar() {
        const pixeles = this.posicionInterfaz.obtenerPixeles();
        this.imagen.dibujar(pixeles);
    }
    touch(x, y) {
        this.posicionInterfaz.posicion.x = x - (this.posicionInterfaz.posicion.ancho / 2);
        this.posicionInterfaz.posicion.y = y - (this.posicionInterfaz.posicion.alto / 2);
    }
    quieto() {
        const posicion = this.posicionInterfaz.posicion;
        const fondo = this.fondo.posicionInterfaz.posicion;
        const x = fondo.x + (fondo.ancho / 2);
        const y = fondo.y + (fondo.alto / 2);
        posicion.x = x - (posicion.ancho / 2);
        posicion.y = y - (posicion.alto / 2);
    }
}
