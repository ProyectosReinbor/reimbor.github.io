import { Transformar } from "../basicos/transformar.js";
export const objetos = [
    6, 6, 6, 6, 6, 6,
    4, 4, 4,
    3,
];
export const indices = [
    "PARARABAJO",
    "PARARDERECHA",
    "PARARARRIBA",
    "CAMINARABAJO",
    "CAMINARDERECHA",
    "CAMINARARRIBA",
    "ATACARABAJO",
    "ATACARDERECHA",
    "ATACARARRIBA",
    "MORIRDERECHA",
];
export class Estados {
    constructor(motor, posicionMundo) {
        this.motor = motor;
        this.posicionMundo = posicionMundo;
        this.direccion = "ABAJO";
        this.accion = "PARAR";
        this.movimiento = {
            velocidad: 6,
            moverX: 0,
            moverY: 0,
        };
        this.animaciones = {
            indice: -1,
            objetos: -1,
            horizontal: 6,
            vertical: 10,
            src: "imagenes/jugador.png",
            posicionLienzo: new Transformar(this.motor),
            visible: false,
            escalaHorizontal: 1
        };
    }
    animacion() {
        let indice = indices.indexOf(`${this.accion}${this.direccion}`);
        if (this.direccion == "IZQUIERDA") {
            this.animaciones.escalaHorizontal = -1;
            indice = indices.indexOf(`${this.accion}${"DERECHA"}`);
        }
        else {
            this.animaciones.escalaHorizontal = 1;
            if (this.accion == "MORIR") {
                indice = indices.indexOf(`${this.accion}${"DERECHA"}`);
            }
        }
        if (this.animaciones.indice == indice)
            return;
        this.animaciones.indice = indice;
        this.animaciones.objetos = objetos[indice];
    }
    moverse() {
        const segundos = this.motor.ultimoTiempoEntreCuadro / 1000;
        const velocidad = this.movimiento.velocidad * segundos;
        if (this.movimiento.moverX == 0 &&
            this.movimiento.moverY == 0)
            return;
        this.posicionMundo.x += velocidad * this.movimiento.moverX;
        this.posicionMundo.y += velocidad * this.movimiento.moverY;
        const posicionLienzo = this.motor.camara.posicionLienzo(this.posicionMundo);
        if (posicionLienzo != false) {
            this.animaciones.posicionLienzo = posicionLienzo;
            this.animaciones.visible = true;
        }
        else {
            this.animaciones.visible = false;
        }
    }
    actualizar() {
        this.moverse();
        this.animacion();
    }
}
