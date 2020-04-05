import Phaser from "phaser"

import tileset from "../assets/maps/jungle/tileset.png"
import map from "../assets/maps/jungle/map.json"

import character from "../assets/characters/duck.png"

export default class Load extends Phaser.Scene {
    constructor() {
        super({ key: "LOAD" })
    }

    init() {}

    preload() {
        this.load.image("tileset", tileset)
        this.load.image("character", character)
        this.load.tilemapTiledJSON("map", map)
    }

    create() {
        this.scene.start("PLAY")
    }
}
