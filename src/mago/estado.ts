
import { Motor } from "../motor/motor.js"
import { Ubicacion, UbicacionCoordenada, UbicacionMedida } from "../objetos/ubicacion.js"
import { NombresImagenes } from "../motor/imagenes.js"
import { UbicacionMundo } from "../objetos/ubicacionMundo.js"
import { MovimientoMundo } from "../objetos/movimientoMundo.js"
import { AnimacionesAnimacion } from "../objetos/animaciones.js"

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
    elementos: Ubicacion
    animacion: AnimacionesAnimacion
}


export class Estado {
    motor: Motor
    ubicacionMundo: UbicacionMundo
    direccion: EstadoDirecciones
    accion: EstadoAcciones
    animacion: Animacion
    movimientoMundo: MovimientoMundo
    constructor(
        motor: Motor,
    ) {
        this.motor = motor
        this.ubicacionMundo = new UbicacionMundo(
            this.motor,
            this.obtenerPosicionMundo(),
        )
        this.movimientoMundo = new MovimientoMundo(
            this.motor,
            this.ubicacionMundo,
            6,
        )
        this.direccion = EstadoDirecciones.abajo
        this.accion = EstadoAcciones.parado
        this.animacion = {
            nombre: NombresImagenes.mago,
            elementos: new Ubicacion(
                new UbicacionCoordenada(0, 0),
                new UbicacionMedida(32, 48)
            ),
            animacion: new AnimacionesAnimacion(-1, 6),
        }
    }
    private obtenerPosicionMundo(): Ubicacion {
        let json = localStorage.getItem('posicionMundo')
        if (json == null)
            return new Ubicacion(
                new UbicacionCoordenada(0, 0),
                new UbicacionMedida(20, 20)
            )
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