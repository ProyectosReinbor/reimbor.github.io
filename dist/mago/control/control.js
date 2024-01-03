import { Ubicacion } from "../../objetos/ubicacion/ubicacion.js";
import { Direcciones } from "./direcciones.js";
import { Flechas } from "./flechas.js";
import { Fondo } from "./fondo.js";
import { UbicacionCoordenada } from "../../objetos/ubicacion/coordenada.js";
import { UbicacionMedida } from "../../objetos/ubicacion/medida.js";
export class Control {
    constructor(motor, estado) {
        this.motor = motor;
        this.estado = estado;
        this.fondo = new Fondo(this.motor);
        this.flechas = new Flechas(this.motor, this.fondo);
        this.touch = new Ubicacion(new UbicacionCoordenada(-10, 50), new UbicacionMedida(60, 60));
        this.direcciones = new Direcciones(this.estado, this.fondo);
        this.puedeMoverse = false;
        this.quieto();
        this.motor.lienzo.etiqueta.addEventListener('touchstart', (evento) => this.empezarMoverse(evento));
        this.motor.lienzo.etiqueta.addEventListener('touchmove', (evento) => this.moverse(evento));
        this.motor.lienzo.etiqueta.addEventListener('touchend', () => this.quieto());
    }
    empezarMoverse(evento) {
        for (const touch of evento.changedTouches) {
            const ubicacionTouch = new Ubicacion(new UbicacionCoordenada(this.motor.lienzo.porcentajeAncho(touch.pageX), this.motor.lienzo.porcentajeAlto(touch.pageY)), new UbicacionMedida(0, 0));
            if (this.fondo.adentro(ubicacionTouch) == false)
                continue;
            this.puedeMoverse = true;
            return;
        }
    }
    moverse(evento) {
        if (this.puedeMoverse == false)
            return;
        for (const touch of evento.changedTouches) {
            const ubicacionTouch = new Ubicacion(new UbicacionCoordenada(this.motor.lienzo.porcentajeAncho(touch.pageX), this.motor.lienzo.porcentajeAlto(touch.pageY)), new UbicacionMedida(0, 0));
            if (this.touch.adentro(ubicacionTouch) == false)
                continue;
            this.flechas.touch(ubicacionTouch.coordenada);
            this.direcciones.accion(ubicacionTouch);
            this.direcciones.movimiento(ubicacionTouch);
            return;
        }
    }
    quieto() {
        this.puedeMoverse = false;
        this.direcciones.quieto();
        this.flechas.quieto();
    }
    actualizar() {
        this.fondo.dibujar();
        this.flechas.dibujar();
    }
}
