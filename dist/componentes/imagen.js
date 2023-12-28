var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export class Imagen {
    constructor(motor, nombre) {
        this.motor = motor;
        this.asignarImagen(nombre);
    }
    asignarImagen(nombre) {
        return __awaiter(this, void 0, void 0, function* () {
            this.elemento = yield this.motor.imagenes.obtener(nombre);
        });
    }
    dibujarElemento(elementoImagen, posicionLienzo) {
        if (this.elemento == undefined)
            return;
        this.motor.lienzo.contexto.imageSmoothingEnabled = false;
        this.motor.lienzo.contexto.drawImage(this.elemento, elementoImagen.x, elementoImagen.y, elementoImagen.ancho, elementoImagen.alto, posicionLienzo.x, posicionLienzo.y, posicionLienzo.ancho, posicionLienzo.alto);
    }
    dibujar(posicionLienzo) {
        if (this.elemento == undefined)
            return;
        this.motor.lienzo.contexto.imageSmoothingEnabled = false;
        this.motor.lienzo.contexto.drawImage(this.elemento, posicionLienzo.x, posicionLienzo.y, posicionLienzo.ancho, posicionLienzo.alto);
    }
}
