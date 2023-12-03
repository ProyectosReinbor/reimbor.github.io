export const objetos = [
    6, 6, 6, 6, 6, 6,
    4, 4, 4,
    3,
];
export const indices = [
    "PARARABAJO",
    "PARARDERECHA",
    "PARARARRIBA",
    "CAMINARABAJO",
    "CAMINARDERECHA",
    "CAMINARARRIBA",
    "ATACARABAJO",
    "ATACARDERECHA",
    "ATACARARRIBA",
    "MORIRDERECHA",
];
export class Estados {
    constructor(motor, posicionMundo, velocidad) {
        this.motor = motor;
        this.posicionMundo = posicionMundo;
        this.direccion = "ABAJO";
        this.accion = "PARAR";
        this.movimiento = {
            velocidad: 3,
            moverX: 0,
            moverY: 0,
        };
        this.animaciones = {
            indice: -1,
            objetos: -1,
            horizontal: 6,
            vertical: 10,
            src: "imagenes/jugador.png",
        };
    }
    animacion() {
        let indice = indices.indexOf(`${this.accion}${this.direccion}`);
        if (this.accion == "MORIR") {
            indice = indices.indexOf(`${this.accion}${"DERECHA"}`);
        }
        else if (this.direccion == "IZQUIERDA") {
            indice = indices.indexOf(`${this.accion}${"DERECHA"}`);
        }
        if (this.animaciones.indice == indice)
            return false;
        this.animaciones.indice = indice;
        this.animaciones.objetos = objetos[indice];
        return true;
    }
    moverse() {
        if (this.accion != "CAMINAR")
            return;
        const segundos = this.motor.ultimoTiempoEntreCuadro / 1000;
        const velocidad = this.movimiento.velocidad * segundos;
        this.posicionMundo.x += velocidad * this.movimiento.moverX;
        this.posicionMundo.y += velocidad * this.movimiento.moverY;
    }
    actualizar() {
        this.moverse();
        this.animacion();
    }
}
