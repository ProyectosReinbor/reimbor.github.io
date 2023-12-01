import {Motor} from './motor.js' 
export class Objetos {
    motor:Motor
    constructor(){
        this.motor = new Motor(this)
        console.log(this.motor)
    }
}