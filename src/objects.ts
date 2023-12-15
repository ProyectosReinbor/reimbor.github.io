import { Magician } from './magician/magician.js'
import { Engine } from './engine/engine.js'
export class Objects {
  engine: Engine
  magician: Magician
  constructor() {
    const afterUpdating = () => {
      this.update()
    }
    this.engine = new Engine(afterUpdating)
    this.magician = new Magician(this.engine)
  }
  update() {
    this.magician.update()
  }
}