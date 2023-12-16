export class Porcentajes {
    constructor(motor) {
        this.motor = motor;
    }
    unPorcentajeAnchoLienzo() {
        return this.motor.anchoLienzo / 100;
    }
    porcentajeAnchoLienzo(valor) {
        return valor / this.unPorcentajeAnchoLienzo();
    }
    pixelesPorcentajeAnchoLienzo(valor) {
        return valor * this.unPorcentajeAnchoLienzo();
    }
    unPorcentajeAltoLienzo() {
        return this.motor.altoLienzo / 100;
    }
    porcentajeAltoLienzo(valor) {
        return valor / this.unPorcentajeAltoLienzo();
    }
    pixelesPorcentajeAltoLienzo(valor) {
        return valor * this.unPorcentajeAltoLienzo();
    }
}
