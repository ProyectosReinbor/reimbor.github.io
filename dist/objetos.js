import { Motor } from './motor.js';
export class Objetos {
    constructor() {
        this.motor = new Motor(this);
        console.log(this.motor);
    }
}
