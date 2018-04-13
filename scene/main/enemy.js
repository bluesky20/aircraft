class Enemy extends GuaImage {
    constructor(game) {
        let type = randomBetween(0, 4)
        let name = 'enemy' + type
        super(game, name)
        this.setup()
    }

    kill() {
        this.lifes--
        if(this.lifes < 1) {
            this.alive = false
        }
    }

    setup() {
        this.type = 'enemy'
        this.lifes = 1
        this.cooldown = 30
        this.speed = randomBetween(2, 5)
        this.x = randomBetween(10, 350)
        this.y = -randomBetween(1, 10)
    }

    update() {
        this.y += this.speed
        if(this.y > 600) {
            this.setup()
        }
        if(this.cooldown > 0) {
            this.cooldown -= 1
        }
    }

    fire() {
        // log(this.cooldown)
        if(this.cooldown == 0) {
            this.cooldown = randomBetween(60, 90)
            let x = this.x + this.w / 2 - 2
            let y = this.y + this.h + 2
            let b = Bullet.new(this.game)
            b.type = 'enemy'
            b.x = x
            b.y = y
            // log('fire', b)
            this.scene.addElement(b)
        }
    }
}