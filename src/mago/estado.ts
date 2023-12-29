
import { Motor } from "../motor/motor.js"
import { Transformar } from "../componentes/transformar.js"
import { NombresImagenes } from "../motor/imagenes.js"

export const enum EstadoDirecciones {
    izquierda = 'izquierda',
    izquierdaAbajo = 'izquierdaAbajo',
    izquierdaArriba = 'izquierdaArriba',
    arriba = 'arriba',
    abajo = 'abajo',
    derecha = 'derecha',
    derechaAbajo = 'derechaAbajo',
    derechaArriba = 'derechaArriba',
}

export const enum EstadoAcciones {
    parado = 'parado',
    caminar = 'caminar',
    hechizo = 'hechizo',
    die = 'die'
}

const indices = [
    EstadoAcciones.parado + EstadoDirecciones.abajo,
    EstadoAcciones.caminar + EstadoDirecciones.abajo,
    EstadoAcciones.hechizo + EstadoDirecciones.abajo,
    EstadoAcciones.parado + EstadoDirecciones.izquierdaAbajo,
    EstadoAcciones.caminar + EstadoDirecciones.izquierdaAbajo,
    EstadoAcciones.hechizo + EstadoDirecciones.izquierdaAbajo,
    EstadoAcciones.parado + EstadoDirecciones.izquierda,
    EstadoAcciones.caminar + EstadoDirecciones.izquierda,
    EstadoAcciones.hechizo + EstadoDirecciones.izquierda,
    EstadoAcciones.parado + EstadoDirecciones.izquierdaArriba,
    EstadoAcciones.caminar + EstadoDirecciones.izquierdaArriba,
    EstadoAcciones.hechizo + EstadoDirecciones.izquierdaArriba,
    EstadoAcciones.parado + EstadoDirecciones.arriba,
    EstadoAcciones.caminar + EstadoDirecciones.arriba,
    EstadoAcciones.hechizo + EstadoDirecciones.arriba,
    EstadoAcciones.parado + EstadoDirecciones.derechaAbajo,
    EstadoAcciones.caminar + EstadoDirecciones.derechaAbajo,
    EstadoAcciones.hechizo + EstadoDirecciones.derechaAbajo,
    EstadoAcciones.parado + EstadoDirecciones.derecha,
    EstadoAcciones.caminar + EstadoDirecciones.derecha,
    EstadoAcciones.hechizo + EstadoDirecciones.derecha,
    EstadoAcciones.parado + EstadoDirecciones.derechaArriba,
    EstadoAcciones.caminar + EstadoDirecciones.derechaArriba,
    EstadoAcciones.hechizo + EstadoDirecciones.derechaArriba,
]

type Animacion = {
    nombre: NombresImagenes
    horizontal: number,
    vertical: number
    elementos: Transformar
    animacion: {
        indice: number
        elementos: number
    }
}

type Movimiento = {
    velocidad: number
    moverX: number
    moverY: number
}

export class Estado {
    motor: Motor
    posicionMundo: Transformar
    direccion: EstadoDirecciones
    accion: EstadoAcciones
    movimiento: Movimiento
    animacion: Animacion
    constructor(
        motor: Motor,
        posicionMundo: Transformar,
    ) {
        this.motor = motor
        this.posicionMundo = posicionMundo
        this.direccion = EstadoDirecciones.abajo
        this.accion = EstadoAcciones.parado
        this.movimiento = {
            velocidad: 6,
            moverX: 0,
            moverY: 0,
        }
        this.animacion = {
            nombre: NombresImagenes.mago,
            horizontal: 6,
            vertical: 24,
            elementos: new Transformar(0, 0, 0, 0),
            animacion: {
                indice: -1,
                elementos: 6,
            }
        }
    }
    animar() {
        let indice = indices.indexOf(`${this.accion}${this.direccion}`)
        if (this.animacion.animacion.indice == indice) return false
        this.animacion.animacion.indice = indice
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