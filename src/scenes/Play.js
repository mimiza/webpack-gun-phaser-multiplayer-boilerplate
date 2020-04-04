import Phaser from "phaser"

// import Player from "../classes/Player"
import tilesetimg from "../assets/maps/jungle/tileset.png"
import mapdata from "../assets/maps/jungle/data.json"

export default class Play extends Phaser.Scene {
    constructor() {
        super({ key: "PLAY" })
    }

    init() {}

    preload() {
        this.load.image("tilesetimg", tilesetimg)
        this.load.tilemapTiledJSON("mapdata", mapdata)
    }

    create() {
        const map = this.add.tilemap("mapdata")
        const tiles = map.addTilesetImage("tileset", "tilesetimg")
        var Ground = map.createStaticLayer("Ground", tiles)
        var Plants = map.createStaticLayer("Plants", tiles)
    }
}
