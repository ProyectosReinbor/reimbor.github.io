export class PosicionMundo {
    constructor(motor, posicion, posicionInterfaz) {
        this.motor = motor;
        this.posicion = posicion;
        this.posicionInterfaz = posicionInterfaz;
    }
    actualizar() {
        if (this.motor.camara.visible(this.posicion) == false)
            return false;
        this.posicionInterfaz.posicion = this.motor.camara.posicionLienzo(this.posicion);
        this.posicionInterfaz.actualizar();
    }
}
