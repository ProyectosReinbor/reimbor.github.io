import Transformar from './transformar.js';
export default class extends Transformar {
  constructor(
    motor,
    x,
    y,
    ancho,
    alto,
    color = "#fff",
  ) {
    super(motor, x, y, ancho, alto);
    this.color = color;
  }
  dibujar() {
    this.motor.contexto.fillStyle = this.color;
    const { x, y, ancho, alto } = this.pixeles();
    this.motor.contexto.fillRect(x, y, ancho, alto);
  }
}