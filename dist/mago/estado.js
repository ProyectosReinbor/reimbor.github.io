import { Ubicacion, } from "../objetos/ubicacion/ubicacion.js";
import { UbicacionMundo } from "../objetos/ubicacionMundo.js";
import { MovimientoMundo } from "../objetos/movimientoMundo.js";
import { AnimacionesAnimacion } from "../objetos/animaciones.js";
import { UbicacionCoordenada } from "../objetos/ubicacion/coordenada.js";
import { UbicacionMedida } from "../objetos/ubicacion/medida.js";
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
        this.asignarUbicacionMundo();
        this.movimientoMundo = new MovimientoMundo(this.motor, this.ubicacionMundo, 6);
        this.direccion = "abajo";
        this.accion = "parado";
        this.animacion = {
            nombre: "mago",
            elementos: new Ubicacion(new UbicacionCoordenada(0, 0), new UbicacionMedida(32, 48)),
            animacion: new AnimacionesAnimacion(-1, 6),
        };
    }
    asignarUbicacionMundo() {
        let json = localStorage.getItem('ubicacionMundo');
        if (json == null) {
            this.ubicacionMundo = new UbicacionMundo(this.motor, new UbicacionCoordenada(0, 0), new UbicacionMedida(20, 20));
        }
        else {
            this.ubicacionMundo = JSON.parse(json);
        }
    }
    guardarUbicacionMundo() {
        localStorage.setItem('ubicacionMundo', JSON.stringify(this.ubicacionMundo));
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
