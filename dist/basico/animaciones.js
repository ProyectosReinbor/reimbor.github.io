import { ObjetosImagen } from "./objetosImagen.js";
export class Animaciones extends ObjetosImagen {
    constructor(motor, nombre, posicionLienzo, ancho, alto, horizontal, vertical) {
        super(motor, nombre, posicionLienzo, ancho, alto, horizontal, vertical);
        this.contadorTiempo = 0;
        this.indiceImagen = 0;
        this.tiempoEntreImagen = 0;
        this.animacion = { indice: -1, objetos: 0 };
    }
    reproducir(indice, objetos) {
        if (indice == this.animacion.indice)
            return;
        this.animacion.indice = indice;
        this.animacion.objetos = objetos;
        this.indiceImagen = 0;
        this.objetos.y = this.animacion.indice * this.objetos.alto;
        this.tiempoEntreImagen = 1000 / this.animacion.objetos;
    }
    siguienteCuadro() {
        this.contadorTiempo += this.motor.ultimoTiempoEntreCuadro;
        if (this.contadorTiempo < this.tiempoEntreImagen)
            return;
        this.contadorTiempo = 0;
        this.indiceImagen++;
        if (this.indiceImagen >= this.animacion.objetos)
            this.indiceImagen = 0;
        this.objetos.x = this.indiceImagen * this.objetos.ancho;
    }
    actualizar() {
        this.siguienteCuadro();
        this.dibujar();
    }
}
