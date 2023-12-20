import { Transformar } from "../basico/transformar.js";
const indices = [
    "parado" + "abajo",
    "caminar" + "abajo",
    "hechizo" + "abajo",
    "parado" + "izquierdaAbajo",
    "caminar" + "izquierdaAbajo",
    "hechizo" + "izquierdaAbajo",
    "parado" + "izquierda",
    "caminar" + "izquierda",
    "hechizo" + "izquierda",
    "parado" + "izquierdaArriba",
    "caminar" + "izquierdaArriba",
    "hechizo" + "izquierdaArriba",
    "parado" + "arriba",
    "caminar" + "arriba",
    "hechizo" + "arriba",
    "parado" + "derechaAbajo",
    "caminar" + "derechaAbajo",
    "hechizo" + "derechaAbajo",
    "parado" + "derecha",
    "caminar" + "derecha",
    "hechizo" + "derecha",
    "parado" + "derechaArriba",
    "caminar" + "derechaArriba",
    "hechizo" + "derechaArriba",
];
export class Estado {
    constructor(motor, posicionMundo) {
        this.motor = motor;
        this.posicionMundo = posicionMundo;
        this.direccion = "abajo";
        this.accion = "parado";
        this.movimiento = {
            velocidad: 6,
            moverX: 0,
            moverY: 0,
        };
        this.parametrosAnimacion = {
            indice: -1,
            objetos: 6,
            horizontal: 6,
            vertical: 24,
            src: "imagenes/mago.png",
            posicionLienzo: new Transformar(this.motor),
            visible: false,
        };
    }
    animacion() {
        let indice = indices.indexOf(`${this.accion}${this.direccion}`);
        if (this.parametrosAnimacion.indice == indice)
            return;
        this.parametrosAnimacion.indice = indice;
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
            this.parametrosAnimacion.posicionLienzo = posicionLienzo;
            this.parametrosAnimacion.visible = true;
        }
        else {
            this.parametrosAnimacion.visible = false;
        }
    }
    actualizar() {
        this.moverse();
        this.animacion();
    }
}
