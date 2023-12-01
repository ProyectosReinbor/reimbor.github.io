const enum Direciones {
    ARRIBA,
    ABAJO,
    IZQUIERDA,
    DERECHA,
}
const enum Acciones {
    QUIETO,
    CAMINAR,
    ATACAR,
}
type Animacion = {
    indice:number
    objetos:number
    reflejar?:boolean
}
type Animaciones = {
    QUIETO:{
        ABAJO:Animacion
        DERECHA:Animacion
        IZQUIERDA:Animacion
        ARRIBA:Animacion
    }
    CAMINAR:{
        ABAJO:Animacion
        DERECHA:Animacion
        IZQUIERDA:Animacion
        ARRIBA:Animacion
    }
    ATAQUE:{
        ABAJO:Animacion
        DERECHA:Animacion
        IZQUIERDA:Animacion
        ARRIBA:Animacion
    }
    MUERTE:{
        DERECHA:Animacion
        IZQUIERDA:Animacion
    }
    HORIZONTAL:number
    VERTICAL:number
    SRC:string
} 
export class Estados {
    direccion:Direciones
    accion:Acciones
    animaciones:Animaciones
    constructor() {
        this.direccion = Direciones.ABAJO
        this.accion = Acciones.QUIETO
        this.animaciones = {
            QUIETO: {
                ABAJO: { indice: 0, objetos: 6 },
                DERECHA: { indice: 1, objetos: 6 },
                IZQUIERDA: { indice: 1, objetos: 6, reflejar: true },
                ARRIBA: { indice: 2, objetos: 6 },
            },
            CAMINAR: {
                ABAJO: { indice: 3, objetos: 6 },
                DERECHA: { indice: 4, objetos: 6 },
                IZQUIERDA: { indice: 4, objetos: 6, reflejar: true },
                ARRIBA: { indice: 5, objetos: 6 },
            },
            ATAQUE: {
                ABAJO: { indice: 6, objetos: 4 },
                DERECHA: { indice: 7, objetos: 4 },
                IZQUIERDA: { indice: 7, objetos: 4, reflejar: true },
                ARRIBA: { indice: 8, objetos: 4 },
            },
            MUERTE: {
                DERECHA: { indice: 9, objetos: 3 },
                IZQUIERDA: { indice: 9, objetos: 3, reflejar: true },
            },
            HORIZONTAL: 6,
            VERTICAL: 10,
            SRC: "imagenes/jugador.png",
        }
    }
    animacion() {
        
        return this.animaciones.QUIETO.ABAJO
    }
}