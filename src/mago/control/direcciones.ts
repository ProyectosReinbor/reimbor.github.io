import { Transformar } from "../../componentes/transformar.js"
import { Estado, EstadoAcciones, EstadoDirecciones } from "../estado.js"
import { Fondo } from "./fondo.js"

export class Direcciones {
  estado: Estado
  fondo: Fondo
  izquierdaArriba: Transformar
  arriba: Transformar
  derechaArriba: Transformar
  izquierda: Transformar
  centro: Transformar
  derecha: Transformar
  izquierdaAbajo: Transformar
  abajo: Transformar
  derechaAbajo: Transformar
  constructor(
    estado: Estado,
    fondo: Fondo,
  ) {
    this.estado = estado
    this.fondo = fondo
    this.izquierdaArriba = this.asignarDireccion("izquierdaArriba") as Transformar
    this.arriba = this.asignarDireccion("arriba") as Transformar
    this.derechaArriba = this.asignarDireccion("derechaArriba") as Transformar
    this.izquierda = this.asignarDireccion("izquierda") as Transformar
    this.centro = this.asignarDireccion("centro") as Transformar
    this.derecha = this.asignarDireccion("derecha") as Transformar
    this.izquierdaAbajo = this.asignarDireccion("izquierdaAbajo") as Transformar
    this.abajo = this.asignarDireccion("abajo") as Transformar
    this.derechaAbajo = this.asignarDireccion("derechaAbajo") as Transformar
  }
  asignarDireccion(
    nombreDireccion: string,
  ) {
    const nombres = [
      ["izquierdaArriba", "arriba", "derechaArriba"],
      ["izquierda", "centro", "derecha"],
      ["izquierdaAbajo", "abajo", "derechaAbajo"],
    ]
    const posicionDefecto = new Transformar(
      this.fondo.posicionInterfaz.posicion.x,
      this.fondo.posicionInterfaz.posicion.y,
      this.fondo.posicionInterfaz.posicion.ancho / 3,
      this.fondo.posicionInterfaz.posicion.alto / 3
    )
    for (let y = 0; y < nombres.length; y++) {
      for (let x = 0; x < nombres[y].length; x++) {
        const nombre = nombres[y][x]
        if (nombreDireccion != nombre) continue
        const espacioX = posicionDefecto.ancho * x
        const espacioY = posicionDefecto.alto * y
        return new Transformar(
          posicionDefecto.x + espacioX,
          posicionDefecto.y + espacioY,
          posicionDefecto.ancho,
          posicionDefecto.alto,
        )
      }
    }
  }
  accion(
    x: number,
    y: number,
  ) {
    if (this.centro.adentro(x, y, 0, 0)) {
      this.estado.accion = EstadoAcciones.parado
      this.estado.movimientoMundo.moverX = 0
      this.estado.movimientoMundo.moverY = 0
    } else {
      this.estado.accion = EstadoAcciones.caminar
    }
  }
  movimiento(
    x: number,
    y: number,
  ) {
    if (this.izquierdaArriba.adentro(x, y, 0, 0)) {
      this.estado.direccion = EstadoDirecciones.izquierdaArriba
      this.estado.movimientoMundo.moverX = -1
      this.estado.movimientoMundo.moverY = -1
    } else if (this.arriba.adentro(x, y, 0, 0)) {
      this.estado.direccion = EstadoDirecciones.arriba
      this.estado.movimientoMundo.moverX = 0
      this.estado.movimientoMundo.moverY = -1
    } else if (this.derechaArriba.adentro(x, y, 0, 0)) {
      this.estado.direccion = EstadoDirecciones.derechaArriba
      this.estado.movimientoMundo.moverX = 1
      this.estado.movimientoMundo.moverY = -1
    } else if (this.izquierda.adentro(x, y, 0, 0)) {
      this.estado.direccion = EstadoDirecciones.izquierda
      this.estado.movimientoMundo.moverX = -1
      this.estado.movimientoMundo.moverY = 0
    } else if (this.derecha.adentro(x, y, 0, 0)) {
      this.estado.direccion = EstadoDirecciones.derecha
      this.estado.movimientoMundo.moverX = 1
      this.estado.movimientoMundo.moverY = 0
    } else if (this.izquierdaAbajo.adentro(x, y, 0, 0)) {
      this.estado.direccion = EstadoDirecciones.izquierdaAbajo
      this.estado.movimientoMundo.moverX = -1
      this.estado.movimientoMundo.moverY = 1
    } else if (this.abajo.adentro(x, y, 0, 0)) {
      this.estado.direccion = EstadoDirecciones.abajo
      this.estado.movimientoMundo.moverX = 0
      this.estado.movimientoMundo.moverY = 1
    } else if (this.derechaAbajo.adentro(x, y, 0, 0)) {
      this.estado.direccion = EstadoDirecciones.derechaAbajo
      this.estado.movimientoMundo.moverX = 1
      this.estado.movimientoMundo.moverY = 1
    }
  }
  quieto() {
    this.estado.accion = EstadoAcciones.parado
    this.estado.movimientoMundo.moverX = 0
    this.estado.movimientoMundo.moverY = 0
  }
}