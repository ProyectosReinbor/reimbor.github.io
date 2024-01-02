export class Animacion {
    constructor(indice, cantidadElementos) {
        this.indice = indice;
        this.cantidadElementos = cantidadElementos;
    }
}
export class Animaciones {
    constructor(motor, elementosImagen, nombre) {
        this.motor = motor;
        this.elementosImagen = elementosImagen;
        this.ultimoTiempoElemento = 0;
        this.indiceHorizontal = 0;
        this.tiempoElemento = 0;
        this.animacion = new Animacion(-1, 0);
    }
    reproducir(animacion) {
        if (animacion.indice == this.animacion.indice)
            return;
        this.animacion = new Animacion(animacion.indice, animacion.cantidadElementos);
        this.indiceHorizontal = 0;
        this.elementosImagen.vertical(this.animacion.indice);
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
        this.elementosImagen.horizontal(this.indiceHorizontal);
    }
    dibujar(pixeles) {
        this.elementosImagen.dibujar(pixeles);
    }
}
