import Phaser from "phaser"

import Player from "../classes/Player"

export default class Play extends Phaser.Scene {
    constructor() {
        super({ key: "PLAY" })
    }

    init() {}

    preload() {}

    create() {
        const map = this.add.tilemap("map")
        const tileset = map.addTilesetImage("tileset", "tileset")
        var Ground = map.createStaticLayer("Ground", tileset)
        var Plants = map.createStaticLayer("Plants", tileset)
        var player = new Player(this, 100, 250)
    }
}
