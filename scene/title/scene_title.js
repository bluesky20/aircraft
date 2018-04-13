class SceneTitle extends GuaScene {
    constructor(game) {
        super(game)
        game.registerAction('k', function() {
            let s = Scene.new(game)
            game.replaceScene(s)
        })
    }

    draw() {
        this.game.context.fillText('按 k 开始游戏', 146, 190)
    }
}