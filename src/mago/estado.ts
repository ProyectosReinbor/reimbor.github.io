
import { Motor } from "../motor/motor.js"
import { Transformar } from "../basico/transformar.js"

export const enum Direcciones {
    izquierda = 'izquierda',
    izquierdaAbajo = 'izquierdaAbajo',
    izquierdaArriba = 'izquierdaArriba',
    arriba = 'arriba',
    abajo = 'abajo',
    derecha = 'derecha',
    derechaAbajo = 'derechaAbajo',
    derechaArriba = 'derechaArriba',
}

export const enum Acciones {
    parado = 'parado',
    caminar = 'caminar',
    hechizo = 'hechizo',
    die = 'die'
}

export const indices = [
    Acciones.parado + Direcciones.abajo,
    Acciones.caminar + Direcciones.abajo,
    Acciones.hechizo + Direcciones.abajo,
    Acciones.parado + Direcciones.izquierdaAbajo,
    Acciones.caminar + Direcciones.izquierdaAbajo,
    Acciones.hechizo + Direcciones.izquierdaAbajo,
    Acciones.parado + Direcciones.izquierda,
    Acciones.caminar + Direcciones.izquierda,
    Acciones.hechizo + Direcciones.izquierda,
    Acciones.parado + Direcciones.izquierdaArriba,
    Acciones.caminar + Direcciones.izquierdaArriba,
    Acciones.hechizo + Direcciones.izquierdaArriba,
    Acciones.parado + Direcciones.arriba,
    Acciones.caminar + Direcciones.arriba,
    Acciones.hechizo + Direcciones.arriba,
    Acciones.parado + Direcciones.derechaAbajo,
    Acciones.caminar + Direcciones.derechaAbajo,
    Acciones.hechizo + Direcciones.derechaAbajo,
    Acciones.parado + Direcciones.derecha,
    Acciones.caminar + Direcciones.derecha,
    Acciones.hechizo + Direcciones.derecha,
    Acciones.parado + Direcciones.derechaArriba,
    Acciones.caminar + Direcciones.derechaArriba,
    Acciones.hechizo + Direcciones.derechaArriba,
]

export type ParametrosAnimacion = {
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

export class Estado {
    motor: Motor
    posicionMundo: Transformar
    direccion: Direcciones
    accion: Acciones
    movimiento: Movimiento
    parametrosAnimacion: ParametrosAnimacion
    constructor(
        motor: Motor,
        posicionMundo: Transformar,
    ) {
        this.motor = motor
        this.posicionMundo = posicionMundo
        this.direccion = Direcciones.abajo
        this.accion = Acciones.parado
        this.movimiento = {
            velocidad: 6,
            moverX: 0,
            moverY: 0,
        }
        this.parametrosAnimacion = {
            indice: -1,
            objetos: 6,
            horizontal: 6,
            vertical: 24,
            src: "imagenes/mago.png",
            posicionLienzo: new Transformar(this.motor),
            visible: false,
        }
    }
    animacion() {
        let indice = indices.indexOf(`${this.accion}${this.direccion}`)
        if (this.parametrosAnimacion.indice == indice) return
        this.parametrosAnimacion.indice = indice
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
            this.parametrosAnimacion.posicionLienzo = posicionLienzo
            this.parametrosAnimacion.visible = true
        } else {
            this.parametrosAnimacion.visible = false
        }
    }
    actualizar() {
        this.moverse()
        this.animacion()
    }
}