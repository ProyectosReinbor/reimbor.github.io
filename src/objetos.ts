import {Jugador} from './jugador/jugador.js'
import {Motor} from './motor/motor.js' 
export class Objetos {
    motor:Motor
    jugador:Jugador
    constructor(){
        this.motor = new Motor(this)
        console.log(this.motor)
    }
    iniciar() {
        this.jugador = new Jugador(this.motor)
      }
      dibujar() {
        this.jugador.dibujar()
      }
}