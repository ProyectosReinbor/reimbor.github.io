export class Pantalla {
    boton:HTMLImageElement
    constructor() {
        this.boton = document.getElementById("pantallaCompleta") as HTMLImageElement
        this.boton.addEventListener('click', () => this.click())
    }
    click() {
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