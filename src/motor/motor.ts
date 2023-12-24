import { Lienzo } from './lienzo.js'
import { Pantalla } from './pantalla.js'
import { Camara } from "./camara.js"
import { Transformar } from "../componentes/transformar.js"
import { Imagenes } from './imagenes.js'
import { Objetos } from './objetos.js'

export class Motor {
  pantalla: Pantalla
  imagenes: Imagenes
  lienzo: Lienzo
  camara: Camara
  objetos: Objetos
  constructor() {
    this.imagenes = new Imagenes()
    this.lienzo = new Lienzo(this)
    this.camara = new Camara(this, new Transformar)
    this.objetos = new Objetos(this)
    this.pantalla = new Pantalla()
  }
  actualizar() {
    this.lienzo.actualizar()
    this.objetos.actualizar()
  }
}