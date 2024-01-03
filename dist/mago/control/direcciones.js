import { Ubicacion } from "../../objetos/ubicacion/ubicacion.js";
import { UbicacionCoordenada } from "../../objetos/ubicacion/coordenada.js";
import { UbicacionMedida } from "../../objetos/ubicacion/medida.js";
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
        const ubicacionDefecto = new Ubicacion(new UbicacionCoordenada(this.fondo.coordenada.x, this.fondo.coordenada.y), new UbicacionMedida(this.fondo.medida.ancho / 3, this.fondo.medida.alto / 3));
        for (let y = 0; y < nombres.length; y++) {
            for (let x = 0; x < nombres[y].length; x++) {
                const nombre = nombres[y][x];
                if (nombreDireccion != nombre)
                    continue;
                const espacioX = ubicacionDefecto.medida.ancho * x;
                const espacioY = ubicacionDefecto.medida.alto * y;
                return new Ubicacion(new UbicacionCoordenada(ubicacionDefecto.coordenada.x + espacioX, ubicacionDefecto.coordenada.y + espacioY), new UbicacionMedida(ubicacionDefecto.medida.ancho, ubicacionDefecto.medida.alto));
            }
        }
    }
    accion(ubicacion) {
        if (this.centro.adentro(ubicacion)) {
            this.estado.accion = "parado";
            this.estado.movimientoMundo.moverX = 0;
            this.estado.movimientoMundo.moverY = 0;
        }
        else {
            this.estado.accion = "caminar";
        }
    }
    movimiento(ubicacion) {
        if (this.izquierdaArriba.adentro(ubicacion)) {
            this.estado.direccion = "izquierdaArriba";
            this.estado.movimientoMundo.moverX = -1;
            this.estado.movimientoMundo.moverY = -1;
        }
        else if (this.arriba.adentro(ubicacion)) {
            this.estado.direccion = "arriba";
            this.estado.movimientoMundo.moverX = 0;
            this.estado.movimientoMundo.moverY = -1;
        }
        else if (this.derechaArriba.adentro(ubicacion)) {
            this.estado.direccion = "derechaArriba";
            this.estado.movimientoMundo.moverX = 1;
            this.estado.movimientoMundo.moverY = -1;
        }
        else if (this.izquierda.adentro(ubicacion)) {
            this.estado.direccion = "izquierda";
            this.estado.movimientoMundo.moverX = -1;
            this.estado.movimientoMundo.moverY = 0;
        }
        else if (this.derecha.adentro(ubicacion)) {
            this.estado.direccion = "derecha";
            this.estado.movimientoMundo.moverX = 1;
            this.estado.movimientoMundo.moverY = 0;
        }
        else if (this.izquierdaAbajo.adentro(ubicacion)) {
            this.estado.direccion = "izquierdaAbajo";
            this.estado.movimientoMundo.moverX = -1;
            this.estado.movimientoMundo.moverY = 1;
        }
        else if (this.abajo.adentro(ubicacion)) {
            this.estado.direccion = "abajo";
            this.estado.movimientoMundo.moverX = 0;
            this.estado.movimientoMundo.moverY = 1;
        }
        else if (this.derechaAbajo.adentro(ubicacion)) {
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
