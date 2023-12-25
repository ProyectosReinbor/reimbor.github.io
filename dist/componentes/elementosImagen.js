export class ElementosImagen {
    constructor(imagen, elementos, horizontal, vertical) {
        this.imagen = imagen;
        this.elementos = elementos;
        this.horizontal = horizontal;
        this.vertical = vertical;
    }
    asignarImage(nombre) {
        this.imagen.asignarImagen(nombre);
        if (this.imagen.elemento == undefined)
            return;
        this.asignarHorizontal(this.imagen.elemento.width);
        this.asignarVertical(this.imagen.elemento.height);
    }
    asignarHorizontal(anchoElemento) {
        if (this.horizontal == 0)
            this.horizontal = anchoElemento / this.elementos.ancho;
        else
            this.elementos.ancho = anchoElemento / this.horizontal;
    }
    asignarVertical(altoElemento) {
        if (this.vertical == 0)
            this.vertical = altoElemento / this.elementos.alto;
        else
            this.elementos.alto = altoElemento / this.vertical;
    }
    actualizar(posicionLienzo) {
        this.imagen.dibujar(this.elementos, posicionLienzo);
    }
}
