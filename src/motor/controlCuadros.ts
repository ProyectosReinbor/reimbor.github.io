export class ControlCuadros {
    actualizar: () => void
    ultimoTiempo: number
    ultimoTiempoCuadro: number
    cuadrosPorSegundo: number
    tiempoCuadro: number
    constructor(actualizar: () => void) {
        this.actualizar = actualizar
        this.ultimoTiempo = 0
        this.ultimoTiempoCuadro = 0
        this.cuadrosPorSegundo = 24
        this.tiempoCuadro = 1000 / this.cuadrosPorSegundo
        requestAnimationFrame((tiempo) => this.cuadro(tiempo))
    }
    cuadro(tiempo: number) {
        const contador = tiempo - this.ultimoTiempo
        if (contador < this.tiempoCuadro) {
            requestAnimationFrame((tiempo) => this.cuadro(tiempo))
            return
        }
        this.ultimoTiempoCuadro = contador
        this.ultimoTiempo = tiempo
        this.actualizar()
        requestAnimationFrame((tiempo) => this.cuadro(tiempo))
    }
}