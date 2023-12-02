import { Transformar } from "../basicos/transformar.js";
export class Estados {
    constructor(motor) {
        this.motor = motor;
        this.direccion = "ABAJO";
        this.accion = "QUIETO";
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
            ATACAR: {
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
        };
        this.posicionMundo = new Transformar(this.motor, 0, 0, 1, 1);
        this.velocidad = 2;
    }
    animacion() {
        return this.animaciones[this.accion][this.direccion];
    }
}
