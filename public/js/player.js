export default class player {
    constructor(x, y, hp) {
        this.x = x
        this.y = y
        this.hp = hp
        this.icon = '@'
    }

    getIcon() {
        return this.icon
    }

    setIcon(icon) {
        this.icon = icon
    }
}
