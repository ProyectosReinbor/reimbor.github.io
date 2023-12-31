import { Lienzo } from './lienzo.js';
import { Pantalla } from './pantalla.js';
import { Camara } from "./camara.js";
import { Transformar } from "../componentes/transformar.js";
import { Imagenes } from './imagenes.js';
import { Objetos } from './objetos.js';
import { ControlCuadros } from './controlCuadros.js';
export class Motor {
    constructor() {
        this.imagenes = new Imagenes();
        this.lienzo = new Lienzo(this);
        this.camara = new Camara(this, new Transformar(0, 0, 0, 0));
        this.objetos = new Objetos(this);
        this.pantalla = new Pantalla(this);
        this.controlCuadros = new ControlCuadros(() => this.actualizar());
    }
    actualizar() {
        this.lienzo.actualizar();
        this.objetos.actualizar();
    }
}
