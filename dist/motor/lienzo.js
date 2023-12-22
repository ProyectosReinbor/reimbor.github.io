export class Lienzo {
    constructor(motor) {
        this.motor = motor;
        this.etiqueta = document.getElementById('lienzo');
        this.aspecto();
        window.addEventListener('resize', () => {
            this.aspecto();
        });
    }
    aspecto() {
        const relacion = 1280 / 720;
        this.alto = window.innerHeight;
        this.ancho = this.alto * relacion;
        this.etiqueta.width = window.innerWidth;
        this.etiqueta.height = window.innerHeight;
        this.unPorcientoAncho = this.ancho / 100;
        this.unPorcientoAlto = this.alto / 100;
    }
    porcentajeAncho(valor) {
        return valor / this.unPorcientoAncho;
    }
    pixelesAncho(valor) {
        return valor * this.unPorcientoAncho;
    }
    porcentajeAlto(valor) {
        return valor / this.unPorcientoAlto;
    }
    pixelesAlto(valor) {
        return valor * this.unPorcientoAlto;
    }
}
