import { Ubicacion } from "../objetos/ubicacion/ubicacion.js";
import { Motor } from "../motor/motor.js";
import { Estado } from "./estado.js";
import { UbicacionCoordenada } from "../objetos/ubicacion/coordenada.js";
import { UbicacionMedida } from "../objetos/ubicacion/medida.js";

export class AtraerCamara {
  motor: Motor
  estado: Estado
  ultimaCoordenadaMundo: UbicacionCoordenada
  constructor(
    motor: Motor,
    estado: Estado,
  ) {
    this.motor = motor
    this.estado = estado
    this.ultimaCoordenadaMundo = new UbicacionCoordenada(0, 0)
  }
  actualizar() {
    if (
      this.ultimaCoordenadaMundo.x == this.estado.ubicacionMundo.coordenada.x &&
      this.ultimaCoordenadaMundo.y == this.estado.ubicacionMundo.coordenada.y
    ) return
    this.ultimaCoordenadaMundo = new UbicacionCoordenada(
      this.estado.ubicacionMundo.coordenada.x,
      this.estado.ubicacionMundo.coordenada.y,
    )
    const mitadVision = this.motor.camara.medida.mitad()
    const mitadPosicionMundo = this.estado.ubicacionMundo.medida.mitad()
    this.motor.camara.coordenada = new UbicacionCoordenada(
      this.estado.ubicacionMundo.coordenada.x - mitadVision.ancho + mitadPosicionMundo.ancho,
      this.estado.ubicacionMundo.coordenada.y - mitadVision.alto + mitadPosicionMundo.alto,
    )
    this.motor.camara.medida = new UbicacionMedida(
      this.motor.camara.medida.ancho,
      this.motor.camara.medida.alto,
    )
  }
}