import { Ubicacion } from "../../objetos/ubicacion/ubicacion.js"
import { UbicacionCoordenada } from "../../objetos/ubicacion/coordenada.js"
import { Estado, EstadoAcciones, EstadoDirecciones } from "../estado.js"
import { Fondo } from "./fondo.js"
import { UbicacionMedida } from "../../objetos/ubicacion/medida.js"

export class Direcciones {
  estado: Estado
  fondo: Fondo
  izquierdaArriba: Ubicacion
  arriba: Ubicacion
  derechaArriba: Ubicacion
  izquierda: Ubicacion
  centro: Ubicacion
  derecha: Ubicacion
  izquierdaAbajo: Ubicacion
  abajo: Ubicacion
  derechaAbajo: Ubicacion
  constructor(
    estado: Estado,
    fondo: Fondo,
  ) {
    this.estado = estado
    this.fondo = fondo
    this.izquierdaArriba = this.asignarDireccion("izquierdaArriba") as Ubicacion
    this.arriba = this.asignarDireccion("arriba") as Ubicacion
    this.derechaArriba = this.asignarDireccion("derechaArriba") as Ubicacion
    this.izquierda = this.asignarDireccion("izquierda") as Ubicacion
    this.centro = this.asignarDireccion("centro") as Ubicacion
    this.derecha = this.asignarDireccion("derecha") as Ubicacion
    this.izquierdaAbajo = this.asignarDireccion("izquierdaAbajo") as Ubicacion
    this.abajo = this.asignarDireccion("abajo") as Ubicacion
    this.derechaAbajo = this.asignarDireccion("derechaAbajo") as Ubicacion
  }
  asignarDireccion(
    nombreDireccion: string,
  ) {
    const nombres = [
      ["izquierdaArriba", "arriba", "derechaArriba"],
      ["izquierda", "centro", "derecha"],
      ["izquierdaAbajo", "abajo", "derechaAbajo"],
    ]
    const ubicacionDefecto = new Ubicacion(
      new UbicacionCoordenada(
        this.fondo.coordenada.x,
        this.fondo.coordenada.y,
      ),
      new UbicacionMedida(
        this.fondo.medida.ancho / 3,
        this.fondo.medida.alto / 3,
      ),
    )
    for (let y = 0; y < nombres.length; y++) {
      for (let x = 0; x < nombres[y].length; x++) {
        const nombre = nombres[y][x]
        if (nombreDireccion != nombre) continue
        const espacioX = ubicacionDefecto.medida.ancho * x
        const espacioY = ubicacionDefecto.medida.alto * y
        return new Ubicacion(
          new UbicacionCoordenada(
            ubicacionDefecto.coordenada.x + espacioX,
            ubicacionDefecto.coordenada.y + espacioY,
          ),
          new UbicacionMedida(
            ubicacionDefecto.medida.ancho,
            ubicacionDefecto.medida.alto,
          ),
        )
      }
    }
  }
  accion(
    ubicacion: Ubicacion
  ) {
    if (this.centro.adentro(ubicacion)) {
      this.estado.accion = EstadoAcciones.parado
      this.estado.movimientoMundo.moverX = 0
      this.estado.movimientoMundo.moverY = 0
    } else {
      this.estado.accion = EstadoAcciones.caminar
    }
  }
  movimiento(
    ubicacion: Ubicacion
  ) {
    if (this.izquierdaArriba.adentro(ubicacion)) {
      this.estado.direccion = EstadoDirecciones.izquierdaArriba
      this.estado.movimientoMundo.moverX = -1
      this.estado.movimientoMundo.moverY = -1
    } else if (this.arriba.adentro(ubicacion)) {
      this.estado.direccion = EstadoDirecciones.arriba
      this.estado.movimientoMundo.moverX = 0
      this.estado.movimientoMundo.moverY = -1
    } else if (this.derechaArriba.adentro(ubicacion)) {
      this.estado.direccion = EstadoDirecciones.derechaArriba
      this.estado.movimientoMundo.moverX = 1
      this.estado.movimientoMundo.moverY = -1
    } else if (this.izquierda.adentro(ubicacion)) {
      this.estado.direccion = EstadoDirecciones.izquierda
      this.estado.movimientoMundo.moverX = -1
      this.estado.movimientoMundo.moverY = 0
    } else if (this.derecha.adentro(ubicacion)) {
      this.estado.direccion = EstadoDirecciones.derecha
      this.estado.movimientoMundo.moverX = 1
      this.estado.movimientoMundo.moverY = 0
    } else if (this.izquierdaAbajo.adentro(ubicacion)) {
      this.estado.direccion = EstadoDirecciones.izquierdaAbajo
      this.estado.movimientoMundo.moverX = -1
      this.estado.movimientoMundo.moverY = 1
    } else if (this.abajo.adentro(ubicacion)) {
      this.estado.direccion = EstadoDirecciones.abajo
      this.estado.movimientoMundo.moverX = 0
      this.estado.movimientoMundo.moverY = 1
    } else if (this.derechaAbajo.adentro(ubicacion)) {
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