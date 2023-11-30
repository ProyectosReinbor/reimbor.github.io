export default class {
    constructor() {
        this.direcciones = Object.freeze({
            ARRIBA: 'ARRIBA',
            ABAJO: 'ABAJO',
            IZQUIERDA: 'IZQUIERDA',
            DERECHA: 'DERECHA',
        });
        this.direccion = this.direcciones.ABAJO;
        this.acciones = Object.freeze({
            QUIETO: 'QUIETO',
            CAMINAR: 'CAMINAR',
            ATACAR: 'ATACAR',
        });
        this.accion = this.acciones.QUIETO;
        this.animaciones = Object.freeze({
            QUIETO: Object.freeze({
                ABAJO: { indice: 0, objetos: 6 },
                DERECHA: { indice: 1, objetos: 6 },
                IZQUIERDA: { indice: 1, objetos: 6, reflejar: true },
                ARRIBA: { indice: 2, objetos: 6 },
            }),
            CAMINAR: Object.freeze({
                ABAJO: { indice: 3, objetos: 6 },
                DERECHA: { indice: 4, objetos: 6 },
                IZQUIERDA: { indice: 4, objetos: 6, reflejar: true },
                ARRIBA: { indice: 5, objetos: 6 },
            }),
            ATAQUE: Object.freeze({
                ABAJO: { indice: 6, objetos: 4 },
                DERECHA: { indice: 7, objetos: 4 },
                IZQUIERDA: { indice: 7, objetos: 4, reflejar: true },
                ARRIBA: { indice: 8, objetos: 4 },
            }),
            MUERTE: Object.freeze({
                DERECHA: { indice: 9, objetos: 3 },
                IZQUIERDA: { indice: 9, objetos: 3, reflejar: true },
            }),
            HORIZONTAL: 6,
            VERTICAL: 10,
            SRC: "imagenes/jugador.png",
        });
    }
    get animacion() {
        return this.animaciones[this.accion][this.direccion];
    }
}