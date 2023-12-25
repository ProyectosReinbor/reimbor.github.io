export class PosicionMundo {
    constructor(motor, posicion, posicionInterfaz) {
        this.motor = motor;
        this.posicion = posicion;
        this.posicionInterfaz = posicionInterfaz;
    }
    actualizar() {
        this.posicionInterfaz.posicion = this.motor.camara.posicionLienzo(this.posicion);
        this.posicionInterfaz.actualizar();
    }
}
