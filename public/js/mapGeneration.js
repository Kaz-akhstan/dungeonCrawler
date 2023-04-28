import vector2 from './vector2.js'

window.onload = createMap
const game = document.querySelector("#game")
const width = 100
const height = 40
const steps = 250
let screen = []
let X = 0
let Y = 0

let map = []

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function createMap() {
    X = width/2
    Y = height/2
    for (let i = 0; i < width; i++) {
        screen[i] = []
    }

    map.push(new vector2(X, Y))
    for (let i = 0; i < steps; i++) {
        let rn = randomNumber(1, 4)
        switch (rn) {
            case 1: //Up
                if(Y < height)
                {
                    Y++
                }
                break

            case 2: //Right
                if(X < width)
                {
                    X++
                }
                break

            case 3: //Down
                if(Y > 0)
                {
                    Y--
                }
                break

            case 4: //Left
                if(X > 0)
                {
                    X--
                }
                break
        }
        //map[i] = new vector2(X, Y)
        map.push(new vector2(X, Y))
    }
    createScreen()
}

function createScreen()
{
    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            screen[x][y] = '█'
        }
    }
    for(let i = 0; i < map.length; i++)
    {
        screen[map[i].x][map[i].y] = '.'
    }
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