export class ControlCuadros {
    actualizar: () => void
    private ultimoTiempo: number
    ultimoTiempoCuadro: number
    private cuadrosPorSegundo: number
    private tiempoCuadro: number
    pausar: boolean
    constructor(actualizar: () => void) {
        this.actualizar = actualizar
        this.ultimoTiempo = 0
        this.ultimoTiempoCuadro = 0
        this.cuadrosPorSegundo = 24
        this.tiempoCuadro = 1000 / this.cuadrosPorSegundo
        this.pausar = false
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
        if (this.pausar == false) {
            this.actualizar()
        }
        requestAnimationFrame((tiempo) => this.cuadro(tiempo))
    }
}