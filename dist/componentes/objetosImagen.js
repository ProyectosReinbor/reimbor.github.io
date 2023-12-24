export class ObjetosImagen {
    constructor(motor, imagen, objetos, horizontal, vertical) {
        this.motor = motor;
        this.imagen = imagen;
        this.objetos = objetos;
        this.horizontal = horizontal;
        this.vertical = vertical;
        this.asignarHorizontal();
        this.asignarVertical();
    }
    asignarHorizontal() {
        if (this.horizontal == 0)
            this.horizontal = this.imagen.elemento.width / this.objetos.ancho;
        else
            this.objetos.ancho = this.imagen.elemento.width / this.horizontal;
    }
    asignarVertical() {
        if (this.vertical == 0)
            this.vertical = this.imagen.elemento.height / this.objetos.alto;
        else
            this.objetos.alto = this.imagen.elemento.height / this.vertical;
    }
    dibujar() {
        this.motor.contexto.imageSmoothingEnabled = false;
        this.motor.contexto.drawImage(this.imagen.elemento, this.objetos.x, this.objetos.y, this.objetos.ancho, this.objetos.alto, this.imagen.posicion.pixeles.x, this.imagen.posicion.pixeles.y, this.imagen.posicion.pixeles.ancho, this.imagen.posicion.pixeles.alto);
    }
}
