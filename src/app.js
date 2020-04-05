import GUN from "gun"
import SEA from "gun/sea"
import Phaser from "phaser"

import Load from "./scenes/Load"
import Play from "./scenes/Play"

let gun = GUN("https://gunjs.herokuapp.com/gun").get("/mmzshooting")

window.gun = gun // just for debugging

let game = new Phaser.Game({
    type: Phaser.AUTO,
    width: window.innerWidth,
    height: window.innerHeight,
    physics: {
        default: "arcade",
        arcade: {
            debug: false,
        },
    },
    scene: [Load, Play],
    render: { pixelArt: true, antialias: false, autoResize: false },
})
window.game = game // just for debugging
