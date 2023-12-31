import { Motor } from "../motor.js"

export class Pantalla {
    boton: HTMLImageElement
    motor: Motor
    constructor(
        motor: Motor,
    ) {
        this.motor = motor
        this.boton = document.getElementById("lienzo") as HTMLImageElement
        this.boton.addEventListener('click', (evento) => this.click(evento))

    }
    click(evento: MouseEvent) {
        const x = this.motor.lienzo.porcentajeAncho(evento.pageX)
        const y = this.motor.lienzo.porcentajeAlto(evento.pageY)
        if (document.fullscreenElement) {
            this.boton.src = "imagenes/pantalla/abrir.svg"
            if (document.exitFullscreen) {
                document.exitFullscreen()
            }
        } else if (document.documentElement.requestFullscreen) {
            this.boton.src = "imagenes/pantalla/salir.svg"
            document.documentElement.requestFullscreen()
        }
    }
}