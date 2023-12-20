import { Transformar } from "../basico/transformar.js";
import { Estado } from "./estado.js";
import { Control } from "./control.js";
import { AnimacionesMago } from './animaciones.js';
import { AtraerCamara } from './atraerCamara.js';
export class Mago {
    constructor(motor) {
        this.motor = motor;
        this.estado = new Estado(this.motor, new Transformar(motor, 0, 0, 20, 20));
        this.control = new Control(this.motor, this.estado);
        this.animaciones = new AnimacionesMago(this.motor, this.estado);
        this.atraerCamara = new AtraerCamara(this.motor, this.estado);
    }
    actualizar() {
        this.control.actualizar();
        this.estado.actualizar();
        this.animaciones.actualizar();
        this.atraerCamara.actualizar();
    }
}
