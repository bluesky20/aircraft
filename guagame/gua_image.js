class GuaImage {
    constructor(game, name) {
        this.game = game
        this.texture = game.textureByName(name)
        this.x = 0
        this.y = 0
        this.w = this.texture.width
        this.h = this.texture.height
        this.alive = true
    }
    static new(game, name) {
        let i = new this(game, name)
        return i
    }
    collide(b) {
        let o = this
        return o.alive && (rectIntersects(o, b) || rectIntersects(b, o))
    }
    draw() {
        this.game.drawImage(this)
    }
    update() {

    }
}

