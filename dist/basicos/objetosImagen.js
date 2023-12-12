import { Imagen } from "./imagen.js";
import { Transformar } from "./transformar.js";
export class ObjetosImagen extends Imagen {
    constructor(motor, src, posicionLienzo, horizontal, vertical) {
        super(motor, src, posicionLienzo);
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
        if (!this.puedeDibujar)
            return;
        this.motor.contexto.imageSmoothingEnabled = false;
        let { x, y, ancho, alto } = this.posicionLienzo.pixeles();
        if (this.escalaHorizontal == -1) {
            this.motor.contexto.scale(-1, 1);
        }
        console.log(this.escalaHorizontal);
        this.motor.contexto.drawImage(this.imagen, this.objetos.x, this.objetos.y, this.objetos.ancho, this.objetos.alto, x, y, -ancho, alto);
    }
}
