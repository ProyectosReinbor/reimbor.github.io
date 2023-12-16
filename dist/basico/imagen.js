export class Imagen {
    constructor(motor, src, posicionLienzo) {
        this.motor = motor;
        this.src = src;
        this.puedeDibujar = false;
        this.posicionLienzo = posicionLienzo;
        this.imagen = new Image();
        this.imagen.addEventListener("load", () => this.cargoImagen());
        this.imagen.src = this.src;
    }
    cargoImagen() {
        this.puedeDibujar = true;
    }
    actualizar() {
        this.dibujar();
    }
    dibujar() {
        if (!this.puedeDibujar)
            return;
        this.motor.contexto.imageSmoothingEnabled = false;
        const { x, y, ancho, alto } = this.posicionLienzo.pixeles();
        this.motor.contexto.drawImage(this.imagen, x, y, ancho, alto);
    }
}
