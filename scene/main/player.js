class Player extends GuaImage {
    constructor(game) {
        super(game, 'player')
        this.setup()
    }

    setup() {
        this.lifes = 3
        this.score = 0
        this.type = 'player'
        this.speed = 5
        this.cooldown = 0
    }

    update() {
        this.speed = config.player_speed
        if(this.cooldown > 0) {
            this.cooldown -= 1
        }
    }

    kill() {
        this.lifes--
        if(this.lifes < 1) {
            this.alive = false
        }
    }

    addScore() {
        this.score += 1
    }

    fire() {
        if(this.cooldown == 0) {
            this.cooldown = config.fire_cooldown
            let x = this.x + this.w / 2 - 3
            let y = this.y - 10
            let b = Bullet.new(this.game)
            b.x = x
            b.y = y
            this.scene.addElement(b)
        }
    }

    moveLeft() {
        this.x -= this.speed
    }

    moveRight() {
        this.x += this.speed
    }

    moveUp() {
        this.y -= this.speed
    }

    moveDown() {
        this.y += this.speed
    }
}