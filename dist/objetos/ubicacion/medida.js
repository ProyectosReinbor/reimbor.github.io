export class UbicacionMedida {
    constructor(ancho = 0, alto = 0) {
        this.ancho = ancho;
        this.alto = alto;
    }
    mitad() {
        return new UbicacionMedida(this.ancho / 2, this.alto / 2);
    }
}
