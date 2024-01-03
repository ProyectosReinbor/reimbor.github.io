import { Imagen } from "./imagen.js";
export class ElementosImagen extends Imagen {
    constructor(motor, nombre, elementos) {
        super(motor, nombre);
        this.elementos = elementos;
    }
    horizontal(indice) {
        this.elementos.coordenada.x = this.elementos.medida.ancho * indice;
    }
    vertical(indice) {
        this.elementos.coordenada.y = this.elementos.medida.alto * indice;
    }
    dibujar(pixeles) {
        this.motor.lienzo.contexto.imageSmoothingEnabled = false;
        this.motor.lienzo.contexto.drawImage(this.imagen, this.elementos.coordenada.x, this.elementos.coordenada.y, this.elementos.medida.ancho, this.elementos.medida.alto, pixeles.coordenada.x, pixeles.coordenada.y, pixeles.medida.ancho, pixeles.medida.alto);
    }
}
