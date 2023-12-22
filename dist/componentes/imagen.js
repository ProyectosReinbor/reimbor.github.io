export class Imagen {
    constructor(motor, nombre, posicionLienzo) {
        this.motor = motor;
        this.posicionLienzo = posicionLienzo;
        this.motor.imagenes.obtener(nombre, (imagen) => this.asignarImagen(imagen));
    }
    asignarImagen(imagen) {
        this.imagen = imagen;
    }
    actualizar() {
        this.dibujar();
    }
    dibujar() {
        if (this.imagen == undefined)
            return;
        this.motor.contexto.imageSmoothingEnabled = false;
        const { x, y, ancho, alto } = this.posicionLienzo.pixeles();
        this.motor.contexto.drawImage(this.imagen, x, y, ancho, alto);
    }
}
