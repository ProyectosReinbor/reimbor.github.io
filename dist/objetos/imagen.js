export class Imagen {
    constructor(motor, nombre) {
        this.motor = motor;
        this.imagen = this.motor.imagenes.coleccion[nombre];
    }
    dibujar(pixeles) {
        this.motor.lienzo.contexto.imageSmoothingEnabled = false;
        this.motor.lienzo.contexto.drawImage(this.imagen, pixeles.coordenada.x, pixeles.coordenada.y, pixeles.medida.ancho, pixeles.medida.alto);
    }
    actualizar(pixeles) {
        this.dibujar(pixeles);
    }
}
