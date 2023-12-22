import { Imagen } from "./imagen.js";
import { Transformar } from "./transformar.js";
export class ObjetosImagen extends Imagen {
    constructor(motor, nombre, posicionLienzo, ancho, alto, horizontal, vertical) {
        super(motor, nombre, posicionLienzo);
        this.objetos = new Transformar(this.motor, 0, 0, ancho, alto);
        this.horizontal = horizontal;
        this.vertical = vertical;
    }
    asignarHorizontal() {
        if (this.imagen == undefined)
            return;
        if (this.horizontal == 0)
            this.horizontal = this.imagen.width / this.objetos.ancho;
        else
            this.objetos.ancho = this.imagen.width / this.horizontal;
    }
    asignarVertical() {
        if (this.imagen == undefined)
            return;
        if (this.vertical == 0)
            this.vertical = this.imagen.height / this.objetos.alto;
        else
            this.objetos.alto = this.imagen.height / this.vertical;
    }
    asignarImagen(imagen) {
        this.imagen = imagen;
        this.asignarHorizontal();
        this.asignarVertical();
    }
    dibujar() {
        if (this.imagen == undefined)
            return;
        this.motor.contexto.imageSmoothingEnabled = false;
        const { x, y, ancho, alto } = this.posicionLienzo.pixeles();
        this.motor.contexto.drawImage(this.imagen, this.objetos.x, this.objetos.y, this.objetos.ancho, this.objetos.alto, x, y, ancho, alto);
    }
}
