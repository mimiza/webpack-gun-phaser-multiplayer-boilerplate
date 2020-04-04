import GUN from "gun"
import SEA from "gun/sea"
import Phaser from "phaser"

import Load from "./scenes/Load"
import Play from "./scenes/Play"

var gun = GUN("https://gunjs.herokuapp.com/gun")

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
})

window.game = game
