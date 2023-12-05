import { Cuadro } from "../basicos/cuadro.js";
import { Imagen } from "../basicos/imagen.js";
import { Transformar } from "../basicos/transformar.js";
export class Mando {
    constructor(motor, estados) {
        this.motor = motor;
        this.estados = estados;
        this.mandoFondo = new Imagen(this.motor, "imagenes/mando/fondo.png", new Transformar(this.motor, 8, 63, 30, 30));
        this.mandoFlechas = new Imagen(this.motor, "imagenes/mando/flechas.png", new Transformar(this.motor, 0, 0, 15, 15));
        this.mandoTouch = new Transformar(this.motor, -10, 50, 60, 60);
        this.mandoArriba = new Cuadro(this.motor, -10, 50, 60, 20);
        this.puedeMoverse = false;
        this.quieto();
        this.motor.lienzo.addEventListener('touchstart', (evento) => this.empezarMoverse(evento));
        this.motor.lienzo.addEventListener('touchmove', (evento) => this.moverse(evento));
        this.motor.lienzo.addEventListener('touchend', () => this.quieto());
    }
    empezarMoverse(evento) {
        for (const touch of evento.changedTouches) {
            const x = this.motor.porcentajes.porcentajeAncho(touch.pageX);
            const y = this.motor.porcentajes.porcentajeAlto(touch.pageY);
            if (!this.mandoFondo.posicionLienzo.adentro(x, y))
                continue;
            this.puedeMoverse = true;
            return;
        }
    }
    moverse(evento) {
        if (!this.puedeMoverse)
            return;
        let touchAdentroMando = false;
        for (const touch of evento.changedTouches) {
            const x = this.motor.porcentajes.porcentajeAncho(touch.pageX);
            const y = this.motor.porcentajes.porcentajeAlto(touch.pageY);
            if (this.mandoTouch.adentro(x, y) == false)
                continue;
            touchAdentroMando = true;
            this.mandoFlechas.posicionLienzo.x = x - (this.mandoFlechas.posicionLienzo.ancho / 2);
            this.mandoFlechas.posicionLienzo.y = y - (this.mandoFlechas.posicionLienzo.alto / 2);
            const mitadX = this.mandoFondo.posicionLienzo.x + (this.mandoFondo.posicionLienzo.ancho / 2);
            const mitadY = this.mandoFondo.posicionLienzo.y + (this.mandoFondo.posicionLienzo.alto / 2);
            let moverX = 0;
            let moverY = 0;
            if (y < mitadY) {
                this.estados.direccion = "ARRIBA";
                moverY = -1;
            }
            else if (y > mitadY) {
                this.estados.direccion = "ABAJO";
                moverY = 1;
            }
            if (x < mitadX) {
                this.estados.direccion = "IZQUIERDA";
                moverX = -1;
            }
            else if (x > mitadX) {
                this.estados.direccion = "DERECHA";
                moverX = 1;
            }
            if (!moverX && !moverY) {
                this.estados.accion = "PARAR";
            }
            else {
                this.estados.accion = "CAMINAR";
            }
            this.estados.movimiento.moverX = moverX;
            this.estados.movimiento.moverY = moverY;
        }
        if (!touchAdentroMando)
            this.quieto();
    }
    quieto() {
        this.estados.accion = "PARAR";
        this.puedeMoverse = false;
        this.mandoFlechas.posicionLienzo.x = this.mandoFondo.posicionLienzo.x + (this.mandoFlechas.posicionLienzo.ancho / 2);
        this.mandoFlechas.posicionLienzo.y = this.mandoFondo.posicionLienzo.y + (this.mandoFlechas.posicionLienzo.alto / 2);
    }
    actualizar() {
        this.mandoFondo.actualizar();
        this.mandoFlechas.actualizar();
        this.mandoArriba.actualizar();
    }
}
