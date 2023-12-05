
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
    posicionLienzo: Transformar
    visible: boolean
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
            posicionLienzo: new Transformar(this.motor),
            visible: false,
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
        if (this.animaciones.indice == indice) return
        this.animaciones.indice = indice
        this.animaciones.objetos = objetos[indice]
        console.log(indice);
    }
    moverse() {
        const segundos = this.motor.ultimoTiempoEntreCuadro / 1000
        const velocidad = this.movimiento.velocidad * segundos
        if (this.movimiento.moverX == 0 &&
            this.movimiento.moverY == 0) return
        this.posicionMundo.x += velocidad * this.movimiento.moverX
        this.posicionMundo.y += velocidad * this.movimiento.moverY
        const posicionLienzo = this.motor.camara.posicionLienzo(this.posicionMundo)
        if (posicionLienzo != false) {
            this.animaciones.posicionLienzo = posicionLienzo
            this.animaciones.visible = true
        } else {
            this.animaciones.visible = false
        }
    }
    actualizar() {
        this.moverse()
        this.animacion()
    }
}