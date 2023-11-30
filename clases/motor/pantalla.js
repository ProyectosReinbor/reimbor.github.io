export default class {
    constructor(motor) {
        this.motor = motor;
        this.boton = document.getElementById("pantallaCompleta");
        this.boton.addEventListener('click', () => this.click());
    }
    click() {
        if (document.fullscreenElement) {
            this.boton.src = "imagenes/pantalla/abrir.svg";
            if (document.exitFullscreen) {
                document.exitFullscreen();
            }
        } else if (document.documentElement.requestFullscreen) {
            this.boton.src = "imagenes/pantalla/salir.svg";
            document.documentElement.requestFullscreen();
        }
    }
}