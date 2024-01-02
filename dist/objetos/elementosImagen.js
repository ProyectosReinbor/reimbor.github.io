export class ElementosImagen {
    constructor(motor, imagen, elementos) {
        this.motor = motor;
        this.imagen = imagen;
        this.elementos = elementos;
    }
    horizontal(indice) {
        this.elementos.posicion.x = this.elementos.medida.ancho * indice;
    }
    vertical(indice) {
        this.elementos.posicion.y = this.elementos.medida.alto * indice;
    }
    dibujar(pixeles) {
        this.motor.lienzo.contexto.imageSmoothingEnabled = false;
        this.motor.lienzo.contexto.drawImage(this.imagen.imagen, this.elementos.posicion.x, this.elementos.posicion.y, this.elementos.medida.ancho, this.elementos.medida.alto, pixeles.posicion.x, pixeles.posicion.y, pixeles.medida.ancho, pixeles.medida.alto);
    }
}
