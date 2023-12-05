import { Porcentajes } from './porcentajes.js';
import { Pantalla } from './pantalla.js';
import { Camara } from "./camara.js";
import { Transformar } from "../basicos/transformar.js";
export class Motor {
    constructor(objetos) {
        this.objetos = objetos;
        this.ultimoTiempo = 0;
        this.fps = 24;
        this.tiempoEntreCuadro = 1000 / this.fps;
        this.ultimoTiempoEntreCuadro = 0;
        this.altoLienzo = 0;
        this.anchoLienzo = 0;
        this.lienzo = document.getElementById('lienzo');
        this.contexto = this.lienzo.getContext('2d');
        this.porcentajes = new Porcentajes(this);
        this.pantalla = new Pantalla();
        this.camara = new Camara(this, new Transformar(this));
        window.addEventListener('load', () => this.iniciar());
        window.addEventListener('resize', () => {
            this.aspecto();
        });
    }
    aspecto() {
        const relacion = 1280 / 720;
        this.altoLienzo = window.innerHeight;
        this.anchoLienzo = this.altoLienzo * relacion;
        this.lienzo.width = window.innerWidth;
        this.lienzo.height = this.altoLienzo;
        this.porcentajes = new Porcentajes(this);
        const dividorAncho = this.anchoLienzo / 100;
        const ancho = this.lienzo.width / dividorAncho;
        this.camara = new Camara(this, new Transformar(this, 0, 0, ancho, 100));
    }
    iniciar() {
        this.aspecto();
        this.objetos.iniciar();
        requestAnimationFrame((tiempo) => this.actualizar(tiempo));
    }
    actualizar(tiempo) {
        const tiempoEntreCuadro = tiempo - this.ultimoTiempo;
        if (tiempoEntreCuadro < this.tiempoEntreCuadro) {
            requestAnimationFrame((tiempo) => this.actualizar(tiempo));
            return;
        }
        this.ultimoTiempoEntreCuadro = tiempoEntreCuadro;
        this.ultimoTiempo = tiempo;
        this.contexto.clearRect(0, 0, this.lienzo.width, this.lienzo.height);
        this.objetos.actualizar();
        requestAnimationFrame((tiempo) => this.actualizar(tiempo));
    }
}
