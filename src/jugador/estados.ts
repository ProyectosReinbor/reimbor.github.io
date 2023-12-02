
import { Motor } from "../motor/motor.js"
import { Transformar } from "../basicos/transformar.js"

export const enum Direciones {
    ARRIBA = 'ARRIBA',
    ABAJO = 'ABAJO',
    IZQUIERDA = 'IZQUIERDA',
    DERECHA = 'DERECHA',
}

export const enum Acciones {
    QUIETO = 'QUIETO',
    CAMINAR = 'CAMINAR',
    ATACAR = 'ATACAR',
}

const enum Indices {
    QUIETOABAJO,
    QUIETODERECHA,
    QUIETOARRIBA,
    CAMINARABAJO,
    CAMINARDERECHA,
    CAMINARARRIBA,
    ATACARABAJO,
    ATACARDERECHA,
    ATACARARRIBA,
    MUERTEDERECHA,
}

const objetos = [6, 6, 6, 6, 6, 6, 4, 4, 4, 3]

type DatosAnimaciones = {
    INDICE: Indices
    OBJETOS: number[]
    HORIZONTAL: number
    VERTICAL: number
    SRC: string
}

export class Estados {
    motor: Motor
    posicionMundo: Transformar
    direccion: Direciones
    accion: Acciones
    velocidad: number
    animaciones: DatosAnimaciones
    constructor(
        motor: Motor,
        posicionMundo: Transformar,
        velocidad: number,
    ) {
        this.motor = motor
        this.posicionMundo = posicionMundo
        this.direccion = Direciones.ABAJO
        this.accion = Acciones.QUIETO
        this.velocidad = velocidad
        this.animaciones = {
            INDICE: Indices.QUIETOABAJO,
            OBJETOS: objetos,
            HORIZONTAL: 6,
            VERTICAL: 10,
            SRC: "imagenes/jugador",
        }
    }
}