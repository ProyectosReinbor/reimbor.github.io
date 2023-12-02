import { Motor } from "../motor/motor.js";
import { Estados } from "./estados.js";
export class ControlAnimaciones {
    motor: Motor
    estados: Estados
    constructor(
        motor: Motor,
        estados: Estados,
    ) {
        this.motor = motor
        this.estados = estados
    }
}