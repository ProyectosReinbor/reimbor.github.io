import { Animations } from "../basic/animations.js"
import { Engine } from "../engine/engine.js"
import { State } from "./state.js"
export class MagicianAnimations extends Animations {
    state: State
    constructor(
        engine: Engine,
        state: State,
    ) {
        const { src, horizontal, vertical, posicionLienzo } = state.animations
        super(
            engine,
            src,
            posicionLienzo,
            horizontal,
            vertical,
        )
        this.state = state
    }
    actualizar() {
        if (!this.estados.animaciones.visible) return
        this.posicionLienzo = this.estados.animaciones.posicionLienzo
        this.reproducir(
            this.estados.animaciones.indice,
            this.estados.animaciones.objetos,
        )
        this.siguienteCuadro()
        this.dibujar()
    }
}