class GuaParticle extends GuaImage {
    constructor(game) {
        super(game, 'fire')
        this.setup()
    }

    setup() {
        this.life = 25
    }

    init(x, y, vx, vy) {
        this.x = x
        this.y = y
        this.vx = vx
        this.vy = vy
    }

    update() {
        this.life -= 1
        this.x += this.vx
        this.y += this.vy
        let factor = 0.02
        this.vx += factor * this.vx
        this.vy += factor * this.vy
    }
}

class GuaParticleSystem {
    constructor(game, x, y) {
        this.game = game
        this.setup(x, y)
    }

    static new(game, x, y) {
        return new this(game, x, y)
    }

    setup(x, y) {
        this.alive = true
        this.duration = 30
        this.x = x
        this.y = y
        this.numberOfParticles = 50
        this.particles = []
    }

    update() {
        this.duration--
        if (this.duration === 0) {
            this.alive = false
        }
        //添加小火花
        if (this.particles.length < this.numberOfParticles) {
            let p = GuaParticle.new(this.game)
            let s = 2
            let vx = randomBetween(-s, s)
            let vy = randomBetween(-s, s)
            p.init(this.x, this.y, vx, vy)
            this.particles.push(p)
        }
        //更新小火花
        for (let p of this.particles) {
            p.update()
        }
        // 删除死掉的火花
        this.particles = this.particles.filter(p => p.life > 0)
    }

    draw() {
        for (let p of this.particles) {
            p.draw()
        }
    }

}