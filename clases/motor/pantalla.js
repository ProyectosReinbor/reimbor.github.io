export default class {
    constructor(motor) {
        this.motor = motor;
        this.motor.lienzo.addEventListener('touchstart', (evento) => this.touchstart());
    }
    touchstart(evento) {
        if (this.motor.lienzo.requestFullscreen) {
            this.motor.lienzo.requestFullscreen()
                .then((e) => console.log(e))
                .catch((e) => console.log(e));
        }
    }
}