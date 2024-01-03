import { ElementosImagen } from "./elementosImagen.js";
export class AnimacionesAnimacion {
    constructor(indice, cantidadElementos) {
        this.indice = indice;
        this.cantidadElementos = cantidadElementos;
    }
}
export class Animaciones extends ElementosImagen {
    constructor(motor, nombre, elementos) {
        super(motor, nombre, elementos);
        this.ultimoTiempoElemento = 0;
        this.indiceHorizontal = 0;
        this.tiempoElemento = 0;
        this.animacion = new AnimacionesAnimacion(-1, 0);
    }
    reproducir(animacion) {
        if (animacion.indice == this.animacion.indice)
            return;
        this.animacion = new AnimacionesAnimacion(animacion.indice, animacion.cantidadElementos);
        this.indiceHorizontal = 0;
        this.vertical(this.animacion.indice);
        this.tiempoElemento = 1000 / this.animacion.cantidadElementos;
    }
    elemento() {
        this.ultimoTiempoElemento += this.motor.controlCuadros.ultimoTiempoCuadro;
        if (this.ultimoTiempoElemento < this.tiempoElemento)
            return;
        this.ultimoTiempoElemento = 0;
        this.indiceHorizontal++;
        if (this.indiceHorizontal >= this.animacion.cantidadElementos)
            this.indiceHorizontal = 0;
        this.horizontal(this.indiceHorizontal);
    }
}
