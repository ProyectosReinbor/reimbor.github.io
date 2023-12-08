import { Jugador } from './jugador/jugador.js';
import { Motor } from './motor/motor.js';
export class Objetos {
    constructor() {
        const despuesActualizar = () => {
            this.actualizar();
        };
        this.motor = new Motor(despuesActualizar);
        this.jugador = new Jugador(this.motor);
    }
    actualizar() {
        this.jugador.actualizar();
    }
}
