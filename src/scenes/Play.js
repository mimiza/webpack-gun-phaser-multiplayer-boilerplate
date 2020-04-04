import Phaser from "phaser"

export default class Play extends Phaser.Scene {
    constructor() {
        super({ key: "PLAY" })
    }

    init() {}

    preload() {}

    create() {
        this.add.image(100, 100, "test")
    }
}
