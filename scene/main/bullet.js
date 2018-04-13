class Bullet extends GuaImage {
    constructor(game) {
        super(game, 'bullet')
        this.setup()
    }

    setup() {
        this.speed = 6
        this.type = 'player'
    }

    kill() {
        this.alive = false
    }

    update() {
        this.speed = config.bullet_speed
        if(this.type == 'player') {
            this.y -= this.speed
        } else {
            this.y += this.speed
        }
        if(this.y > 600 || this.y < 0) {
            this.kill()
        }
    }

    // debug() {
    //     this.speed = config.bullet_speed
    // }
}