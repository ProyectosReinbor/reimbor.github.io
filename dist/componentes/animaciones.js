export class Animaciones {
    constructor(motor, elementosImagen) {
        this.motor = motor;
        this.elementosImagen = elementosImagen;
        this.contador = 0;
        this.indice = 0;
        this.retraso = 0;
        this.animacion = { indice: -1, elementos: 0 };
    }
    reproducir({ indice, elementos }) {
        if (indice == this.animacion.indice)
            return;
        this.animacion.indice = indice;
        this.animacion.elementos = elementos;
        this.indice = 0;
        this.elementosImagen.elementos.y = this.animacion.indice * this.elementosImagen.elementos.alto;
        this.retraso = 1000 / this.animacion.elementos;
    }
    elemento() {
        this.contador += this.motor.controlCuadros.ultimoTiempoCuadro;
        if (this.contador < this.retraso)
            return;
        this.contador = 0;
        this.indice++;
        if (this.indice >= this.animacion.elementos)
            this.indice = 0;
        this.elementosImagen.elementos.x = this.indice * this.elementosImagen.elementos.ancho;
    }
    actualizar(posicionLienzo) {
        this.elementosImagen.actualizar(posicionLienzo);
    }
}
