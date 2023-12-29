export class Imagen {
    constructor(motor, nombre) {
        this.motor = motor;
        this.elemento = this.motor.imagenes.coleccion[nombre];
    }
    medidas() {
        return {
            ancho: this.elemento.width,
            alto: this.elemento.height,
        };
    }
    dibujarElemento(elementoImagen, posicionLienzo) {
        this.motor.lienzo.contexto.imageSmoothingEnabled = false;
        this.motor.lienzo.contexto.drawImage(this.elemento, elementoImagen.x, elementoImagen.y, elementoImagen.ancho, elementoImagen.alto, posicionLienzo.x, posicionLienzo.y, posicionLienzo.ancho, posicionLienzo.alto);
    }
    dibujar(posicionLienzo) {
        this.motor.lienzo.contexto.imageSmoothingEnabled = false;
        this.motor.lienzo.contexto.drawImage(this.elemento, posicionLienzo.x, posicionLienzo.y, posicionLienzo.ancho, posicionLienzo.alto);
    }
}
