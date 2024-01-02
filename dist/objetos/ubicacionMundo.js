export class UbicacionMundo {
    constructor(motor, ubicacion) {
        this.motor = motor;
        this.ubicacion = ubicacion;
    }
    obtenerPixeles() {
        if (this.motor.camara.visible(this.ubicacion) == false)
            return;
        const interfazUbicacion = this.motor.camara.ubicacionLienzo(this.ubicacion);
        return interfazUbicacion.obtenerPixeles();
    }
}
