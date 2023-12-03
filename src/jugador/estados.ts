
import { Motor } from "../motor/motor.js"
import { Transformar } from "../basicos/transformar.js"

export const enum Direciones {
    ARRIBA = 'ARRIBA',
    ABAJO = 'ABAJO',
    IZQUIERDA = 'IZQUIERDA',
    DERECHA = 'DERECHA',
}

export const enum Acciones {
    PARAR = 'PARAR',
    CAMINAR = 'CAMINAR',
    ATACAR = 'ATACAR',
    MORIR = 'MORIR'
}

export const objetos = [
    6, 6, 6, 6, 6, 6,
    4, 4, 4,
    3,
]

export const indices = [
    "PARARABAJO",
    "PARARDERECHA",
    "PARARARRIBA",
    "CAMINARABAJO",
    "CAMINARDERECHA",
    "CAMINARARRIBA",
    "ATACARABAJO",
    "ATACARDERECHA",
    "ATACARARRIBA",
    "MORIRDERECHA",
]

export type EstadosAnimaciones = {
    indice: number
    objetos: number
    horizontal: number
    vertical: number
    src: string
}

export type Movimiento = {
    velocidad: number
    moverX: number
    moverY: number
}

export class Estados {
    motor: Motor
    posicionMundo: Transformar
    direccion: Direciones
    accion: Acciones
    movimiento: Movimiento
    animaciones: EstadosAnimaciones
    constructor(
        motor: Motor,
        posicionMundo: Transformar,
        velocidad: number,
    ) {
        this.motor = motor
        this.posicionMundo = posicionMundo
        this.direccion = Direciones.ABAJO
        this.accion = Acciones.PARAR
        this.movimiento = {
            velocidad: 3,
            moverX: 0,
            moverY: 0,
        }
        this.animaciones = {
            indice: -1,
            objetos: -1,
            horizontal: 6,
            vertical: 10,
            src: "imagenes/jugador.png",
        }
    }
    animacion() {
        let indice = indices.indexOf(`${this.accion}${this.direccion}`)
        if (this.accion == Acciones.MORIR) {
            indice = indices.indexOf(`${this.accion}${Direciones.DERECHA}`)
        }
        else if (this.direccion == Direciones.IZQUIERDA) {
            indice = indices.indexOf(`${this.accion}${Direciones.DERECHA}`)
        }
        if (this.animaciones.indice == indice) return false
        this.animaciones.indice = indice
        this.animaciones.objetos = objetos[indice]
        return true
    }
    moverse() {
        if (this.accion != Acciones.CAMINAR) return
        const segundos = this.motor.ultimoTiempoEntreCuadro / 1000
        const velocidad = this.movimiento.velocidad * segundos
        this.posicionMundo.x += velocidad * this.movimiento.moverX
        this.posicionMundo.y += velocidad * this.movimiento.moverY
    }
    actualizar() {
        this.moverse()
        this.animacion()
    }
}