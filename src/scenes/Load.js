import Phaser from "phaser"

// import ob from "./../assets/transparency.png"

export default class Load extends Phaser.Scene {
    constructor() {
        super({ key: "LOAD" })
    }

    init() {}

    preload() {
        // this.load.image("test", ob)
    }

    create() {
        this.scene.start("PLAY")
    }
}
