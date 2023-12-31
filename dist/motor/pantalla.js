export class Pantalla {
    constructor(motor) {
        this.motor = motor;
        this.boton = document.getElementById("lienzo");
        this.boton.addEventListener('click', (evento) => this.click(evento));
    }
    click(evento) {
        const x = this.motor.lienzo.porcentajeAncho(evento.pageX);
        const y = this.motor.lienzo.porcentajeAlto(evento.pageY);
        console.log(x, y);
        if (document.fullscreenElement) {
            this.boton.src = "imagenes/pantalla/abrir.svg";
            if (document.exitFullscreen) {
                document.exitFullscreen();
            }
        }
        else if (document.documentElement.requestFullscreen) {
            this.boton.src = "imagenes/pantalla/salir.svg";
            document.documentElement.requestFullscreen();
        }
    }
}
