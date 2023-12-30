import { Transformar } from "../../componentes/transformar.js";
export class Direcciones {
    constructor(estado, fondo) {
        this.estado = estado;
        this.fondo = fondo;
        this.izquierdaArriba = this.asignarDireccion("izquierdaArriba");
        this.arriba = this.asignarDireccion("arriba");
        this.derechaArriba = this.asignarDireccion("derechaArriba");
        this.izquierda = this.asignarDireccion("izquierda");
        this.centro = this.asignarDireccion("centro");
        this.derecha = this.asignarDireccion("derecha");
        this.izquierdaAbajo = this.asignarDireccion("izquierdaAbajo");
        this.abajo = this.asignarDireccion("abajo");
        this.derechaAbajo = this.asignarDireccion("derechaAbajo");
    }
    asignarDireccion(nombreDireccion) {
        const nombres = [
            ["izquierdaArriba", "arriba", "derechaArriba"],
            ["izquierda", "centro", "derecha"],
            ["izquierdaAbajo", "abajo", "derechaAbajo"],
        ];
        const posicionDefecto = new Transformar(this.fondo.posicionInterfaz.posicion.x, this.fondo.posicionInterfaz.posicion.y, this.fondo.posicionInterfaz.posicion.ancho / 3, this.fondo.posicionInterfaz.posicion.alto / 3);
        for (let y = 0; y < nombres.length; y++) {
            for (let x = 0; x < nombres[y].length; x++) {
                const nombre = nombres[y][x];
                if (nombreDireccion != nombre)
                    continue;
                const espacioX = posicionDefecto.ancho * x;
                const espacioY = posicionDefecto.alto * y;
                return new Transformar(posicionDefecto.x + espacioX, posicionDefecto.y + espacioY, posicionDefecto.ancho, posicionDefecto.alto);
            }
        }
    }
    accion(x, y) {
        if (this.centro.adentro(x, y, 0, 0)) {
            this.estado.accion = "parado";
            this.estado.movimientoMundo.moverX = 0;
            this.estado.movimientoMundo.moverY = 0;
        }
        else {
            this.estado.accion = "caminar";
        }
    }
    movimiento(x, y) {
        if (this.izquierdaArriba.adentro(x, y, 0, 0)) {
            this.estado.direccion = "izquierdaArriba";
            this.estado.movimientoMundo.moverX = -1;
            this.estado.movimientoMundo.moverY = -1;
        }
        else if (this.arriba.adentro(x, y, 0, 0)) {
            this.estado.direccion = "arriba";
            this.estado.movimientoMundo.moverX = 0;
            this.estado.movimientoMundo.moverY = -1;
        }
        else if (this.derechaArriba.adentro(x, y, 0, 0)) {
            this.estado.direccion = "derechaArriba";
            this.estado.movimientoMundo.moverX = 1;
            this.estado.movimientoMundo.moverY = -1;
        }
        else if (this.izquierda.adentro(x, y, 0, 0)) {
            this.estado.direccion = "izquierda";
            this.estado.movimientoMundo.moverX = -1;
            this.estado.movimientoMundo.moverY = 0;
        }
        else if (this.derecha.adentro(x, y, 0, 0)) {
            this.estado.direccion = "derecha";
            this.estado.movimientoMundo.moverX = 1;
            this.estado.movimientoMundo.moverY = 0;
        }
        else if (this.izquierdaAbajo.adentro(x, y, 0, 0)) {
            this.estado.direccion = "izquierdaAbajo";
            this.estado.movimientoMundo.moverX = -1;
            this.estado.movimientoMundo.moverY = 1;
        }
        else if (this.abajo.adentro(x, y, 0, 0)) {
            this.estado.direccion = "abajo";
            this.estado.movimientoMundo.moverX = 0;
            this.estado.movimientoMundo.moverY = 1;
        }
        else if (this.derechaAbajo.adentro(x, y, 0, 0)) {
            this.estado.direccion = "derechaAbajo";
            this.estado.movimientoMundo.moverX = 1;
            this.estado.movimientoMundo.moverY = 1;
        }
    }
    quieto() {
        this.estado.accion = "parado";
        this.estado.movimientoMundo.moverX = 0;
        this.estado.movimientoMundo.moverY = 0;
    }
}
