import { Lienzo } from './lienzo.js'
import { Pantalla } from './pantalla/pantalla.js'
import { Camara } from "./camara.js"
import { Imagenes } from './imagenes.js'
import { Objetos } from './objetos.js'
import { ControlCuadros } from './controlCuadros.js'
import Coordenada from '../objetos/ubicacion/coordenada.js'
import Medida from '../objetos/ubicacion/medida.js'

export class Motor {
  imagenes: Imagenes
  lienzo: Lienzo
  camara: Camara
  objetos: Objetos
  pantalla: Pantalla
  controlCuadros: ControlCuadros
  constructor() {
    this.imagenes = new Imagenes()
    this.lienzo = new Lienzo(this)
    this.camara = new Camara(
      this,
      new Coordenada(0, 0),
      new Medida(100, 100),
    )
    this.objetos = new Objetos(this)
    this.pantalla = new Pantalla(this)
    this.controlCuadros = new ControlCuadros(() => this.actualizar())
  }
  actualizar() {
    this.lienzo.actualizar()
    this.objetos.actualizar()
  }
}