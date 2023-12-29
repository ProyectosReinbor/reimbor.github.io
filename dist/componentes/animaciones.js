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
        this.elementosImagen.elementosVertical(this.animacion.indice);
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
        this.elementosImagen.elementosHorizontal(this.indice);
    }
    dibujar(posicionLienzo) {
        this.elementosImagen.dibujar(posicionLienzo);
    }
}
