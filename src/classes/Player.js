import Phaser from "phaser"

export default class Player extends Phaser.Game {
    constructor(id, x, y) {
        super()
        this.id = id
        this.x = x
        this.y = y
        this.add.image(100, 100, "test")
    }
}
