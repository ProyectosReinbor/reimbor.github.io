export class ElementosImagen {
    constructor(imagen, elementos, horizontal, vertical) {
        this.imagen = imagen;
        this.elementos = elementos;
        this.horizontal = horizontal;
        this.vertical = vertical;
    }
    asignarImagen() {
        const medidas = this.imagen.medidas();
        this.asignarHorizontal(medidas.ancho);
        this.asignarVertical(medidas.alto);
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
    dibujar(posicionLienzo) {
        this.imagen.dibujarElemento(this.elementos, posicionLienzo);
    }
    elementosVertical(indice) {
        this.elementos.y = indice * this.elementos.alto;
    }
    elementosHorizontal(indice) {
        this.elementos.x = indice * this.elementos.ancho;
    }
}
