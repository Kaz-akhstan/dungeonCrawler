window.onload = createMap
const game = document.querySelector("#game")
const width = 100
const height = 20
const steps = 20
let map = []
let X = 0
let Y = 0

import vector2 from './vector2.js'

let v2 = new vector2(2, 1)
alert(v2.x + " " + v2.y)

function createMap() {
    for (var i = 0; i < width; i++) {
        map[i] = [];
    }
    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            map[x][y] = '#'
            game.innerHTML = game.innerHTML + map[x][y]
        }
        game.innerHTML = game.innerHTML + "\n"
    }
}