class Cloud extends GuaImage {
    constructor(game) {
        let name = 'cloud'
        super(game, name)
        this.setup()
    }

    setup() {
        this.speed = 1
        this.x = randomBetween(10, 350)
        this.y = -randomBetween(10, 150)
    }

    update() {
        this.y += this.speed
        if(this.y > 600) {
            this.setup()
        }
    }
}