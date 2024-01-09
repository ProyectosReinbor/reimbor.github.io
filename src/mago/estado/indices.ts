import { MagoEstadoAcciones } from "./acciones"
import { MagoEstadoDirecciones } from "./direcciones"

export const MagoEstadoIndices = [
  MagoEstadoAcciones.parado + MagoEstadoDirecciones.abajo,
  MagoEstadoAcciones.caminar + MagoEstadoDirecciones.abajo,
  MagoEstadoAcciones.hechizo + MagoEstadoDirecciones.abajo,
  MagoEstadoAcciones.parado + MagoEstadoDirecciones.izquierdaAbajo,
  MagoEstadoAcciones.caminar + MagoEstadoDirecciones.izquierdaAbajo,
  MagoEstadoAcciones.hechizo + MagoEstadoDirecciones.izquierdaAbajo,
  MagoEstadoAcciones.parado + MagoEstadoDirecciones.izquierda,
  MagoEstadoAcciones.caminar + MagoEstadoDirecciones.izquierda,
  MagoEstadoAcciones.hechizo + MagoEstadoDirecciones.izquierda,
  MagoEstadoAcciones.parado + MagoEstadoDirecciones.izquierdaArriba,
  MagoEstadoAcciones.caminar + MagoEstadoDirecciones.izquierdaArriba,
  MagoEstadoAcciones.hechizo + MagoEstadoDirecciones.izquierdaArriba,
  MagoEstadoAcciones.parado + MagoEstadoDirecciones.arriba,
  MagoEstadoAcciones.caminar + MagoEstadoDirecciones.arriba,
  MagoEstadoAcciones.hechizo + MagoEstadoDirecciones.arriba,
  MagoEstadoAcciones.parado + MagoEstadoDirecciones.derechaAbajo,
  MagoEstadoAcciones.caminar + MagoEstadoDirecciones.derechaAbajo,
  MagoEstadoAcciones.hechizo + MagoEstadoDirecciones.derechaAbajo,
  MagoEstadoAcciones.parado + MagoEstadoDirecciones.derecha,
  MagoEstadoAcciones.caminar + MagoEstadoDirecciones.derecha,
  MagoEstadoAcciones.hechizo + MagoEstadoDirecciones.derecha,
  MagoEstadoAcciones.parado + MagoEstadoDirecciones.derechaArriba,
  MagoEstadoAcciones.caminar + MagoEstadoDirecciones.derechaArriba,
  MagoEstadoAcciones.hechizo + MagoEstadoDirecciones.derechaArriba,
]