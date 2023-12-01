import {Objetos} from "./objetos.js"
export class Motor {
    objetos: Objetos
    constructor(objetos: Objetos){
        this.objetos = objetos
        console.log(this.objetos)
    }
}