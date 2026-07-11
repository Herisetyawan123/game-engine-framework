// tempat semua route di daftarin, biar gampang di switchTo
// misal g.scenes.switchTo('menu') bakal switch ke scene menu
// semua scene harus di register dulu disini, biar bisa di switchTo
// kalau ga di register, bakal switch ke scene 404 (NotFoundScene)

function registerAllScenes(game) {
    game.first_scene = "menu"; // set first scene to menu

    game.scenes.register('menu', MainMenuScene);
    game.scenes.register('game', GameScene);
    game.scenes.register('settings', SettingsScene);
    game.scenes.register('result', ResultScene);
    game.scenes.register('gameover', GameOverScene);
    game.scenes.register('credits', CreditsScene);
}