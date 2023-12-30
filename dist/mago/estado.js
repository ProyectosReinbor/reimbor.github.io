import { Transformar } from "../componentes/transformar.js";
import { PosicionMundo } from "../componentes/posicionMundo.js";
import { MovimientoMundo } from "../componentes/movimientoMundo.js";
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
    constructor(motor) {
        this.motor = motor;
        this.posicionMundo = new PosicionMundo(this.motor, this.obtenerPosicionMundo());
        this.movimientoMundo = new MovimientoMundo(this.motor, this.posicionMundo, 6);
        this.direccion = "abajo";
        this.accion = "parado";
        this.animacion = {
            nombre: "mago",
            horizontal: 6,
            vertical: 24,
            elementos: new Transformar(0, 0, 0, 0),
            animacion: {
                indice: -1,
                elementos: 6,
            }
        };
    }
    obtenerPosicionMundo() {
        let json = localStorage.getItem('posicionMundo');
        if (json == null)
            return new Transformar(0, 0, 20, 20);
        return JSON.parse(json);
    }
    animar() {
        let indice = indices.indexOf(`${this.accion}${this.direccion}`);
        if (this.animacion.animacion.indice == indice)
            return false;
        this.animacion.animacion.indice = indice;
    }
    mover() {
        this.movimientoMundo.mover();
    }
}
