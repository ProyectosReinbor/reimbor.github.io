import {Objetos} from "../objetos.js"
import {Porcentajes} from './porcentajes.js'
export class Motor {
    objetos: Objetos
    ultimoTiempo: number
    fps:number
    tiempoEntreCuadro:number
    ultimoTiempoEntreCuadro:number
    altoLienzo:number
    anchoLienzo:number
    lienzo:{width:number,height:number}
    porcentajes:Porcentajes
    constructor(objetos:Objetos) {
        this.objetos = objetos
        this.ultimoTiempo = 0
        this.fps = 30
        this.tiempoEntreCuadro = 1000 / this.fps
        this.ultimoTiempoEntreCuadro = 0
        this.altoLienzo = 0
        this.anchoLienzo = 0
        this.lienzo = {width:0, height:0};
        window.addEventListener('load', () => this.iniciar())
        window.addEventListener('resize', () => {
          this.aspecto()
        })
    }
    aspecto() {
        const relacion = 1280 / 720
        this.altoLienzo = window.innerHeight
        this.anchoLienzo = this.altoLienzo * relacion
        this.lienzo.width = window.innerWidth
        this.lienzo.height = this.altoLienzo
        this.porcentajes = new Porcentajes(this)
    }
}