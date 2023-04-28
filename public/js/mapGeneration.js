import player from './player.js'
import vector2 from './vector2.js'

window.onload = createMap
const game = document.querySelector("#game")
const width = 100
const height = 40
const steps = 250
let screen = []
let X = width / 2
let Y = height / 2

const wall = '█'
const floor = '.'

let map = []

let PLAYER = new player(X, Y, 10)

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function createMap() {
    for (let i = 0; i < width; i++) {
        screen[i] = []
    }

    map.push(new vector2(X, Y))
    for (let i = 0; i < steps; i++) {
        let rn = randomNumber(1, 4)
        switch (rn) {
            case 1: //Up
                if (Y < height) {
                    Y++
                }
                break

            case 2: //Right
                if (X < width) {
                    X++
                }
                break

            case 3: //Down
                if (Y > 0) {
                    Y--
                }
                break

            case 4: //Left
                if (X > 0) {
                    X--
                }
                break
        }
        map.push(new vector2(X, Y))
    }
    createScreen()
}

function createScreen() {
    game.innerHTML = ''
    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            screen[x][y] = wall
        }
    }
    for (let i = 0; i < map.length; i++) {
        screen[map[i].x][map[i].y] = floor
    }
    screen[PLAYER.x][PLAYER.y] = '<span class="player">' + PLAYER.icon + '</span>'
    drawScreen()
}

function drawScreen() {
    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            game.innerHTML = game.innerHTML + screen[x][y]
        }
        game.innerHTML = game.innerHTML + "\n"
    }
}

function movePlayer(x, y) {
    if (screen[PLAYER.x + x][PLAYER.y + y] != wall) {
        PLAYER.x += x
        PLAYER.y += y
        createScreen()
    }
}

document.addEventListener('keyup', (e) => {
    if (e.code === "ArrowUp") {
        movePlayer(0, -1)
    }
    else if (e.code === "ArrowDown") {
        movePlayer(0, 1)
    }
    if (e.code === "ArrowRight") {
        movePlayer(1, 0)
    }
    else if (e.code === "ArrowLeft") {
        movePlayer(-1, 0)
    }
})