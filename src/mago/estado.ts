
import { Motor } from "../motor/motor.js"
import { Transformar } from "../componentes/transformar.js"
import { NombresImagenes } from "../motor/imagenes.js"
import { PosicionMundo } from "../componentes/posicionMundo.js"
import { MovimientoMundo } from "../componentes/movimientoMundo.js"

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


export class Estado {
    motor: Motor
    posicionMundo: PosicionMundo
    direccion: EstadoDirecciones
    accion: EstadoAcciones
    animacion: Animacion
    movimientoMundo: MovimientoMundo
    constructor(
        motor: Motor,
    ) {
        this.motor = motor
        this.posicionMundo = new PosicionMundo(
            this.motor,
            this.obtenerPosicionMundo(),
        )
        this.movimientoMundo = new MovimientoMundo(
            this.motor,
            this.posicionMundo,
            6,
        )
        this.direccion = EstadoDirecciones.abajo
        this.accion = EstadoAcciones.parado
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
    private obtenerPosicionMundo(): Transformar {
        let json = localStorage.getItem('posicionMundo')
        if (json == null) return new Transformar(0, 0, 20, 20)
        // console.log(JSON.parse(json))
        return JSON.parse(json)
    }
    animar() {
        let indice = indices.indexOf(`${this.accion}${this.direccion}`)
        if (this.animacion.animacion.indice == indice) return false
        this.animacion.animacion.indice = indice
    }
    mover() {
        this.movimientoMundo.mover()
    }
}