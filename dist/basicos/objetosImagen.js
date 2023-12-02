import { Imagen } from "./imagen.js";
import { Transformar } from "./transformar.js";
export class ObjetosImagen extends Imagen {
    constructor(motor, x, y, ancho, alto, src, horizontal, vertical) {
        super(motor, x, y, ancho, alto, src);
        this.horizontal = horizontal;
        this.vertical = vertical;
        this.objetos = new Transformar(this.motor);
    }
    cargoImagen() {
        this.objetos.ancho = this.imagen.width / this.horizontal;
        this.objetos.alto = this.imagen.height / this.vertical;
        this.puedeDibujar = true;
    }
    dibujar() {
        if (this.puedeDibujar == false)
            return;
        this.dibujarObjeto();
    }
    dibujarObjeto() {
        this.motor.contexto.imageSmoothingEnabled = false;
        const lienzo = this.pixeles();
        this.motor.contexto.drawImage(this.imagen, this.objetos.x, this.objetos.y, this.objetos.ancho, this.objetos.alto, lienzo.x, lienzo.y, lienzo.ancho, lienzo.alto);
    }
}
