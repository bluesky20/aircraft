class SceneEnd extends GuaScene {
    constructor(game) {
        super(game)
        let label = GuaLabel.new(game, '')
        this.addElement(label)
        game.registerAction('r', function() {
            let s = SceneTitle.new(game)
            game.replaceScene(s)
        })
    }


    draw() {
        this.game.context.fillText('游戏结束, 按 r 返回标题界面', 120, 190)
    }
}