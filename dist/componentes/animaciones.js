import { ObjetosImagen } from "./objetosImagen.js";
export class Animaciones extends ObjetosImagen {
    constructor(motor, imagen, objetos, horizontal, vertical) {
        super(motor, imagen, objetos, horizontal, vertical);
        this.contador = 0;
        this.indice = 0;
        this.retraso = 0;
        this.animacion = { indice: -1, objetos: 0 };
    }
    reproducir(indice, objetos) {
        if (indice == this.animacion.indice)
            return;
        this.animacion.indice = indice;
        this.animacion.objetos = objetos;
        this.indice = 0;
        this.objetos.y = this.animacion.indice * this.objetos.alto;
        this.retraso = 1000 / this.animacion.objetos;
    }
    cuadro() {
        this.contador += this.motor.ultimoTiempoEntreCuadro;
        if (this.contador < this.retraso)
            return;
        this.contador = 0;
        this.indice++;
        if (this.indice >= this.animacion.objetos)
            this.indice = 0;
        this.objetos.x = this.indice * this.objetos.ancho;
    }
    actualizar() {
        this.cuadro();
        this.dibujar();
    }
}
