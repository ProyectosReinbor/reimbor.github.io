import { Componente } from "../componentes/componente.js"
export class Objeto {
  componentes: Componente[]
  constructor() {
    this.componentes = []
  }
  actualizar() {
    this.componentes.forEach(componente => {
      componente.actualizar()
    })
  }
}