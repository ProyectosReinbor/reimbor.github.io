import { Lienzo } from './lienzo.js';
import { Pantalla } from './pantalla/pantalla.js';
import { Camara } from "./camara.js";
import { Imagenes } from './imagenes.js';
import { Objetos } from './objetos.js';
import { ControlCuadros } from './controlCuadros.js';
import { UbicacionCoordenada } from '../objetos/ubicacion/coordenada.js';
import { UbicacionMedida } from '../objetos/ubicacion/medida.js';
export class Motor {
    constructor() {
        this.imagenes = new Imagenes();
        this.lienzo = new Lienzo(this);
        this.camara = new Camara(this, new UbicacionCoordenada(0, 0), new UbicacionMedida(100, 100));
        this.objetos = new Objetos(this);
        this.pantalla = new Pantalla(this);
        this.controlCuadros = new ControlCuadros(() => this.actualizar());
    }
    actualizar() {
        this.lienzo.actualizar();
        this.objetos.actualizar();
    }
}
