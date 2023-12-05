export class Porcentajes {
    constructor(motor) {
        this.motor = motor;
    }
    porcentajeAncho(valor) {
        const unPorcentaje = this.motor.anchoLienzo / 100;
        return valor / unPorcentaje;
    }
    pixelesAncho(valor) {
        const unPorcentaje = this.motor.anchoLienzo / 100;
        return valor * unPorcentaje;
    }
    porcentajeAlto(valor) {
        const unPorcentaje = this.motor.altoLienzo / 100;
        return valor / unPorcentaje;
    }
    pixelesAlto(valor) {
        const unPorcentaje = this.motor.altoLienzo / 100;
        return valor * unPorcentaje;
    }
}
