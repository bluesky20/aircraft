class Scene extends GuaScene {
    constructor(game) {
        super(game)
        this.setup()
        this.setupInputs()
    }
    setup() {
        let game = this.game
        this.numberOfEnemies = 8
        this.bg = GuaImage.new(game, 'sky')
        this.cloud = Cloud.new(game, 'cloud')

        this.player = Player.new(game)
        this.player.x = 150
        this.player.y = 400
        this.addElement(this.bg)
        this.addElement(this.player)
        this.addElement(this.cloud)
        this.addEnemies()
    }
    draw() {
        super.draw()
        this.game.context.fillText('分数: ' + this.player.score, 10, 590)
        this.game.context.fillText('生命: ' + this.player.lifes, 350, 590)
    }
    addEnemies() {
        let es = []
        for (let i = 0; i < this.numberOfEnemies; i++) {
            let e = Enemy.new(this.game)
            es.push(e)
            this.addElement(e)
        }
        this.enemies = es
    }
    addGuaParticleSystem(x, y) {
        let ps = GuaParticleSystem.new(this.game, x, y)
        this.addElement(ps)
    }
    setupInputs() {
        let g = this.game
        let s = this
        g.registerAction('a', function(){
            s.player.moveLeft()
        })
        g.registerAction('d', function(){
            s.player.moveRight()
        })
        g.registerAction('w', function(){
            s.player.moveUp()
        })
        g.registerAction('s', function(){
            s.player.moveDown()
        })
        g.registerAction('j', function(){
            s.player.fire()
        })
    }
    update() {
        if (window.paused) {
            log('暂停')
            return
        }
        super.update()
        this.cloud.y += 1

        // 判断游戏结束
        if (!this.player.alive) {
            let end = SceneEnd.new(this.game)
            this.game.replaceScene(end)
        }
        // 敌机开火
        for(let e of this.enemies) {
            e.fire()
        }
        // 判断相撞
        for(let e of this.elements) {
            for(let l of this.elements) {
                if(e instanceof Enemy) {
                    if(l instanceof Player) {
                        if(l.collide(e)) {
                            e.kill()
                            this.addGuaParticleSystem(e.x, e.y)
                            l.addScore()
                            l.kill()
                            log('撞了')
                        }
                    }
                }else if(e instanceof Bullet) {
                    if(l.type && e.type) {
                        if(l.type !== e.type && l.collide(e)) {
                            e.kill()
                            l.kill()
                            if(l instanceof Enemy) {
                                this.addGuaParticleSystem(e.x, e.y)
                                this.player.addScore()
                            }
                        }
                    }
                }
            }
        }
    }
}
