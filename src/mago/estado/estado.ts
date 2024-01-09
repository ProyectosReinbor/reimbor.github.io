
import Motor from "../../motor/motor.js"
import Ubicacion from "../../objetos/ubicacion/ubicacion.js"
import { MotorImagenesNombres } from "../../motor/imagenes/nombres.js"
import Mundo from "../../objetos/ubicacion/mundo.js"
import MovimientoMundo from "../../objetos/movimientoMundo.js"
import ObjetosElementosAnimacion from "../../objetos/elementos/animacion.js"
import Coordenada from "../../objetos/ubicacion/coordenada.js"
import Medida from "../../objetos/ubicacion/medida.js"
import { MagoEstadoDirecciones } from "../control/direcciones.js"
import { MagoEstadoAcciones } from "./acciones.js"
import { MagoEstadoIndices } from "./indices.js"

type Animacion = {
    nombre: MotorImagenesNombres
    elementos: Ubicacion
    animacion: ObjetosElementosAnimacion
}


export class Estado {
    motor: Motor
    ubicacionMundo!: Mundo
    direccion: EstadoDirecciones
    accion: EstadoAcciones
    animacion: Animacion
    movimientoMundo: MovimientoMundo
    constructor(
        motor: Motor,
    ) {
        this.motor = motor
        this.asignarUbicacionMundo()
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
    asignarUbicacionMundo() {
        let json = localStorage.getItem('ubicacionMundo')
        if (json == null) {
            this.ubicacionMundo = new UbicacionMundo(
                this.motor,
                new UbicacionCoordenada(0, 0),
                new UbicacionMedida(20, 20)
            )
        } else {
            this.ubicacionMundo = JSON.parse(json)
        }
    }
    guardarUbicacionMundo() {
        localStorage.setItem('ubicacionMundo', JSON.stringify(this.ubicacionMundo))
    }
    animar() {
        let indice = indices.indexOf(`${this.accion}${this.direccion}`)
        if (this.animacion.animacion.indice == indice) return false
        this.animacion.animacion.indice = indice
    }
    mover() {
        this.movimientoMundo.mover()
    }
    actualizar() {
        this.mover()
        this.animar()
    }
}