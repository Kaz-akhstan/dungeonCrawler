window.onload = createMap
const game = document.querySelector("#game")
const width = 100
const height = 60
const steps = 20
let map = []

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