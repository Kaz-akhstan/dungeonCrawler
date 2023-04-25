import vector2 from './vector2.js'

window.onload = createMap
const game = document.querySelector("#game")
const width = 100
const height = 20
const steps = 20
let screen = []
let X = 0
let Y = 0

let map = []

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function createMap() {
    for (let i = 0; i < width; i++) {
        screen[i] = []
    }

    map.push(new vector2(X, Y))
    for (let i = 0; i < steps; i++) {
        let rn = randomNumber(1, 2)
        switch (rn) {
            // case 1: //Up
            //     Y++
            //     break

            // case 2: //Right
            //     X++
            //     break

            // case 3: //Down
            //     Y--
            //     break

            // case 4: //Left
            //     X--
            //     break
            case 1: //Right
                X++
                break
            
            case 2:
                Y--
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
            screen[x][y] = '.'
        }
    }
    for(let i = 0; i < map.length; i++)
    {
        screen[map[i].x][map[i].y] = '#'    //FUNKAR INTE
    }
    alert(screen[0])
    alert(screen[1])
    alert(screen[2])
    alert(screen[3])
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