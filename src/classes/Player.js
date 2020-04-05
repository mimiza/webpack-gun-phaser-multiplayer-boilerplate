import Phaser from "phaser"

export default class Player extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y) {
        super(scene, x, y)
        scene.add.image(x, y, "character")
        console.log(this)
    }
}
