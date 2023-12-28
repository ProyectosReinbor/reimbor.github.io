import { Imagen } from "../../componentes/imagen.js";
import { PosicionInterfaz } from "../../componentes/posicionInterfaz";
import { Transformar } from "../../componentes/transformar.js";
export class Flechas {
    constructor(motor, fondo) {
        this.motor = motor;
        this.fondo = fondo;
        this.imagen = new Imagen(this.motor, "controlFlechas");
        this.posicionInterfaz = new PosicionInterfaz(this.motor, new Transformar(0, 0, this.fondo.posicionInterfaz.posicion.ancho / 3, this.fondo.posicionInterfaz.posicion.alto / 3));
    }
    dibujar() {
        const posicionLienzo = this.posicionInterfaz.pixeles();
        if (posicionLienzo == false)
            return false;
        this.imagen.dibujar(posicionLienzo);
    }
}
