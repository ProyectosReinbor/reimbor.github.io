
import { Motor } from "../motor/motor.js"
import { Transformar } from "../componentes/transformar.js"
import { NombresImagenes } from "../motor/imagenes.js"

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

const indices = [
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

type Animacion = {
    nombre: NombresImagenes
    horizontal: number,
    vertical: number
    indice: number
    elementos: number
}

type Movimiento = {
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
    animacion: Animacion
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
        this.animacion = {
            nombre: NombresImagenes.mago,
            horizontal: 6,
            vertical: 24,
            indice: -1,
            elementos: 6,
        }
    }
    animar() {
        let indice = indices.indexOf(`${this.accion}${this.direccion}`)
        if (this.animacion.indice == indice) return false
        this.animacion.indice = indice
    }
    moverse() {
        const segundos = this.motor.controlCuadros.ultimoTiempoCuadro / 1000
        const velocidad = this.movimiento.velocidad * segundos
        if (
            this.movimiento.moverX == 0 &&
            this.movimiento.moverY == 0
        ) return false
        this.posicionMundo.x += velocidad * this.movimiento.moverX
        this.posicionMundo.y += velocidad * this.movimiento.moverY
    }
    actualizar() {
        this.moverse()
        this.animar()
    }
}