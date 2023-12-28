import { Transformar } from "../../componentes/transformar.js";
import { Direcciones } from "./direcciones.js";
import { Flechas } from "./flechas.js";
import { Fondo } from "./fondo.js";
export class Control {
    constructor(motor, estado) {
        this.motor = motor;
        this.estado = estado;
        this.fondo = new Fondo(this.motor);
        this.flechas = new Flechas(this.motor, this.fondo);
        this.controlTouch = new Transformar(-10, 50, 60, 60);
        this.direcciones = new Direcciones(this.fondo);
        this.puedeMoverse = false;
        this.quieto();
        this.motor.lienzo.etiqueta.addEventListener('touchstart', (evento) => this.empezarMoverse(evento));
        this.motor.lienzo.etiqueta.addEventListener('touchmove', (evento) => this.moverse(evento));
        this.motor.lienzo.etiqueta.addEventListener('touchend', () => this.quieto());
    }
    empezarMoverse(evento) {
        for (const touch of evento.changedTouches) {
            const x = this.motor.lienzo.porcentajeAncho(touch.pageX);
            const y = this.motor.lienzo.porcentajeAlto(touch.pageY);
            if (!this.fondo.posicionInterfaz.adentro(x, y, 0, 0))
                continue;
            this.puedeMoverse = true;
            return;
        }
    }
    moverse(evento) {
        if (!this.puedeMoverse)
            return;
        for (const touch of evento.changedTouches) {
            const x = this.motor.lienzo.porcentajeAncho(touch.pageX);
            const y = this.motor.lienzo.porcentajeAncho(touch.pageY);
            if (this.controlTouch.adentro(x, y) == false)
                continue;
            const controlFlechas = this.flechas.posicionLienzo;
            controlFlechas.x = x - (controlFlechas.ancho / 2);
            controlFlechas.y = y - (controlFlechas.alto / 2);
            const movimiento = this.estado.movimiento;
            if (this.direcciones.centro.adentro(x, y)) {
                this.estado.accion = Acciones.parado;
                movimiento.moverX = 0;
                movimiento.moverY = 0;
            }
            else {
                this.estado.accion = Acciones.caminar;
            }
            if (this.direcciones.izquierda.adentro(x, y)) {
                this.estado.direccion = Direcciones.izquierda;
                movimiento.moverX = -1;
                movimiento.moverY = 0;
            }
            else if (this.direcciones.izquierdaAbajo.adentro(x, y)) {
                this.estado.direccion = Direcciones.izquierdaAbajo;
                movimiento.moverX = -1;
                movimiento.moverY = 1;
            }
            else if (this.direcciones.izquierdaArriba.adentro(x, y)) {
                this.estado.direccion = Direcciones.izquierdaArriba;
                movimiento.moverX = -1;
                movimiento.moverY = -1;
            }
            else if (this.direcciones.arriba.adentro(x, y)) {
                this.estado.direccion = Direcciones.arriba;
                movimiento.moverX = 0;
                movimiento.moverY = -1;
            }
            else if (this.direcciones.abajo.adentro(x, y)) {
                this.estado.direccion = Direcciones.abajo;
                movimiento.moverX = 0;
                movimiento.moverY = 1;
            }
            else if (this.direcciones.derecha.adentro(x, y)) {
                this.estado.direccion = Direcciones.derecha;
                movimiento.moverX = 1;
                movimiento.moverY = 0;
            }
            else if (this.direcciones.derechaAbajo.adentro(x, y)) {
                this.estado.direccion = Direcciones.derechaAbajo;
                movimiento.moverX = 1;
                movimiento.moverY = 1;
            }
            else if (this.direcciones.derechaArriba.adentro(x, y)) {
                this.estado.direccion = Direcciones.derechaArriba;
                movimiento.moverX = 1;
                movimiento.moverY = -1;
            }
            return;
        }
    }
    quieto() {
        this.estado.accion = Acciones.parado;
        this.estado.movimiento.moverX = 0;
        this.estado.movimiento.moverY = 0;
        this.puedeMoverse = false;
        const fondo = this.fondo.posicionInterfaz.posicion;
        const flechas = this.flechas.posicionInterfaz.posicion;
        const fondoXFinal = fondo.x + (fondo.ancho / 2);
        const fondoYFinal = fondo.y + (fondo.alto / 2);
        flechas.x = fondoXFinal - (flechas.ancho / 2);
        flechas.y = fondoYFinal - (flechas.alto / 2);
    }
    actualizar() {
        this.fondo.dibujar();
        this.flechas.dibujar();
    }
}
