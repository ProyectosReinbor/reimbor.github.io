
import { Engine } from "../engine/engine.js"
import { Transform } from "../basic/transform.js"

export const enum Directions {
    left = 'left',
    leftDown = 'leftDown',
    leftUp = 'leftUp',
    up = 'up',
    down = 'down',
    right = 'right',
    rightDown = 'rightDown',
    rightUp = 'rightUp',
}

export const enum Actions {
    still = 'still',
    walk = 'walk',
    spell = 'spell',
    die = 'die'
}

export const objects = [
    6, 6, 6, 6, 6, 6,
    4, 4, 4,
    3,
]

export const indices = [
    Actions.still + Directions.down,
    Actions.walk + Directions.down,
    Actions.spell + Directions.down,
    Actions.still + Directions.leftDown,
    Actions.walk + Directions.leftDown,
    Actions.spell + Directions.leftDown,
    Actions.still + Directions.left,
    Actions.walk + Directions.left,
    Actions.spell + Directions.left,
    Actions.still + Directions.leftUp,
    Actions.walk + Directions.leftUp,
    Actions.spell + Directions.leftUp,
    Actions.still + Directions.up,
    Actions.walk + Directions.up,
    Actions.spell + Directions.up,
    Actions.still + Directions.rightDown,
    Actions.walk + Directions.rightDown,
    Actions.spell + Directions.rightDown,
    Actions.still + Directions.right,
    Actions.walk + Directions.right,
    Actions.spell + Directions.right,
    Actions.still + Directions.rightUp,
    Actions.walk + Directions.rightUp,
    Actions.spell + Directions.rightUp,
]

export type AnimationParameters = {
    index: number
    object: number
    horizontal: number
    vertical: number
    src: string
    canvasPosition: Transform
    visible: boolean
}

export type Motion = {
    speed: number
    moveX: number
    moveY: number
}

export class State {
    engine: Engine
    positionWorld: Transform
    direction: Directions
    action: Actions
    motion: Motion
    animationsParameters: AnimationParameters
    constructor(
        engine: Engine,
        positionWorld: Transform,
    ) {
        this.engine = engine
        this.positionWorld = positionWorld
        this.direction = Directions.down
        this.action = Actions.still
        this.movimiento = {
            velocidad: 6,
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
        if (this.direccion == Direciones.IZQUIERDA) {
            indice = indices.indexOf(`${this.accion}${Direciones.DERECHA}`)
        } else {
            if (this.accion == Acciones.MORIR) {
                indice = indices.indexOf(`${this.accion}${Direciones.DERECHA}`)
            }
        }
        if (this.animaciones.indice == indice) return
        this.animaciones.indice = indice
        this.animaciones.objetos = objetos[indice]
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